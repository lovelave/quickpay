import * as React from "react";
import { Action, FlushAction } from "./action";
import { State } from "./state";
import * as Client from "../client";
import * as Chat from "./index";
import { useEndpointEffect } from "./use-endpoint-effect";
import {useLocation} from "react-router";

export type Reducer = React.Reducer<State, Action>;
export const Reducer: Reducer = (state, action): State => {
    if (Array.isArray(action)) {
        return action.reduce(Reducer, state);
    }
    console.log(`CHAT DISPATCH`, action, state);
    switch (action.type) {
        case "message:push":
            if (action.messages.length === 0) {
                return state;
            }
            return {
                ...state,
                messages: [...state.messages, ...action.messages],
            };
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
        case "api:response":
            if (("object" !== typeof action.response.data) || !('__message' in action.response.data)) {
                return state;
            }
            const messages = [
                ...state.messages,
                ...action.response.data[ '__message' ].map((text: string) => new Chat.DebugMessage(text)),
            ];
            return {
                ...state,
                messages,
            };
    }
    return state;
};

export type ClientStatus = Client.Api.UserStatus | "login" | false | null | undefined;

export function useReducer(status: ClientStatus, api: Client.Api.Instance): [State, Dispatch] {
    const [state, dispatch] = React.useReducer<Reducer>(Reducer, new State([]));
    const location = useLocation();
    console.log(location.state);

    useEndpointEffect(api.endpoint, dispatch);

    React.useEffect(() => {
        dispatch(new FlushAction(State.getInitialMessages(status, location.state)));
    }, [status, dispatch, location.state,]);

    return [state, dispatch];
}

export type Dispatch = React.Dispatch<Action>;
export const DispatchContext = React.createContext<Dispatch>(() => undefined);
DispatchContext.displayName = "Chat.DispatchContext";

export function useDispatchContext(): Dispatch {
    return React.useContext(DispatchContext);
}
