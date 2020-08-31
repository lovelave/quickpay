import * as React from "react";
import * as StateMessage from "./state";
import * as Chat from "./chat-logic";
import {Layout as TurnedBot} from "./bot/turned";
import {Section} from "./section";
import {ErrorStatus} from "./statuses/error";
import {SuccessPaymentStatus} from "./statuses/success-payment";
import {Header} from "./header/layout";
import {Footer} from "./footer/layout";
import {ErrorBoundary} from "../../error-boundary";

export const Provider: React.FC<{}> = () => {
    const [state, dispatch] = Chat.useReducer();

    return <Chat.DispatchContext.Provider value={dispatch}>
        <ErrorBoundary>
            <Header showLogo={state.type} />
            {!state.type &&
            <div className="bot__overlay">
                <TurnedBot />
            </div>}
            <main className="main">
                {getProviderLayout(state)}
            </main>
            <Footer hide={state.type} />
        </ErrorBoundary>
    </Chat.DispatchContext.Provider>
};

function getProviderLayout(state: Chat.State) {
    switch (state.type) {
        case "error":
            return <ErrorStatus />;
        case "pay-success":
            return <SuccessPaymentStatus user={state.user} />;
        default:
            return <Section>
                <div className="chat-stream">
                    <div className="chat-list">
                        {state.messages.map((value, key) => (
                            <StateMessage.Message value={value} key={value.type + key} i={key}/>
                        ))}
                    </div>
                </div>
            </Section>;
    }
}

Provider.displayName = "Chat.Provider";
