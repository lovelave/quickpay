import * as React from "react";
import {ColorLogo} from "./color-logo";
import {Hamburger} from "./hamburger";
import classNames from "classnames";

export const Header: React.FC<{showLogo: boolean}> = React.memo(({showLogo}) => {
    const url = process.env.ORIGIN_URL;

    return (
        <header className={classNames("header", showLogo && "static")}>
            <div className="container">
                <a href={url} className={classNames("logo", showLogo && "show")}>
                    <ColorLogo />
                </a>
                <div className="header-controls">
                    <a href={url + "nav"} className="menu-hamburger">
                        <div className="overlay">
                            <span className="label">Меню</span>
                            <Hamburger />
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
});

Header.displayName = "Chat.Header";
