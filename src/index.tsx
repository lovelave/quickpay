import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { App } from "./app";

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
        new Integrations.BrowserTracing(),
    ],
    tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.querySelector("bobra-quickpay"));
