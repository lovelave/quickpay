import * as React from "react";
import {IntroMessage, IntroRequestMessage, Message} from "./message";

export interface State {
    messages: Array<Message>;
}

export class State implements State {
    constructor(public messages: Array<Message>) {
        this.messages = [
            new IntroMessage,
            new IntroRequestMessage
        ]
    }
}
