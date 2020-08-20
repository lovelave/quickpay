export type InfoMessageType = "info:load" | "info:failure" | "info:service" | "info:return";

export class InfoMessage {
    constructor(public readonly type: InfoMessageType) {
        Object.freeze(this);
    }
}

export const LoadMessage = new InfoMessage("info:load");

export class TextMessage {
    public readonly type = "text";

    constructor(
        public readonly markdown: string | string[],
        public readonly author: MessageSource = "bot",
        public readonly isDebug?: boolean,
        public readonly time: string = new Date().toISOString()
    ) {
    }
}

export class DebugMessage extends TextMessage {
    public readonly isDebug = true;
}

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

export class RedirectMessage {
    public readonly type = "redirect";

    constructor(public readonly to: string) {
    }
}

export type MessageSource = "bot" | "user";

export type Message = InfoMessage
    | DebugMessage
    | TextMessage
    | FailureMessage
    | DelayMessage
    | TimeoutMessage
    | RedirectMessage;
