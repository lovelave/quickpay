import * as React from "react";

export function useTheme(value?: string) {
    React.useEffect(() => {
        if (typeof value === "string") {
            document.body.dataset[ "theme" ] = value;
        } else {
            document.body.removeAttribute("data-theme");
        }
    }, [value]);
}
