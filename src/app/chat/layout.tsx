import * as React from "react";
import {Footer} from "./footer/layout";
import {Header} from "./header/layout";
import {Section} from "./section";
import * as TurnedBot from "./bot/turned";
import {Provider} from "./provider";
import {useTheme} from "../hooks/use-theme";

export const Layout: React.FC<{}> = () => {
    useTheme("chat");
    return (
        <>
            <Header />
            <div className="bot__overlay">
                <TurnedBot.Layout/>
            </div>
            <main className="main">
                <Section>
                    <div className="chat-stream">
                        <div className="chat-list">
                            <Provider />
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
};
Layout.displayName = "Chat.Layout";

export default Layout;
