import * as React from "react";

import { Message, MessageProps } from "./message";

export const WrapMessage: React.FC<MessageProps> = (
    { children, ...props }) => {
    return (
        <Message {...props}>
            <div className="wrap">
                <div className="animated">
                    {children}
                </div>
            </div>
        </Message>
    );
};
WrapMessage.displayName = "Base.WrapMessage";
