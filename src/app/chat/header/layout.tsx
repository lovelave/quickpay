import * as React from "react";
import { ColorLogo } from "./color-logo";
import { Hamburger } from "./hamburger";
import classNames from "classnames";
import { getBaseUrl } from "../../utils/get-base-url";

export const Header: React.FC<{ showLogo: boolean }> = React.memo(
    ({ showLogo }) => {
        const url = getBaseUrl().toString();
        return (
            <header className={classNames("header", showLogo && "static")}>
                <div className="container">
                    <a
                        href={url}
                        className={classNames("logo", showLogo && "show")}
                    >
                        <ColorLogo />
                    </a>
                    <div className="header-controls">
                        <a href={url + "signin"} className="btn btn_white">
                            <span className="emoji emoji_human" />
                            <span>Мій кабінет</span>
                        </a>
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
    }
);

Header.displayName = "Chat.Header";
