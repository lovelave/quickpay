import * as React from "react";

import { Message } from "../message";

export const ControlMessage: React.FC<{}> = ({ children }) => {
    return (
        <Message source="user" className="editing">
            <div className="form-group">
                {children}
            </div>
        </Message>
    );
};
