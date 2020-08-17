import * as React from "react";

export function useTheme(value?: string | undefined) {
    React.useEffect(() => {
        if (typeof value === "string") {
            document.body.dataset[ "theme" ] = value;
        } else {
            document.body.removeAttribute("data-theme");
        }
    }, [value]);
}
