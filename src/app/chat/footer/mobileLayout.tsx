import * as React from "react";
import IconSho from "../svg/icon-sho.svg";
import IconBobra from "../svg/icon-bobra.svg";

import "./styles.scss";

export const MobileLayout = () => {
    return (
        <footer className="footer mobile">
            <div className="footer-below">
                <div className="container">
                    <p>
                        ООО «ФК «КИФ», лицензия от 10.10.2019 г., бессрочная. Свидетельство регистрации ФК №1255. Годовая
                        процентная ставка 722,7%. Пример расчета стоимости кредита: при сумме 1000 грн на 30 дней к
                        возврату − 1594 грн.
                    </p>
                    <div className="author">
                        <a href="https://wearesho.com/" className="icon_sho" target="_blank">
                            <img src={IconSho} alt="Sho company icon"/>
                        </a>
                        <span className="line"/>
                        <a href="https://wearesho.com/bobra-cs" className="icon_bobra" target="_blank">
                            <img src={IconBobra} alt="Bobra icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

MobileLayout.displayName = "Footer.MobileLayout";
