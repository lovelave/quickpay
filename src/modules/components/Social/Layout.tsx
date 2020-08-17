import * as React from "react";
import { InstagramIcon } from "modules/components/Icons/InstagramIcon";
import { FacebookIcon } from "modules/components/Icons/FacebookIcon";

import "./styles.scss";

export const Layout = () => {
    return (
        <div className="social-list">
            <a
                href="https://www.facebook.com/LoviLave-106735147784134/?modal=admin_todo_tour"
                className="button button_facebook"
                target="_blank"
            >
                <FacebookIcon />
                <span />
            </a>
            <a
                href="https://www.instagram.com/lovilave.ukraine/?hl=ru"
                className="button button_instagram"
                target="_blank"
            >
                <InstagramIcon />
                <span />
            </a>
        </div>
    )
};

Layout.displayName = "Social.Layout";
