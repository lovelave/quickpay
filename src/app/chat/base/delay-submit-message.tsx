import * as React from "react";
import {SubmitMessage, SubmitMessageProps} from "./submit-message";

export interface DelaySubmitMessageProps extends SubmitMessageProps {
    delayMs?: number;
}

export const DelaySubmitMessage: React.FC<DelaySubmitMessageProps> =
    ({onRequest, onFinish, value, delayMs = 1337}) => {
        const handleFinish = React.useMemo<SubmitMessageProps["onFinish"]>(() => {
            const promise = new Promise(
                (resolve) => setTimeout(resolve, delayMs)
            );
            return (r) => promise.then(() => onFinish(r));
        }, [onFinish]);
        return (
            <SubmitMessage value={value} onRequest={onRequest} onFinish={handleFinish}/>
        );
    }
DelaySubmitMessage.displayName = "DelaySubmitMessage";
