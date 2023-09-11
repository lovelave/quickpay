import * as React from "react";
const IconSho = require("../svg/icon-sho.svg");
const IconBobra = require("../svg/icon-bobra.svg");

export const Author = () => {
    return (
        <div className="container">
            <p>
                Всі права захищено! ТОВ "ФК "КІФ", ліцензія видана
                НАЦКОМФІНПОСЛУГ від 10.10.2019, безстрокова. Свідоцтво
                реєстрації ФК №1255. Ліцензія видана на підставі розпорядження
                НКРРФП №2014 від 10.10.2019. APR, без урахування акцій і знижок:
                72959,02%. Приклад розрахунку вартості кредиту: сума кредиту
                1000 грн, термін 30 днів, загальна сума до повернення – 1594
                грн.
            </p>
            <div className="author">
                <a
                    href="https://wearesho.com/"
                    className="icon icon_sho"
                    target="_blank"
                >
                    <img src={IconSho} alt="Sho company icon" />
                </a>
                <span className="line" />
                <a
                    href="https://wearesho.com/bobra-cs"
                    className="icon icon_bobra"
                    target="_blank"
                >
                    <img src={IconBobra} alt="Bobra icon" />
                </a>
            </div>
        </div>
    );
};
