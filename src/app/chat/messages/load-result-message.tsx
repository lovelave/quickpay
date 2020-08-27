import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";
import {UserData} from "../chat-logic";

export const LoadResultMessage: React.FC<{value: Chat.LoadResultMessage}> = ({value}) => {
    const dispatch = Chat.useDispatchContext();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        const requestUrl = new URL("https://test.l-l.cloud/v3/quick-pay");
        requestUrl.searchParams.append("id", value.phone);

        fetch(requestUrl.toString(), {signal: controller.signal})
            .then(response => {
                controller = undefined;

                switch (response.status) {
                    case 404:
                        dispatch([
                            new Chat.RemoveAction(value),
                            new Chat.StateInputDataAction("amount", undefined),
                            new Chat.StateTypeAction("pay-success"),
                        ]);
                        return Promise.reject(undefined);
                    case 200:
                        return response.json();
                    default:
                        dispatch(new Chat.StateTypeAction("error"));
                        return Promise.reject(undefined);
                }
            })
            .then((user: UserData) => {
                console.log(user);
                dispatch([
                    new Chat.RemoveAction(value),
                    new Chat.StateInputDataAction("amount", undefined),
                    new Chat.StateUserAction(user.debt, user.returnDate, user.prolongation),
                    new Chat.StateTypeAction("pay-success"),
                ]);
            });

        return () => controller && controller.abort();
    }, [value.phone]);

    return <Base.LoadMessage/>;
}
