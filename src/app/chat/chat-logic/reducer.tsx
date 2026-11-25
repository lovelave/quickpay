import * as React from "react";
import { Action } from "./action";
import * as Messages from "./message";
import { getLinkPayer, Payer } from "./payer";
import { StartedPayment, takePaymentReturn } from "./payment-return";

export type StateType = "error" | "pay-success" | "pay-fail";

export interface UserData {
    debt: number;
    returnDate: string;
    name: string;
    prolongation?: number;
}

// Result screen after a payment whose posting can't be confirmed yet.
export const unknownUser: UserData = { debt: NaN, returnDate: "", name: "" };

export interface State {
    messages: Array<Messages.Message>;
    user?: UserData;
    payer?: Payer;
    // Failed payment, offered again on the "pay-fail" screen.
    payment?: StartedPayment;
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
            // The payer is kept, so "try again" reloads the debt without asking for the phone.
            return {
                messages: [],
                payer: state.payer,
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

// Phone flow: greeting and phone input.
export const initialState: State = {
    messages: [new Messages.IntroMessage(), new Messages.IntroRequestMessage()],
};

// Opened by a personal payment link, the debt is loaded by the link code
// without asking for the phone. Back from Platon, the payment result is shown.
export function getInitialState(): State {
    const paymentReturn = takePaymentReturn();
    if (paymentReturn) {
        const { result, payer, payment } = paymentReturn;
        if (result === "success") {
            return payer
                ? {
                      messages: [
                          new Messages.LoadResultMessage(
                              payer,
                              payment?.debtBefore
                          ),
                      ],
                  }
                : { messages: [], user: unknownUser, type: "pay-success" };
        }
        if (payer && payment) {
            return { messages: [], payer, payment, type: "pay-fail" };
        }
    }

    const payer = getLinkPayer(window.location.pathname);
    if (!payer) {
        return initialState;
    }
    return {
        messages: [new Messages.VerifyPayerMessage(payer)],
    };
}

export function useReducer(): [State, Dispatch] {
    return React.useReducer(Reducer, undefined, getInitialState);
}

export type Dispatch = React.Dispatch<Action>;
export const DispatchContext = React.createContext<Dispatch>(() => undefined);
DispatchContext.displayName = "Chat.DispatchContext";

export function useDispatchContext(): Dispatch {
    return React.useContext(DispatchContext);
}
