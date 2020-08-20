export function plural(num: number, title: "years" | "days") {
    let value: string[];

    switch (title) {
        case "years":
            value = ["год", "года", "лет"];
            break;
        case "days":
            value = ["день", "дня", "дней"];
    }

    const cases = [2, 0, 1, 1, 1, 2];
    return num + " " + value[
        (num % 100 > 4 && num % 100 < 20)
            ? 2
            : cases[(num % 10 < 5) ? num % 10 : 5]
        ]
}
