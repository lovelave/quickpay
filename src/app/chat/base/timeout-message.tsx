import * as React from "react";
import { MessageProps } from "./message";
import { WrapMessage } from "./wrap-message";

export interface TimeoutMessageProps extends Exclude<MessageProps, "source"> {
    value: number;
}

const Counter: React.FC<{value: number}> = ({value}) => {
    return <span className="counter" aria-valuenow={value}>{value}</span>;
};

export const TimeoutMessage: React.FC<TimeoutMessageProps> = ({value, children, ...props}) => {
    return (
        <WrapMessage {...props} source="bot" className={"timeout"}>
            {Counter({value})}
        </WrapMessage>
    )
};
