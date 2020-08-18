import * as React from "react";
import { Message, MessageProps } from "./message";

export const ButtonMessage: React.FC<MessageProps> = ({ children, ...props }) => {
    return (
        <Message {...props} className={["button-message", props.className]}>
            <div className="btn-container">
                {children}
            </div>
        </Message>
    )
};
ButtonMessage.displayName = "ButtonMessage";
