import * as React from "react";
import { MessageProps } from "./message";
import { WrapMessage } from "./wrap-message";

export interface FailureMessageProps extends Omit<MessageProps, "source"> {
    title: React.ReactNode;
    details: any;
}

export const FailureMessage: React.FC<FailureMessageProps> = ({ title, details, children, ...props }) => {
    const code = React.useMemo(() => {
        if ("string" === typeof details) {
            return details;
        }
        try {
            return JSON.stringify(details, undefined, 2);
        } catch (error) {
            return error.toString();
        }
    }, [details]);

    return (
        <WrapMessage source="bot" {...props}>
            <h4 className="m-b">
                {title}
            </h4>
            {children}
            <details>
                <code>{code}</code>
            </details>
        </WrapMessage>
    )
};
