import * as React from "react";
import * as Base from "../base";

export const HomeLinkMessage = () => {
    const url = process.env.ORIGIN_URL;

    return (
        <Base.ButtonMessage source={"user"}>
            <a href={url} className="btn btn_blue">
                На главную
            </a>
        </Base.ButtonMessage>
    )
}
