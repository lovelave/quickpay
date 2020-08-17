import * as React from "react";
import {Layout} from "./app/chat/layout";

import "normalize.css/normalize.css";
import "resets.css/resets.min.css";
import "./app/index.scss";

export const App = () => {
    React.useEffect(() => {document.body.dataset["theme"] = "chat"});

    return (
        <Layout />
    )
}
