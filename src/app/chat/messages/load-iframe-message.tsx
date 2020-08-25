import * as React from "react";
import * as Base from "../base";
import * as Chat from "../reducer";
import {useDispatchContext} from "../reducer";

export const LoadIframeMessage = () => {
    const dispatch = useDispatchContext();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        const url = new URL("https://test.l-l.cloud/v3/payment/platon/order/card");
        url.searchParams.append("goodUrl", window.location.origin + "/iframe.html");

        fetch(url.toString(),
            {
                headers: {"authorization": "Bearer 31a7cd52-bad5-473a-98b8-b612f312fd31"},
                method: "POST",
            })
            .then(response => response.json())
            .then(({data: {action, data}}) => {
                controller = undefined;

                dispatch(new Chat.ReplaceAction([
                    new Chat.IframeMessage(action, Object.entries(data) as Array<[string, string]>),
                ]));
            });

        return () => controller && controller.abort();
    }, []);

    return <Base.LoadMessage />;
}
