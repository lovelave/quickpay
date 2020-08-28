import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { App } from "./app";

Sentry.init({
    dsn: "https://7b4c24607f9d490e858938870fd92348@o421925.ingest.sentry.io/5409164",
    integrations: [
        new Integrations.BrowserTracing(),
    ],
    tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.querySelector("bobra-quickpay"));
