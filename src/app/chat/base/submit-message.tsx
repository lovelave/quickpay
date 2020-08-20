import * as React from "react";
import * as Chat from "modules/chat";
import { LoadMessage } from "./load-message";

export interface SubmitMessageProps<V = any> {
    value?: V;
    onRequest: (value: V, signal: AbortSignal) => | Promise<Response>;
    onFinish: (response: Response) => Promise<Chat.Action | void> | void;
}

export const SubmitMessage: React.FC<SubmitMessageProps> = (({ value, onRequest, onFinish }) => {
        const dispatch = Chat.useDispatchContext();
        React.useEffect(() => {
            let controller: AbortController | undefined = new AbortController();
            onRequest(value, controller.signal)
                .then(async (response) => {
                    controller = undefined;
                    const action = await onFinish(response);
                    if (action === undefined) {
                        return;
                    }
                    dispatch(action);
                });
            return () => controller && controller.abort();
        }, [value, onRequest, onFinish]);
        return <LoadMessage/>;
    }
);
