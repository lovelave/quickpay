import * as Client from "modules/client";
import { TextMessage } from "./message";

export class WelcomeMessage {
    public readonly type = "card:welcome";
}

export class LoadMessage {
    public readonly type = "card:load";
}

export class IframeMessage {
    public readonly type = "card:iframe";

    public constructor(
        public readonly action: string,
        public readonly data: Array<[ string, string ]>
    ) {
    }
}

export class InfoMessage {
    public readonly type = "card:info";

    public constructor(
        public readonly card: Client.Api.Payment.Card
    ) {
    }
}

export class ConfirmInfoMessage extends TextMessage {
    public constructor() {
        super(
            ["Отлично! Осталось подтвердить, что это именно Ваша карта.",
            "Для этого введите сумму копеек, списанную с карты."]
        )
    }
}

export class ConfirmFormMessage {
    public readonly type = "card:confirm-form";
    public constructor(
        public readonly uuid: string,
    ) {
    }
}

export class ConfirmMessage {
    public readonly type = "card:confirm";
    public constructor(
        public readonly uuid: string,
        public readonly amount: number,
    ) {
    }
}

export class DeleteLoadMessage {
    public readonly type = "card:delete-load";
    public constructor(
        public readonly uuid: string,
    ) {
    }
}

export class SupportMessage {
    public readonly type = "card:support";
}

export type Message = LoadMessage | WelcomeMessage | IframeMessage | InfoMessage
    | ConfirmInfoMessage | ConfirmFormMessage | ConfirmMessage | DeleteLoadMessage | SupportMessage;
