import { UserData } from "./reducer";
import { Payer } from "./payer";

export class FailureMessage {
    public readonly type = "info:failure";
}

export class TextMessage {
    public readonly type = "text";

    constructor(
        public content: string | string[],
        public readonly author: MessageSource = "bot",
        public readonly time: string | null = new Date().toISOString()
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

// What the payment panel opens with: the two main buttons or the partial amount input.
export type PaymentPanelMode = "actions" | "part";

export class VerifyPayerMessage {
    public readonly type = "verify";

    constructor(
        public readonly payer: Payer,
        public readonly mode: PaymentPanelMode = "actions"
    ) {}
}

// Loaded debt: status, credit card with bank/prolongation links and the pay in full/part buttons.
export class PaymentPanelMessage {
    public readonly type = "pay-panel";

    constructor(
        public readonly user: UserData,
        public readonly payer: Payer,
        public readonly mode: PaymentPanelMode = "actions"
    ) {}
}

export class LoadResultMessage {
    public readonly type = "load-result";

    constructor(
        public readonly payer: Payer,
        public readonly debtBefore?: number
    ) {}
}

export class InvalidPhoneRequestMessage {
    public readonly type = "invalid-phone";
}

export type MessageSource = "bot" | "user";

export type Message =
    | FailureMessage
    | TextMessage
    | DelayMessage
    | IntroMessage
    | VerifyPayerMessage
    | IntroRequestMessage
    | PaymentPanelMessage
    | LoadResultMessage
    | InvalidPhoneRequestMessage;
