interface Format {
    layout: {[k: string]: string};
    regExp: RegExp;
}

type FormatType = "en" | "ru";

type FormatsMap = {
    [k in FormatType]: Format;
}

const formatsMap: FormatsMap = {
    ru: {
        layout: ({
            'q': 'й',
            'w': 'ц',
            'e': 'у',
            'r': 'к',
            't': 'е',
            'y': 'н',
            'u': 'г',
            'i': 'ш',
            'o': 'щ',
            'p': 'з',
            '[': 'х',
            ']': 'ъ',
            '{': 'х',
            '}': 'ъ',
            'a': 'ф',
            's': 'ы',
            'd': 'в',
            'f': 'а',
            'g': 'п',
            'h': 'р',
            'j': 'о',
            'k': 'л',
            'l': 'д',
            ';': 'ж',
            ':': 'ж',
            '\'': 'э',
            '"': 'э',
            'z': 'я',
            'x': 'ч',
            'c': 'с',
            'v': 'м',
            'b': 'и',
            'n': 'т',
            'm': 'ь',
            ',': 'б',
            '.': 'ю',
        }),
        regExp: /[^а-яєїыёъі']/ig,
    },
    en: {
        layout:{},
        regExp: /[^a-z']/ig,
    },
};

if (!window.navigator.language.startsWith('ru')) {
    Object.assign(formatsMap.ru.layout, {
        ']': 'ї',
        '}': 'ї',
        's': 'і',
        '\'': 'є',
        '"': 'є',
    });
}
formatsMap.en.layout = Object.fromEntries(Object.entries(formatsMap.ru.layout).map(([k,v]) => [v,k]));

export const keyboardLayoutFormat = (input: string, format: FormatType = 'ru', allowRegExp?: RegExp): string => {
    return input.replace(formatsMap[format].regExp, (c: string) => {
        if (c in formatsMap[format].layout) {
            return formatsMap[format].layout[c];
        }
        return (allowRegExp && allowRegExp.test(c)) ? c : "";
    });
};
