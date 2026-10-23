import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";
import { UserData } from "../chat-logic";
import { getBaseUrl } from "../../utils/get-base-url";

export const LoadResultMessage: React.FC<{ value: Chat.LoadResultMessage }> = ({
    value,
}) => {
    const dispatch = Chat.useDispatchContext();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        const requestUrl = getBaseUrl();
        requestUrl.pathname = "/v3/quick-pay";
        Chat.appendPayerParam(requestUrl, value.payer, "id");

        fetch(requestUrl.toString(), { signal: controller.signal })
            .then((response) => {
                controller = undefined;

                switch (response.status) {
                    case 404:
                        dispatch([
                            new Chat.RemoveAction(value),
                            new Chat.ClearUserDataAction(),
                            new Chat.StateInputDataAction("amount", undefined),
                            new Chat.StateTypeAction("pay-success"),
                        ]);
                        return;
                    case 200:
                        return response.json();
                    default:
                        dispatch([
                            new Chat.StateUserAction(NaN, "", ""),
                            new Chat.StateTypeAction("pay-success"),
                        ]);
                        return;
                }
            })
            .then((user?: UserData) => {
                if (!user) {
                    return;
                }
                dispatch([
                    new Chat.RemoveAction(value),
                    new Chat.StateInputDataAction("amount", undefined),
                    new Chat.StateUserAction(
                        user.debt,
                        user.returnDate,
                        user.name,
                        user.prolongation
                    ),
                    new Chat.StateTypeAction("pay-success"),
                ]);
            });

        return () => controller && controller.abort();
    }, [value, dispatch]);

    return <Base.LoadMessage />;
};
