import * as React from "react";
import * as Base from "../base";
import * as Chat from "../chat-logic";
import {useDispatchContext} from "../chat-logic";

export const LoadIframeMessage: React.FC<{value: Chat.LoadIframeMessage}> = ({value: {phone, amount}}) => {
    const dispatch = useDispatchContext();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        const location = window.location.origin + "/iframe.html";

        const requestUrl = new URL("https://lovilave.com.ua/v3/payment/platon/order/repayment");
        requestUrl.searchParams.append("phone", phone);

        fetch(requestUrl.toString(),
            {
                headers: {"Content-type": "application/json"},
                method: "POST",
                body: JSON.stringify({Order: {
                    goodUrl: location,
                    badUrl: location + "?fail",
                    amount: +amount,
                }}),
            })
            .then(response => response.json())
            .then(({action, data}) => {
                controller = undefined;

                dispatch(new Chat.ReplaceAction([
                    new Chat.IframeMessage(action, Object.entries(data) as Array<[string, string]>),
                ]));
            });

        return () => controller && controller.abort();
    }, [phone, amount, dispatch]);

    return <Base.LoadMessage />;
};
