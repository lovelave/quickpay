import * as React from "react";

const keyboardLayoutMap: { [ k: string ]: string } = [
    [')', '!', '@', '#', '$', '%', '^', '&', '*', '(',],
    [')', '!', '"', '№', ';', '%', ':', '?', '*', '(',],
]
    .reduce(
        (map, layout) => Object.assign(
            map,
            Object.fromEntries(layout.map((symbol, number) => [symbol, number]),
            ),
        ),
        {}
    );

export const numericFilter = (value: string): string => {
    const result = value
        .trim()
        .replace(/\D/g, (char: string): string => (char in keyboardLayoutMap) ? keyboardLayoutMap[ char ] : '');
    if (result.length === 0) {
        return result;
    }
    return parseInt(value, 10).toString(10);
};
