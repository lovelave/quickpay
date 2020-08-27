import * as React from "react";
import * as Chat from "../chat-logic";
import * as Messages from "../messages/";
import {TextMessage} from "../base";
import {FailureMessage} from "./failure-message";
import {DelayMessage} from "./delay-message";

export interface MessageProps<M extends Chat.Message = any> {
    value: M;
    i?: number;
}

export type Message<P extends MessageProps = MessageProps> =
    React.ComponentType<P>;

export const Message: Message = ({value}) => {
    switch (value.type) {
        case "text":
            return <TextMessage value={value}/>;
        case "delay":
            return <DelayMessage value={value}/>;
        case "intro":
            return <Messages.IntroMessage />;
        case "intro-request":
            return <Messages.IntroRequestMessage />;
        case "verify":
            return <Messages.VerifyPhoneMessage value={value}/>;
        case "debt-info":
            return <Messages.CreditInfoMessage value={value}/>;
        case "pay-sum":
            return <Messages.PaymentSumMessage value={value}/>;
        case "pay-request":
            return <Messages.PaymentRequestMessage value={value}/>;
        case "home-link":
            return <Messages.HomeLinkMessage />;
        case "load-iframe":
            return <Messages.LoadIframeMessage value={value}/>;
        case "iframe":
            return <Messages.IframeMessage value={value}/>;
        case "load-result":
            return <Messages.LoadResultMessage value={value}/>;
        case "result-phone":
            return <Messages.ResultPhoneMessage value={value}/>;
        case "invalid-phone":
            return <Messages.InvalidPhoneRequestMessage />;
        // case "payment-result":
        //     return <Messages.ResultPaymentMessage value={value}/>;
    }
    return <FailureMessage details={value}/>;
};
