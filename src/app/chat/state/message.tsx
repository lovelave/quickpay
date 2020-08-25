import * as React from "react";
import * as Chat from "../reducer";
import {FailureMessage} from "./failure-message";
import {DelayMessage} from "./delay-message";
import {IntroMessage} from "../messages/intro-message";
import {TextMessage} from "../base/text-message";
import {IntroRequestMessage} from "../messages/intro-request-message";
import {VerifyPhoneMessage} from "../messages/verify-phone-message";
import {CreditInfoMessage} from "../messages/credit-info-message";
import {PaymentSumMessage} from "../messages/payment-sum-message";
import {PaymentRequestMessage} from "../messages/payment-request-message";
import {HomeLinkMessage} from "../messages/home-link-message";
import {LoadIframeMessage} from "../messages/load-iframe-message";
import {IframeMessage} from "../messages/iframe-message";

export interface MessageProps<M extends Chat.Message = any> {
    value: M;
    i?: number;
}

export type Message<P extends MessageProps = MessageProps> =
    React.ComponentType<P>;

export const Message: Message = ({value}) => {
    switch (value.type) {
        case "intro":
            return <IntroMessage />;
        case "intro-request":
            return <IntroRequestMessage />;
        case "verify":
            return <VerifyPhoneMessage value={value}/>;
        case "debt-info":
            return <CreditInfoMessage value={value}/>;
        case "pay-sum":
            return <PaymentSumMessage value={value}/>;
        case "pay-request":
            return <PaymentRequestMessage value={value}/>;
        case "home-link":
            return <HomeLinkMessage />;
        case "load-iframe":
            return <LoadIframeMessage />;
        case "iframe":
            return <IframeMessage value={value}/>;
        case "text":
            return <TextMessage value={value}/>;
        case "delay":
            return <DelayMessage value={value}/>;
    }
    return <FailureMessage details={value}/>;
};
