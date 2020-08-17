import toLower from "lodash/toLower";
import { keyboardLayoutFormat } from "app/utils/keyboard-layout-format";

export const emailFilter = (value: string): string => {
    return value
        .split("@", 2)
        .map(toLower)
        .map((p) => p
            .split(".")
            .map((sp) => keyboardLayoutFormat(sp, "en", /^\d+$/))
            .join(".")
        )
        .join("@");
};
