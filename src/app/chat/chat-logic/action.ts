import { Message } from "./message";
import {InputData, StateType} from "./reducer";

// State user action
export class StateUserAction {
    public readonly type = "user-data";

    constructor(
        public readonly debt: number,
        public readonly returnDate: string,
        public readonly prolongation?: number,
    ) {}
}

// State input data action
export class StateInputDataAction {
    constructor(
        public readonly type: keyof InputData,
        public readonly value?: string,
    ) {}
}

// State type action
export class StateTypeAction {
    constructor(public readonly type: StateType) {}
}

// Custom message actions
export class PlatonAction {
    public readonly type = "platon";
}

export class LoadPaymentResultAction {
    public readonly type = "load-payment-result";
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
        public readonly target?: Message | number,
    ) {}
}

export class FlushAction {
    public readonly type = "message:flush";

    constructor(
        public readonly messages: Array<Message>,
        public readonly leaveState?: true,
    ) {}
}

export type Action = PushAction
    | StateUserAction
    | StateInputDataAction
    | StateTypeAction
    | RemoveAction
    | DeleteAction
    | ReplaceAction
    | FlushAction
    | PlatonAction
    | LoadPaymentResultAction
    | Array<Action>;
