import * as React from "react";
import { Action } from "./action";
import {IntroMessage, IntroRequestMessage, LoadIframeMessage, Message} from "./message";

export interface State {
    messages: Array<Message>
    amount?: number
    phone?: string
}

export type Reducer = React.Reducer<State, Action>;
export const Reducer: Reducer = (state, action): State => {
    if (Array.isArray(action)) {
        return action.reduce(Reducer, state);
    }
    console.log(state);
    switch (action.type) {
        case "message:push":
            if (action.messages.length === 0) {
                return state;
            }
            return {
                ...state,
                messages: [...state.messages, ...action.messages],
            };
        case "amount":
            return {
                ...state,
                amount: action.amount,
            };
        case "phone":
            return {
                ...state,
                phone: action.phone,
            }
        case "platon":
            if (!state.phone || !state.amount ) {
                return state;
            }
            return {
                ...state,
                messages: [...state.messages, new LoadIframeMessage(state.phone, state.amount)],
            }
        case "message:remove":
            return {
                ...state,
                messages: state.messages.filter((m) => m !== action.message),
            };
        case "message:delete":
            state.messages.pop();
            return {
                ...state
            };
        case "message:replace":
            const index = ("object" === typeof action.target)
                ? state.messages.findIndex((m) => m === action.target)
                : state.messages.length - (action.target ?? 1);
            if (index === -1) {
                return state;
            }
            return {
                ...state,
                messages: state.messages.slice(0, index)
                    .concat(...action.messages)
                    .concat(...state.messages.slice(index + 1)),
            };
        case "message:flush":
            return {
                ...state,
                messages: action.messages,
            };
    }
    return state;
};

export const initialState = {
    messages: [
        new IntroMessage(),
        new IntroRequestMessage(),
    ]
}

export function useReducer(): [State, Dispatch] {
    const [state, dispatch] = React.useReducer<Reducer>(Reducer, initialState);

    return [state, dispatch];
}

export type Dispatch = React.Dispatch<Action>;
export const DispatchContext = React.createContext<Dispatch>(() => undefined);
DispatchContext.displayName = "Chat.DispatchContext";

export function useDispatchContext(): Dispatch {
    return React.useContext(DispatchContext);
}
