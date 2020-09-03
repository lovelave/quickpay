import * as React from "react";
import * as Base from "../base";
import {getBaseUrl} from "../../utils/get-base-url";

export const HomeLinkMessage = () => {
    const url = getBaseUrl().toString();

    return (
        <Base.ButtonMessage source={"user"}>
            <a href={url} className="btn btn_blue">
                На главную
            </a>
        </Base.ButtonMessage>
    )
}
