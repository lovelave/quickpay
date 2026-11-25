const moneyFormat = new Intl.NumberFormat("uk-UA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

// 4780.54 → "4 780,54 грн", with no-break spaces, so the amount never wraps.
export function formatMoney(value: number): string {
    return moneyFormat.format(value).replace(/\s/g, " ") + " грн";
}

// 380931234567 → "+38 (093) 123-45-67"
export function formatPhone(phone: string): string {
    const match = /^38(0\d{2})(\d{3})(\d{2})(\d{2})$/.exec(phone);
    if (!match) {
        return phone;
    }
    const [, operator, part1, part2, part3] = match;
    return `+38 (${operator}) ${part1}-${part2}-${part3}`;
}
