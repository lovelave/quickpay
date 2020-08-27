import * as React from "react";
import {Footer} from "./footer/layout";
import {Header} from "./header/layout";
import {Provider} from "./provider";
import {useTheme} from "../hooks/use-theme";

export const Layout: React.FC<{}> = () => {
    useTheme("chat");
    return <>
        <Header />
        <Provider />
        <Footer />
    </>;
};
Layout.displayName = "Chat.Layout";

export default Layout;
