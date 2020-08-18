import * as React from "react";
import * as Chat from "modules/chat";
import classNames from "classnames";
import { ClassValue } from "classnames/types";
import { Time } from "./time";

export interface MessageProps {
    isDebug?: boolean;
    className?: ClassValue;
    source: Chat.MessageSource;
    at?: string;
}

export const Message: React.FC<MessageProps> = (
    { source, className, at, isDebug, children }
) => {
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
            {at && <Time value={at}/>}
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
