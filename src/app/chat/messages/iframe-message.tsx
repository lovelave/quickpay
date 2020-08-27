import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";
import {IframePayment} from "./iframe-payment";

export const IframeMessage: React.FC<{value: Chat.IframeMessage}> = ({value: {action, data}}) => {
    const dispatch = Chat.useDispatchContext();

    React.useEffect(() => {
        const event = new Event("iframe.complete", {
            cancelable: true,
        });

        window.dispatchEvent(event);
    }, []);

    const handleComplete = React.useCallback(() => {
        dispatch(new Chat.LoadPaymentResultAction());
    }, [dispatch]);

    const handleError = React.useCallback(() => {
        // dispatch(new Chat.PaymentErrorMessage);
    }, [dispatch]);

    return (
        <Base.WrapMessage source="user" className="message-card">
            <IframePayment onComplete={handleComplete} onError={handleError} data={data} action={action}/>
        </Base.WrapMessage>
    );
}
