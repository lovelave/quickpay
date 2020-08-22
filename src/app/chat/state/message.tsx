import * as React from "react";
import * as Chat from "../reducer";
import {FailureMessage} from "./failure-message";
import {DelayMessage} from "./delay-message";
import {IntroMessage} from "../messages/intro-message";
import {TextMessage} from "../base/text-message";
import {IntroRequestMessage} from "../messages/intro-request-message";
import {VerifyPhoneMessage} from "../messages/verify-phone-message";
import {CreditInfoMessage} from "../messages/credit-info-message";

export interface MessageProps<M extends Chat.Message = any> {
    value: M;
    i?: number;
}

export type Message<P extends MessageProps = MessageProps> =
    React.ComponentType<P>;

export const Message: Message = ({value}) => {
    console.log(value);
    switch (value.type) {
        case "intro":
            return <IntroMessage />;
        case "intro-request":
            return <IntroRequestMessage />;
        case "verify":
            return <VerifyPhoneMessage value={value}/>;
        case "debt-info":
            return <CreditInfoMessage value={value}/>
        case "text":
            return <TextMessage value={value}/>
        case "delay":
            return <DelayMessage value={value}/>;
    }
    return <FailureMessage details={value}/>;
};
