// Ukrainian plural forms: 1 день, 2 дні, 5 днів (11–14 днів, 21 день).
const forms = {
    days: ["день", "дні", "днів"],
} as const;

export function plural(num: number, title: keyof typeof forms): string {
    const [one, few, many] = forms[title];
    const mod10 = num % 10;
    const mod100 = num % 100;

    let form: string = many;
    if (mod100 < 11 || mod100 > 14) {
        if (mod10 === 1) {
            form = one;
        } else if (mod10 >= 2 && mod10 <= 4) {
            form = few;
        }
    }

    return num + " " + form;
}
