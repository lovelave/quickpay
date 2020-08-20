import * as React from "react";
import {LoadMessage, Message} from "./message";

export interface State {
    messages: Array<Message>;
}

export class State implements State {
    constructor(public messages: Array<Message> = [LoadMessage]) {
    }
}
