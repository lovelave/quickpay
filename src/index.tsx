import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { initSentry } from "./sentry";

const rootOptions = initSentry();

createRoot(document.querySelector("bobra-quickpay")!, rootOptions).render(
    <App />
);
