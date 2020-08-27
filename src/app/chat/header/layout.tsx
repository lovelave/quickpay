import * as React from "react";
import {ColorLogo} from "./color-logo";
import {Hamburger} from "./hamburger";

export const Header: React.FC<{}> = () => {
    // TODO: add origin url from .env
    return (
        <header className="header">
            <div className="container">
                <a href="https://lovilave.com.ua/" className="logo">
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
