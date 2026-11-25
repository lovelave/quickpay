import { Message } from "./message";
import { StateType } from "./reducer";
import { Payer } from "./payer";

// State user action
export class StateUserAction {
    public readonly type = "user-data";

    constructor(
        public readonly debt: number,
        public readonly returnDate: string,
        public readonly name: string,
        public readonly prolongation?: number
    ) {}
}

export class ClearUserDataAction {
    public readonly type = "clear-user-data";
}

// State payer action
export class StatePayerAction {
    public readonly type = "payer";

    constructor(public readonly payer: Payer) {}
}

// State type action
// The "pay-fail" screen is only opened on return from Platon, see getInitialState().
export class StateTypeAction {
    constructor(public readonly type: Exclude<StateType, "pay-fail">) {}
}

// Default state actions
export class PushAction {
    public readonly type = "message:push";

    constructor(public readonly messages: Array<Message>) {}
}

export class RemoveAction {
    public readonly type = "message:remove";

    constructor(public readonly message: Message) {}
}

export class DeleteAction {
    public readonly type = "message:delete";
}

export class ReplaceAction {
    public readonly type = "message:replace";

    constructor(
        public readonly messages: Array<Message>,
        public readonly target?: Message | number
    ) {}
}

export class FlushAction {
    public readonly type = "message:flush";

    constructor(
        public readonly messages: Array<Message>,
        public readonly leaveState?: true
    ) {}
}

export type Action =
    | PushAction
    | StateUserAction
    | ClearUserDataAction
    | StatePayerAction
    | StateTypeAction
    | RemoveAction
    | DeleteAction
    | ReplaceAction
    | FlushAction
    | Array<Action>;
