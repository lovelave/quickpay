import * as React from "react";
import {ColorLogo} from "./color-logo";
import {Hamburger} from "./hamburger";
import classNames from "classnames";

export const Header: React.FC<{showLogo?: true}> = ({showLogo}) => {
    // TODO: add origin url from .env
    return (
        <header className="header">
            <div className="container">
                <a href="https://lovilave.com.ua/" className={classNames("logo", showLogo && "show")}>
                    <ColorLogo />
                </a>
                <div className="header-controls">
                    <a href="https://lovilave.com.ua/nav" className="menu-hamburger">
                        <div className="overlay">
                            <span className="label">Меню</span>
                            <Hamburger />
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
};

Header.displayName = "Chat.Header";
