import * as React from "react";
import { MobileLayout } from "./mobileLayout";
import { useIsMobile } from "../../utils/use-is-mobile";
import IconSho from "../svg/icon-sho.svg";
import IconVisa from "../svg/icon-visa.svg";
import IconBobra from "../svg/icon-bobra.svg";
import IconPrivat from "../svg/icon-privat.svg";
import IconMastercard from "../svg/icon-mastercard.svg";
import IconFacebook from "../svg/icon-facebook.svg";
import IconInstagram from "../svg/icon-instagram.svg";
import IconKyivstar from "../svg/icon-kyivstar.svg";
import IconVodafone from "../svg/icon-vodafone.svg";

import "./styles.scss";
import "./social-styles.scss";

export const Footer = () => {
    const isMobile = useIsMobile();

    if (isMobile === undefined) {
        return null;
    }

    const year = new Date().getFullYear().toString();

    if (isMobile) {
        return <MobileLayout />;
    }

    return (
        <footer className="footer">
            <div className="footer-above">
                <div className="container">
                    <div className="panel-simple">
                        <div className="panel-main">
                            <span className="copyright">
                                © {year} LoviLave
                            </span>
                            <p>
                                Первый сервис онлайн-кредитов, в котором с помощью чат-бота автоматически
                                выдают до 10000 гривен на карту украинского банка.
                            </p>
                        </div>
                        <div className="panel-aside">
                            <div className="payment-systems">
                                <img src={IconVisa} className="icon icon_visa" alt="Visa"/>
                                <img src={IconMastercard} className="icon icon_mastercard" alt="Mastercard"/>
                                <img src={IconPrivat} className="icon icon_privat" alt="ПриватБанк"/>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="support">
                            <a href="mailto:hello@lovilave.com.ua" className="btn btn_blue">
                                Написать нам
                                <span className="emoji emoji_speaker" />
                            </a>
                            <span className="sub-title">С 10:00 до 19:00, Пн - Пт</span>
                            <div className="btn-container">
                                <a href="tel:+380675613804" className="phone-link">
                                    <img src={IconVodafone} className="icon icon_vodafone" alt="Visa"/>
                                    <span>+380 67 561-38-04</span>
                                </a>
                                <a href="tel:+380504736480" className="phone-link">
                                    <img src={IconKyivstar} className="icon icon_kyivstar" alt="Kyivstar"/>
                                    <span>+380 50 473-64-80</span>
                                </a>
                            </div>
                        </div>
                        <div className="wrap">
                            <span className="sub-title">Тут скидки и подарки</span>
                            <div className="social-list">
                                <a
                                    href="https://www.facebook.com/LoviLave-106735147784134/?modal=admin_todo_tour"
                                    className="button button_facebook"
                                    target="_blank"
                                >
                                    <img src={IconFacebook} alt="Facebook"/>
                                    <span />
                                </a>
                                <a
                                    href="https://www.instagram.com/lovilave.ukraine/?hl=ru"
                                    className="button button_instagram"
                                    target="_blank"
                                >
                                    <img src={IconInstagram} alt="Instagram"/>
                                    <span />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <p>
                        Все права защищены! ООО «ФК «КИФ», лицензия выдана НАЦКОМФИНУСЛУГ от 10.10.2019, бессрочная.
                        Свидетельство регистрации ФК №1255. Лицензия видана на основании распоряжения НКРРФП №2014 от 10.10.2019.
                        APR, без учета акций и скидок: 722,7%. Пример расчета стоимости кредита: сумма кредита 1000 грн,
                        срок 30 дней, общая сумма к возврату — 1594 грн.
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
    )
};

Footer.displayName = "Footer.Layout";
