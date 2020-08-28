import * as React from "react";
import {Provider} from "./app/chat/provider";
import {useTheme} from "./app/hooks/use-theme";

import "normalize.css/normalize.css";
import "resets.css/resets.min.css";
import "./index.scss";

export const App: React.FC<{}> = () => {
    useTheme("chat");

    return <Provider />;
};

App.displayName = "Chat.Layout";
