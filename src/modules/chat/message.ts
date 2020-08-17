import * as SignUp from "./sign-up";
import * as Registration from "./registration";
import * as Calculator from "./calculator";
import * as Card from "./card";
import * as Agreement from "./agreement";
import * as Client from "../client";

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

export class TextMessageEditable<S extends Client.Api.DataAttributeRecord<any> = Client.Api.DataAttributeRecord<any>> {
    public readonly type = "editable";

    constructor(
        public readonly record: S,
        public readonly time: string = new Date().toISOString(),
        public readonly hasError?: boolean
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
    | Calculator.Message
    | SignUp.Message
    | Registration.Message
    | FailureMessage
    | DelayMessage
    | TimeoutMessage
    | Card.Message
    | Agreement.Message
    | RedirectMessage
    | TextMessageEditable;
