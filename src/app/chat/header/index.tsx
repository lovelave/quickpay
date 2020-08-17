import * as React from "react";
import IconHamburger from "../svg/icon-hamburger.svg";
import ColorLogo from "../svg/color-logo.svg";

import "./styles.scss";
import "./menu-button.scss";
import "./header-styles.scss";

export const Header: React.FC<{}> = React.memo(() => {
    //todo: add origin url from .env
    return (
        <header className="header">
            <div className="container">
                <a href="#" className="logo">
                    <img src={ColorLogo} alt="Logo"/>
                </a>
                <div className="header-controls">
                    <a href="#" className="menu-hamburger">
                        <div className="overlay">
                            <span className="label">Меню</span>
                            <img src={IconHamburger} className="hamburger" alt="Menu icon"/>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
});

Header.displayName = "Chat.Header";
