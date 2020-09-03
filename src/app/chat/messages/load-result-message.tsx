import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";
import {UserData} from "../chat-logic";
import {getBaseUrl} from "../../utils/get-base-url";

export const LoadResultMessage: React.FC<{value: Chat.LoadResultMessage}> = ({value}) => {
    const dispatch = Chat.useDispatchContext();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        const requestUrl = getBaseUrl();
        requestUrl.pathname = "/v3/quick-pay";
        requestUrl.searchParams.append("id", value.phone);

        fetch(requestUrl.toString(), {signal: controller.signal})
            .then(response => {
                controller = undefined;

                switch (response.status) {
                    case 404:
                        dispatch([
                            new Chat.RemoveAction(value),
                            new Chat.ClearUserDataAction(),
                            new Chat.StateInputDataAction("amount", undefined),
                            new Chat.StateTypeAction("pay-success"),
                        ]);
                        return Promise.reject(undefined);
                    case 200:
                        return response.json();
                    default:
                        dispatch([
                            new Chat.StateUserAction(NaN, ""),
                            new Chat.StateTypeAction("pay-success"),
                        ]);
                        return Promise.reject(undefined);
                }
            })
            .then((user: UserData) => {
                dispatch([
                    new Chat.RemoveAction(value),
                    new Chat.StateInputDataAction("amount", undefined),
                    new Chat.StateUserAction(user.debt, user.returnDate, user.prolongation),
                    new Chat.StateTypeAction("pay-success"),
                ]);
            });

        return () => controller && controller.abort();
    }, [value.phone, value.type, dispatch]);

    return <Base.LoadMessage/>;
}
