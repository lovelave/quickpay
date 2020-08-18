import * as React from "react";
import { Redirect } from "react-router";

export const RedirectMessage: React.FC<{to: string,}> = ({to}) => {
    return <Redirect to={to} />;
};
