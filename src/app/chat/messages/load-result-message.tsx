import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";
import { UserData } from "../chat-logic";
import { getBaseUrl } from "../../utils/get-base-url";

// Debt after the return from Platon: repaid (404), decreased, or not posted yet.
export const LoadResultMessage: React.FC<{ value: Chat.LoadResultMessage }> = ({
    value,
}) => {
    const dispatch = Chat.useDispatchContext();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        const requestUrl = getBaseUrl();
        requestUrl.pathname = "/v3/quick-pay";
        Chat.appendPayerParam(requestUrl, value.payer, "id");

        const showResult = (user: UserData | undefined) => {
            Chat.forgetPayment();
            dispatch([
                new Chat.RemoveAction(value),
                new Chat.StatePayerAction(value.payer),
                user
                    ? new Chat.StateUserAction(
                          user.debt,
                          user.returnDate,
                          user.name,
                          user.prolongation
                      )
                    : new Chat.ClearUserDataAction(),
                new Chat.StateTypeAction("pay-success"),
            ]);
        };

        fetch(requestUrl.toString(), { signal: controller.signal })
            .then((response) => {
                controller = undefined;

                switch (response.status) {
                    case 404:
                        showResult(undefined);
                        return;
                    case 200:
                        return response.json();
                    default:
                        showResult(Chat.unknownUser);
                        return;
                }
            })
            .then((user?: UserData) => {
                if (!user) {
                    return;
                }
                // Platon reports the payment to the backend on its own: until then the debt is the same.
                const isPosted =
                    value.debtBefore === undefined ||
                    user.debt < value.debtBefore - 0.005;
                showResult(isPosted ? user : Chat.unknownUser);
            })
            .catch(() => {
                if (controller?.signal.aborted) {
                    return;
                }
                showResult(Chat.unknownUser);
            });

        return () => controller && controller.abort();
    }, [value, dispatch]);

    return <Base.LoadMessage />;
};
