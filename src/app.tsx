import * as React from "react";
import {Provider} from "./app/chat/provider";
import {useTheme} from "./app/hooks/use-theme";

import "normalize.css/normalize.css";
import "resets.css/resets.min.css";
import "./index.scss";

export const App: React.FC<{}> = () => {
    useTheme("chat");

    React.useEffect(() => {
        if (!window.location.origin.includes("test")) {
            return;
        }

        const meta = document.createElement("meta");
        meta.setAttribute("name", "robots");
        meta.setAttribute("content", "noindex");
        document.head.appendChild(meta);
    }, []);

    return <Provider />;
};

App.displayName = "Chat.Layout";
