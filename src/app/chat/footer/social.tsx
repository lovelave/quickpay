import * as React from "react";
import {IconFacebook} from "./icon-facebook";
import {IconInstagram} from "./icon-instagram";
import {IconTelegram} from "./icon-telegram";

export const Social = () => {
    return (
        <div className="social-list">
            <a
                href="https://www.facebook.com/LoviLave-106735147784134/?modal=admin_todo_tour"
                className="button button_facebook"
                target="_blank"
            >
                <IconFacebook />
                <span />
            </a>
            <a
                href="https://www.instagram.com/lovilave.ukraine/?hl=ru"
                className="button button_instagram"
                target="_blank"
            >
                <IconInstagram />
                <span />
            </a>
            <a
                href="https://t.me/lovilaveua"
                className="button button_telegram"
                target="_blank"
            >
                <IconTelegram/>
                <span/>
            </a>
        </div>
    )
};

Social.displayName = "Social.Layout";
