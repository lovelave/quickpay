// Amount in hryvnias as typed: up to 5 integer digits and 2 decimals, comma or dot.
// "0,75" → "0.75", "4780.549" → "4780.54"; anything that doesn't start with a number gives "".
export const moneyInputFilter = (inputData: string): string => {
    const match = /^(0|[1-9]\d{0,4})([.,]\d{0,2})?/.exec(inputData.trim());
    return match ? (match[1] + (match[2] ?? "")).replace(",", ".") : "";
};
