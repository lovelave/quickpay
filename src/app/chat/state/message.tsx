import * as React from "react";
import * as Chat from "modules/chat";
import * as Calculator from "../calculator";
import * as Card from "../card";
import * as Registration from "../registration";
import * as SignUp from "../sign-up";
import * as Agreement from "../agreement";
import * as Base from "../base";
import {FailureMessage} from "./failure-message";
import {DelayMessage} from "./delay-message";
import {TimeoutMessage} from "./timeout-message";
import {RedirectMessage} from "../base/redirect-message";
import {TextMessageEditable} from "../base/text-message-editable";

export interface MessageProps<M extends Chat.Message = any> {
    value: M;
    i?: number;
}

export type Message<P extends MessageProps = MessageProps> =
    React.ComponentType<P>;

export const Message: Message = ({value}) => {
    if (value.type.startsWith("reg")) {
        const Component = Registration.MessageComponentFactory(value.type);
        if (Component) {
            return <Component value={value}/>;
        }
    } else if (value.type.startsWith("sign-up")) {
        const Component = SignUp.MessageComponentFactory(value.type);
        if (Component) {
            return <Component value={value}/>;
        }
    } else if (value.type.startsWith("agreement")) {
        const Component = Agreement.MessageComponentFactory(value.type);
        if (Component) {
            return <Component value={value}/>
        }
    } else switch (value.type) {
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
        case "calculator:header":
            return <Calculator.HeaderMessage/>;
        case "calculator:loading":
            return <Calculator.LoadingMessage value={value}/>;
        case "calculator:edit-loading":
            return <Calculator.EditLoadingMessage value={value}/>;
        case "calculator:form":
            return <Calculator.FormMessage value={value}/>;
        case "calculator:menu":
            return <Calculator.MenuMessage/>;
        case "calculator:edit-menu":
            return <Calculator.EditMenuMessage/>;
        case "calculator:form-submit":
            return <Calculator.FormSubmitMessage/>;
        case "card:welcome":
            return <Card.WelcomeMessage/>;
        case "card:iframe":
            return <Card.IframeMessage value={value} />;
        case "card:support":
            return <Card.SupportMessage/>;
        case "card:load":
            return <Card.LoadMessage />;
        case "card:info":
            return <Card.InfoMessage value={value}/>;
        case "card:confirm-form":
            return <Card.ConfirmFormMessage value={value} />;
        case "card:confirm":
            return <Card.ConfirmMessage value={value} />;
        case "timeout":
            return <TimeoutMessage value={value}/>;
        case "editable":
            return <TextMessageEditable value={value}/>;
        case "card:delete-load":
            return <Card.DeleteLoadMessage value={value} />;
    }
    return <FailureMessage details={value}/>;
};
