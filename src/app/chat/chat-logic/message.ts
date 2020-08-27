import {UserData} from "./reducer";

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
        public content: string | string[],
        public readonly author: MessageSource = "bot",
        public readonly time: string | null = new Date().toISOString(),
    ) {}
}

export class DelayMessage {
    public readonly type = "delay";

    constructor(
        public readonly children: Array<Message>,
        public readonly timeout: number = 500
    ) {}
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

    constructor(
        public readonly user: UserData,
        public readonly overdue: number,
    ) {}
}

export class PaymentSumMessage {
    public readonly type = "pay-sum";

    constructor(
        public readonly sum: number,
        public readonly agreement: string
    ) {}
}

export class PaymentRequestMessage {
    public readonly type = "pay-request";

    constructor(public readonly agreement: string) {}
}

export class HomeLinkMessage {
    public readonly type = "home-link";
}

export class LoadIframeMessage {
    public readonly type = "load-iframe";

    constructor(
        public readonly phone: string,
        public readonly amount: string,
    ) {}
}

export class IframeMessage {
    public readonly type = "iframe";

    public constructor(
        public readonly action: string,
        public readonly data: Array<[ string, string ]>
    ) {}
}

export class ResultPhoneMessage {
    public readonly type = "result-phone";

    constructor(public readonly overdue: number) {}
}

export class InvalidPhoneRequestMessage {
    public readonly type = "invalid-phone";
}

export class LoadResultMessage {
    public readonly type = "load-result";

    constructor(public readonly phone: string) {}
}

// export class ResultPaymentMessage {
//     public readonly type = "payment-result";
//
//     constructor(
//         public readonly debt: number,
//         public readonly dateReturn: string,
//     ) {}
// }

export type MessageSource = "bot" | "user";

export type Message = FailureMessage
    | TextMessage
    | DelayMessage
    | IntroMessage
    | VerifyPhoneMessage
    | IntroRequestMessage
    | CreditInfoMessage
    | PaymentSumMessage
    | PaymentRequestMessage
    | HomeLinkMessage
    | LoadIframeMessage
    | IframeMessage
    | LoadResultMessage
    | ResultPhoneMessage
    | InvalidPhoneRequestMessage
    // | ResultPaymentMessage
