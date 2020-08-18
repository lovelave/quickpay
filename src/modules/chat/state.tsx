import * as React from "react";
import {LoadMessage, Message, TextMessage} from "./message";
import {ClientStatus} from "./reducer";

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
                    ];
                }
                return [
                    new TextMessage(`Приветствую! Вы можете оплатить свой кредит или кредит друга по номеру телефона!`),
                    new TextMessage(`Укажите номер мобильного телефона`),
                ];
            case false:
                return [new TextMessage("shit")];
            case undefined:
                return [];
        }
        return [new TextMessage(status)];
    }

    constructor(public messages: Array<Message> = [LoadMessage]) {
    }
}
