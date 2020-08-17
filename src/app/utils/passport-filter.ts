import { keyboardLayoutFormat } from "./keyboard-layout-format";

export const passportFilter = (value: string): string => {
    const series = keyboardLayoutFormat(value.substr(0, 2).toLowerCase()).toUpperCase();
    if (value.length <= 2) {
        return series;
    }
    const num = value.substr(2, 6).replace(/\D/g, '');
    return series + num;
};
