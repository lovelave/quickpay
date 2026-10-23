import * as Sentry from "@sentry/react";
import type { RootOptions } from "react-dom/client";
import type { UserData } from "./app/chat/chat-logic";

// Error tracking is enabled by setting SENTRY_DSN in the .env file of the build environment.
export function initSentry(): RootOptions {
    if (!process.env.SENTRY_DSN) {
        return {};
    }

    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
        release: process.env.SENTRY_RELEASE,
    });

    return {
        onUncaughtError: Sentry.reactErrorHandler((error, errorInfo) => {
            console.error(error, errorInfo.componentStack);
        }),
        onCaughtError: Sentry.reactErrorHandler(),
        onRecoverableError: Sentry.reactErrorHandler(),
    };
}

export function identifyUser(phone: string, user: UserData) {
    const { name, debt, returnDate, prolongation } = user;
    Sentry.setUser({ id: phone, username: name });
    Sentry.setContext("credit", { debt, returnDate, prolongation });
}
