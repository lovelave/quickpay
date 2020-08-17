import * as React from "react";
import { useTheme } from "app/hooks/use-theme";

export const Layout: React.FC<{}> =({ children }) => {
    useTheme("internal");
    return (
        <main className="main">
            {children}
        </main>
    );
};
Layout.displayName = "main.Layout";
