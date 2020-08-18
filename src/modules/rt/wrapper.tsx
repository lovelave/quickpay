import * as React from "react";
import { Provider } from "./provider";

export const Wrapper: React.FC<{}> = ({ children }) => {
    if (process.env.RT_URL === undefined) {
        return children as React.ReactElement;
    }
    return <Provider url={process.env.RT_URL}>{children}</Provider>;
}
Wrapper.displayName = "Rt.Wrapper";
