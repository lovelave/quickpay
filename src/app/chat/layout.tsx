import * as React from "react";
import {Footer} from "./footer/layout";
import {Header} from "./header";
import {BotOverlay} from "./bot/overlay";
import {Section} from "./section";

import "./styles.scss";

export const Layout: React.FC<{}> = () => {
    return (
        <>
            {/*<Header />*/}
            {/*<BotOverlay/>*/}
            {/*<main className="main">*/}
            {/*    <Section>*/}
            {/*        <div className="chat-stream">*/}
            {/*            <div className="chat-list">*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Section>*/}
            {/*</main>*/}
            <Footer />
        </>
    );
};
Layout.displayName = "Chat.Layout";

export default Layout;
