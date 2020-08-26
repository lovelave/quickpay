import { Message } from "./message";

export class PushAction {
    public readonly type = "message:push";

    constructor(public readonly messages: Array<Message>) {
    }
}

export class AmountAction {
    public readonly type = "amount";

    constructor(public readonly amount: number) {}
}

export class PhoneAction {
    public readonly type = "phone";

    constructor(public readonly phone: string) {}
}

export class PlatonAction {
    public readonly type = "platon";
}

export class RemoveAction {
    public readonly type = "message:remove";

    constructor(public readonly message: Message) {
    }
}

export class DeleteAction {
    public readonly type = "message:delete";
}

export class ReplaceAction {
    public readonly type = "message:replace";

    constructor(
        public readonly messages: Array<Message>,
        public readonly target?: Message | number,
    ) {
    }
}

export class ValidationErrorAction {
    public readonly type = "validation:error";

    constructor(
        public readonly attribute: string,
        public readonly details: string,
    ) {
    }
}

export class FlushAction {
    public readonly type = "message:flush";

    constructor(public readonly messages: Array<Message>) {
    }
}

export type Action = PushAction
    | ValidationErrorAction
    | RemoveAction
    | DeleteAction
    | ReplaceAction
    | FlushAction
    | AmountAction
    | PhoneAction
    | PlatonAction
    | Array<Action>;
