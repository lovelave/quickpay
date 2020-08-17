import CyrillicToTranslit from "cyrillic-to-translit-js";

const RuToTranslit = new CyrillicToTranslit({preset: "uk"});
const UaToTranslit = new CyrillicToTranslit({preset: "ru"});

export const translit = (str: string): string => {
    return (str.match(/[а-яієїґ\']+/ig) ? UaToTranslit : RuToTranslit).transform(str).toLowerCase().replace(/ /g, "-");
}
