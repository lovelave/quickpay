import * as React from "react";
import * as Sentry from "@sentry/react";
import {ErrorStatus} from "./app/chat/statuses/error";
import {Dispatch} from "./app/chat/chat-logic";

export type ErrorBoundaryState = {} | {error: Error};

export class ErrorBoundary extends React.Component<{dispatch: Dispatch}, ErrorBoundaryState> {
    public readonly state: ErrorBoundaryState = {};

    static getDerivedStateFromError(error: Error) {
        return {error};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        if (process.env.SENTRY_DSN) {
            Sentry.captureException(error, {extra: errorInfo});
        }
    }
    public render() {
        if ("error" in this.state) {
            return <ErrorStatus dispatch={this.props.dispatch}/>;
        }

        return this.props.children;
    }
}
