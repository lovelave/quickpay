import * as React from "react";
import { useIsMobile } from "../../hooks/use-is-mobile";
const IconVisa = require("../svg/icon-visa.svg");
const IconPrivat = require("../svg/icon-privat.svg");
const IconMastercard = require("../svg/icon-mastercard.svg");
const IconKyivstar = require("../svg/icon-kyivstar.svg");
const IconVodafone = require("../svg/icon-vodafone.svg");
import { Social } from "./social";
import { Author } from "./author";
import classNames from "classnames";
import { useOpenState } from "@horat1us/react-hooks";

export const Footer: React.FC<{ hide: boolean }> = React.memo(({ hide }) => {
    const [isActive, setActive] = useOpenState();

    const isMobile = useIsMobile();

    if (isMobile === undefined) {
        return null;
    }

    const year = new Date().getFullYear().toString();

    if (isMobile) {
        return (
            <footer className={classNames("footer mobile", hide && "hide")}>
                <div className="footer-below">
                    <Author />
                </div>
            </footer>
        );
    }

    return (
        <footer className="footer">
            <div className="footer-above">
                <div className="container">
                    <div className="panel-simple">
                        <div className="panel-main">
                            <span
                                className="copyright"
                                onDoubleClick={() => setActive()}
                            >
                                {isActive
                                    ? `Time: ${process.env.BUILD_TIME}. Build: ${process.env.TRAVIS_BUILD_NUMBER}.`
                                    : `© ${year} LoviLave`}
                            </span>
                            <p>
                                Перший сервіс онлайн-кредитів, у якому за
                                допомогою чат-бота автоматично видають до 10 000
                                гривень на картку українського банку.
                            </p>
                        </div>
                        <div className="panel-aside">
                            <div className="payment-systems">
                                <img
                                    src={IconVisa}
                                    className="icon icon_visa"
                                    alt="Visa"
                                />
                                <img
                                    src={IconMastercard}
                                    className="icon icon_mastercard"
                                    alt="Mastercard"
                                />
                                <img
                                    src={IconPrivat}
                                    className="icon icon_privat"
                                    alt="ПриватБанк"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="support">
                            <a
                                href="mailto:hello@lovilave.com.ua"
                                className="btn btn_blue"
                            >
                                Написати нам
                                <span className="emoji emoji_speaker" />
                            </a>
                            <span className="sub-title">
                                З 10:00 до 19:00, Пн - Пт
                            </span>
                            <div className="btn-container">
                                <a
                                    href="tel:+380675613804"
                                    className="phone-link"
                                >
                                    <img
                                        src={IconVodafone}
                                        className="icon icon_vodafone"
                                        alt="Visa"
                                    />
                                    <span>+380 67 561-38-04</span>
                                </a>
                                <a
                                    href="tel:+380504736480"
                                    className="phone-link"
                                >
                                    <img
                                        src={IconKyivstar}
                                        className="icon icon_kyivstar"
                                        alt="Kyivstar"
                                    />
                                    <span>+380 50 473-64-80</span>
                                </a>
                            </div>
                        </div>
                        <div className="wrap">
                            <span className="sub-title">
                                Тут знижки та подарунки
                            </span>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <Author />
            </div>
        </footer>
    );
});

Footer.displayName = "Footer.Layout";
