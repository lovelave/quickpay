export class FailureMessage {
    public readonly type = "info:failure";
}

export class TimeoutMessage {
    public readonly type = "timeout";
    public readonly time: string = new Date().toISOString();

    constructor(public readonly value: number, public readonly message: Message) {
    }
}

export class DelayMessage {
    public readonly type = "delay";

    constructor(public readonly children: Array<Message>, public readonly timeout: number = 500) {
    }
}

export type MessageSource = "bot" | "user";

export type Message = FailureMessage
    | DelayMessage
    | TimeoutMessage;
