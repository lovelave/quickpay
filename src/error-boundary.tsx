import * as React from "react";
import {ErrorStatus} from "./app/chat/statuses/error";

export type ErrorBoundaryState = {} | {error: Error};

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    public readonly state: ErrorBoundaryState = {};

    static getDerivedStateFromError(error: Error) {
        return {error};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    }

    public render() {
        if ("error" in this.state) {
            return <ErrorStatus />;
        }

        return this.props.children;
    }
}
