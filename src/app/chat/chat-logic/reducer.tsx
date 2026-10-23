import * as React from "react";
import { Action } from "./action";
import * as Messages from "./message";
import { Payer } from "./payer";

export type StateType = "error" | "pay-success";

export interface UserData {
    debt: number;
    returnDate: string;
    name: string;
    prolongation?: number;
}

export interface InputData {
    amount?: string;
}

export interface State {
    messages: Array<Messages.Message>;
    user?: UserData;
    payer?: Payer;
    inputData?: InputData;
    type?: StateType;
}

export type Reducer = React.Reducer<State, Action>;
export const Reducer: Reducer = (state, action): State => {
    if (Array.isArray(action)) {
        return action.reduce(Reducer, state);
    }

    switch (action.type) {
        // State type actions
        case "error":
            return {
                messages: [],
                type: "error",
            };
        case "pay-success":
            return {
                ...state,
                messages: [],
                type: "pay-success",
            };

        // State user actions
        case "user-data":
            return {
                ...state,
                user: {
                    name: action.name,
                    debt: action.debt,
                    returnDate: action.returnDate,
                    prolongation: action.prolongation,
                },
            };
        case "clear-user-data":
            return {
                ...state,
                user: undefined,
            };

        // State payer action
        case "payer":
            return {
                ...state,
                payer: action.payer,
            };

        // State input data action
        case "amount":
            return {
                ...state,
                inputData: {
                    ...state.inputData,
                    [action.type]: action.value,
                },
            };

        // Custom message actions
        case "platon":
            if (!state.inputData?.amount || !state.payer) {
                return state;
            }
            return {
                ...state,
                messages: [
                    ...state.messages,
                    new Messages.LoadIframeMessage(
                        state.payer,
                        state.inputData.amount
                    ),
                ],
            };
        case "load-payment-result":
            if (!state.payer) {
                return state;
            }
            return {
                ...state,
                messages: [
                    ...state.messages,
                    new Messages.LoadResultMessage(state.payer),
                ],
            };

        // Default message actions
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
                ...state,
            };
        case "message:replace": {
            const index =
                "object" === typeof action.target
                    ? state.messages.findIndex((m) => m === action.target)
                    : state.messages.length - (action.target ?? 1);
            if (index === -1) {
                return state;
            }
            return {
                ...state,
                messages: state.messages
                    .slice(0, index)
                    .concat(...action.messages)
                    .concat(...state.messages.slice(index + 1)),
            };
        }
        case "message:flush":
            if (action.leaveState) {
                return {
                    ...state,
                    type: undefined,
                    messages: action.messages,
                };
            }
            return {
                messages: action.messages,
            };
    }
    return state;
};

export const initialState = {
    messages: [new Messages.IntroMessage(), new Messages.IntroRequestMessage()],
};

export function useReducer(): [State, Dispatch] {
    return React.useReducer(Reducer, initialState);
}

export type Dispatch = React.Dispatch<Action>;
export const DispatchContext = React.createContext<Dispatch>(() => undefined);
DispatchContext.displayName = "Chat.DispatchContext";

export function useDispatchContext(): Dispatch {
    return React.useContext(DispatchContext);
}
