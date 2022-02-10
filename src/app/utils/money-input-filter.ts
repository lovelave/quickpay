export const moneyInputFilter = (inputData: string): string => {
    return inputData
        .replace(/^[0.,]?([1-9]\d{0,4}[,.]?\d{0,2})?.*/, "$1")
        .replace(",", ".");
}
