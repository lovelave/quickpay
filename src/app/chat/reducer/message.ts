import {Request} from "../state/debt-interface";

export class FailureMessage {
    public readonly type = "info:failure";
}

export type InfoMessageType = "info:load" | "info:failure" | "info:service" | "info:return";

export class InfoMessage {
    constructor(public readonly type: InfoMessageType) {
        Object.freeze(this);
    }
}

export const LoadMessage = new InfoMessage("info:load");

export class TextMessage {
    public readonly type? = "text";

    constructor(
        public readonly content: string | string[],
        public readonly author: MessageSource = "bot",
        public readonly time: string = new Date().toISOString()
    ) {
    }
}

export class IntroMessage {
    public readonly type = "intro";
}

export class IntroRequestMessage {
    public readonly type = "intro-request";
}

export class VerifyPhoneMessage {
    public readonly type = "verify";

    constructor(public readonly phone: string) {
        this.phone = this.phone.replace(/\D/g, '');
    }
}

export class CreditInfoMessage {
    public readonly type = "debt-info";

    constructor(public readonly debt: Request) {
    }
}

export class DelayMessage {
    public readonly type = "delay";

    constructor(public readonly children: Array<Message>, public readonly timeout: number = 500) {
    }
}

export type MessageSource = "bot" | "user";

export type Message = FailureMessage
    | TextMessage
    | DelayMessage
    | IntroMessage
    | VerifyPhoneMessage
    | IntroRequestMessage
