import * as React from "react";
import * as Chat from "modules/chat";
import * as Base from "../base";
import {FailureMessage} from "./failure-message";
import {DelayMessage} from "./delay-message";
import {TimeoutMessage} from "./timeout-message";
import {RedirectMessage} from "../base/redirect-message";

export interface MessageProps<M extends Chat.Message = any> {
    value: M;
    i?: number;
}

export type Message<P extends MessageProps = MessageProps> =
    React.ComponentType<P>;

export const Message: Message = ({value}) => {
    switch (value.type) {
        case "text":
            const message = value as Chat.TextMessage;
            return <Base.MarkdownMessage
                source={message.author}
                at={message.time}
                content={message.markdown}
                isDebug={("isDebug" in message) && message.isDebug}
            />;
        case "delay":
            return <DelayMessage value={value}/>;
        case "redirect":
            return <RedirectMessage to={value.to} />;
        case "timeout":
            return <TimeoutMessage value={value}/>;
    }
    return <FailureMessage details={value}/>;
};
