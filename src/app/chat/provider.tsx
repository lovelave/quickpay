import * as React from "react";
import * as StateMessage from "./state";
import * as TurnedBot from "./bot/turned";
import * as Chat from "./chat-logic";
import {Section} from "./section";
import {ErrorStatus} from "./statuses/error";
import {SuccessPaymentStatus} from "./statuses/success-payment";
import {Header} from "./header/layout";
import {Footer} from "./footer/layout";
import {ErrorBoundary} from "../../error-boundary";

export const Provider: React.FC<{}> = () => {
    const [state, dispatch] = Chat.useReducer();

    return <ErrorBoundary dispatch={dispatch}>
        <Chat.DispatchContext.Provider value={dispatch}>
            {getProviderLayout(state)}
        </Chat.DispatchContext.Provider>
    </ErrorBoundary>
};

function getProviderLayout(state: Chat.State) {
    switch (state.type) {
        case "error":
            return <>
                <Header showLogo/>
                <ErrorStatus />
                <Footer hide/>
            </>;
        case "pay-success":
            return <>
                <Header showLogo/>
                <SuccessPaymentStatus user={state.user} />
                <Footer hide/>
            </>;
        default:
            return <>
                <Header />
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
                <Footer />
            </>;
    }
}

Provider.displayName = "Chat.Provider";
