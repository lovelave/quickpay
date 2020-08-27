import * as React from "react";
import * as StateMessage from "./state";
import * as TurnedBot from "./bot/turned";
import * as Chat from "./chat-logic";
import {Section} from "./section";
import {ErrorStatus} from "./statuses/error";
import {SuccessPaymentStatus} from "./statuses/success-payment";

export const Provider: React.FC<{}> = () => {
    const [state, dispatch] = Chat.useReducer();

    return <Chat.DispatchContext.Provider value={dispatch}>
        {getProviderLayout(state)}
    </Chat.DispatchContext.Provider>
};

function getProviderLayout(state: Chat.State) {
    switch (state.type) {
        case "error":
            return <>
                <main className="main">
                    <ErrorStatus />
                </main>
            </>;
        case "pay-success":
            return <>
                <main className="main">
                    <SuccessPaymentStatus user={state.user} />
                </main>
            </>;
        default:
            return <>
                <div className="bot__overlay">
                    <TurnedBot.Layout/>
                </div>
                <main className="main">
                    <Section>
                        <div className="chat-stream">
                            <div className="chat-list">
                                {state.messages.map((value, key) => (
                                    <StateMessage.Message value={value} key={value.type! + key} i={key}/>
                                ))}
                            </div>
                        </div>
                    </Section>
                </main>
            </>;
    }
}

Provider.displayName = "Chat.Provider";
