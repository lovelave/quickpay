import * as React from "react";
const IconSho = require("../svg/icon-sho.svg");
const IconBobra = require("../svg/icon-bobra.svg");
import {useIsMobile} from "../../hooks/use-is-mobile";

export const Author = () => {
    return (
        <div className="container">
            {useIsMobile()
                ? <p>ООО «ФК «КИФ», лицензия от 10.10.2019 г., бессрочная. Свидетельство регистрации ФК №1255. Годовая
                    процентная ставка 722,7%. Пример расчета стоимости кредита: при сумме 1000 грн на 30 дней к возврату
                    − 1594 грн.</p>
                : <p>Все права защищены! ООО «ФК «КИФ», лицензия выдана НАЦКОМФИНУСЛУГ от 10.10.2019, бессрочная.
                    Свидетельство регистрации ФК №1255. Лицензия видана на основании распоряжения НКРРФП №2014 от
                    10.10.2019. APR, без учета акций и скидок: 722,7%. Пример расчета стоимости кредита: сумма кредита
                    1000 грн, срок 30 дней, общая сумма к возврату — 1594 грн.</p>}
            <div className="author">
                <a href="https://wearesho.com/" className="icon icon_sho" target="_blank">
                    <img src={IconSho} alt="Sho company icon"/>
                </a>
                <span className="line"/>
                <a href="https://wearesho.com/bobra-cs" className="icon icon_bobra" target="_blank">
                    <img src={IconBobra} alt="Bobra icon"/>
                </a>
            </div>
        </div>
    )
}
