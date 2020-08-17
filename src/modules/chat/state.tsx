import * as React from "react";
import {FailureMessage, LoadMessage, Message, RedirectMessage, TextMessage} from "./message";
import {ClientStatus} from "./reducer";
import * as Calculator from "./calculator";
import * as Registration from "./registration";
import * as Agreement from "./agreement";
import * as SignUp from "./sign-up";
import * as Card from "./card";

export interface State {
    messages: Array<Message>;
}

export class State implements State {
    public static getInitialMessages(
        status: ClientStatus,
        location?: any,
    ): State["messages"] {
        switch (status) {
            case null:
                if (location === "login") {
                    return [
                        new TextMessage(`Рад снова вас видеть! Для входа в кабинет введите номер телефона.`),
                        new SignUp.RequestFormMessage(),
                    ];
                }
                return [
                    new Calculator.HeaderMessage(),
                    new Registration.IntroMessage(),
                    new Calculator.LoadingMessage(),
                ];
            case false:
                return [new FailureMessage()];
            case undefined:
                return [];
            case "card":
                return [
                    new Card.WelcomeMessage(),
                    new Card.LoadMessage(),
                ];
            case "registration":
                return [
                    new Calculator.FormSubmitMessage(),
                    new Registration.WelcomeMessage(),
                    new Registration.ValidateMessage(),
                ];
            case "agreement":
                return [
                    new Agreement.AgreementWelcomeMessage(),
                    new Agreement.AgreementLoadMessage(),
                ];
            case "dashboard":
                return [
                    new RedirectMessage("/dashboard"),
                ];
        }
        return [new TextMessage(status)];
    }

    constructor(public messages: Array<Message> = [LoadMessage]) {
    }
}
