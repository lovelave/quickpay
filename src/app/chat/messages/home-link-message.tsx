import * as React from "react";
import * as Base from "../base";

export const HomeLinkMessage = () => {
    // TODO use home link from .env
    return (
        <Base.ButtonMessage source={"user"}>
            <a href="https://lovilave.com.ua/" className="btn btn_blue">
                На главную
            </a>
        </Base.ButtonMessage>
    )
}
