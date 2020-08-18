import * as React from "react";
import { Message } from "../message";

export interface LabelMessageProps {
    id: string;
    children: Exclude<React.ReactNode, undefined>;
}

export const LabelMessage: React.FC<LabelMessageProps> = ({ id, children }) => {
    return (
        <Message source="bot">
                <label className="wrap" htmlFor={id}>
                    <div className="animated">
                        <p>{children}</p>
                    </div>
                </label>
        </Message>
    );
};
