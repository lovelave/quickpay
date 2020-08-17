import upperFirst from "lodash/upperFirst";
import toLower from "lodash/toLower";
import { keyboardLayoutFormat } from "./keyboard-layout-format";

export const nameFilter = (value: string): string => {
    return value.split("-").map(toLower).map((v) => keyboardLayoutFormat(v)).map(upperFirst).join("-");
};
