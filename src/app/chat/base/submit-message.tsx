import * as React from "react";
import * as Chat from "modules/chat";
import * as Client from "modules/client";
import axios from "axios";
import { LoadMessage } from "./load-message";

export interface SubmitMessageProps<V = any, D = any> {
    value?: V;
    onRequest: (api: Client.Api.Instance, value: V) => | Promise<D>;
    onFinish: (response: Promise<D>) => Promise<Chat.Action | void> | void;
}

export const SubmitMessage = Client.withApi<SubmitMessageProps>(
    ({ api, value, onRequest, onFinish }) => {
        const dispatch = Chat.useDispatchContext();
        React.useEffect(() => {
            const cancelToken = axios.CancelToken.source();
            onRequest(api.with({ cancelToken: cancelToken.token }), value)
                .then(async (response) => {
                    const action = await onFinish(response);
                    if (action === undefined) {
                        return;
                    }
                    dispatch(action);
                });
        }, [api, value, onRequest, onFinish]);
        return <LoadMessage/>;
    }
);
