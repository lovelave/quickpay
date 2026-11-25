import * as React from "react";
import * as Chat from "../chat-logic";
import * as Messages from "../messages/";
import { TextMessage } from "../base";
import { FailureMessage } from "./failure-message";
import { DelayMessage } from "./delay-message";

export interface MessageProps<M extends Chat.Message = Chat.Message> {
    value: M;
    i?: number;
}

export type Message = React.ComponentType<MessageProps>;

export const Message: Message = ({ value }) => {
    switch (value.type) {
        case "text":
            return <TextMessage value={value} />;
        case "delay":
            return <DelayMessage value={value} />;
        case "intro":
            return <Messages.IntroMessage />;
        case "intro-request":
            return <Messages.IntroRequestMessage />;
        case "verify":
            return <Messages.VerifyPayerMessage value={value} />;
        case "pay-panel":
            return <Messages.PaymentPanelMessage value={value} />;
        case "load-result":
            return <Messages.LoadResultMessage value={value} />;
        case "invalid-phone":
            return <Messages.InvalidPhoneRequestMessage />;
    }
    return <FailureMessage details={value} />;
};
