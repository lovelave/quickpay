import * as React from "react";
import * as Base from "../base";
import * as Chat from "../reducer";
import {useDispatchContext} from "../reducer";
import {isMobile} from "../../utils/use-is-mobile";
import {useWindowWidth} from "@horat1us/react-hooks";

export const LoadIframeMessage: React.FC<{value: Chat.LoadIframeMessage}> = ({value: {phone, amount}}) => {
    const dispatch = useDispatchContext();
    const width = useWindowWidth();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        const goodUrl = isMobile(width) ? window.location.href + "?success" : window.location.origin + "/iframe.html";
        const badUrl = isMobile(width) ? window.location.href + "?error" : window.location.origin + "/iframe.html";

        const requestUrl = new URL("https://test.l-l.cloud/v3/payment/platon/order/repayment");
        requestUrl.searchParams.append("phone", phone);

        fetch(requestUrl.toString(),
            {
                headers: {"Content-type": "application/json"},
                method: "POST",
                body: JSON.stringify({Order: {goodUrl, badUrl, amount}}),
            })
            .then(response => response.json())
            .then(({action, data}) => {
                controller = undefined;

                dispatch(new Chat.ReplaceAction([
                    new Chat.IframeMessage(action, Object.entries(data) as Array<[string, string]>),
                ]));
            });

        return () => controller && controller.abort();
    }, []);

    return <Base.LoadMessage />;
};
