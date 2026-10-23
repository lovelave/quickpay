import * as React from "react";
import * as Chat from "../chat-logic";
import classNames from "classnames";
import { Time } from "./time";

export interface MessageProps {
    isDebug?: boolean;
    className?: classNames.Argument;
    source: Chat.MessageSource;
    at?: string;
    children?: React.ReactNode;
}

export const Message: React.FC<MessageProps> = ({
    source,
    className,
    at,
    isDebug,
    children,
}) => {
    className = classNames(
        "message",
        getSourceClassName(source),
        className,
        at && "has-time",
        isDebug && "debug-message"
    );

    return (
        <div className={className}>
            {children}
            {at && <Time value={at} />}
        </div>
    );
};

const getSourceClassName = (source: Chat.MessageSource): string => {
    switch (source) {
        case "bot":
            return "bot-message";
        case "user":
            return "user-message";
    }
};
