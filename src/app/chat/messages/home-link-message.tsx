import * as React from "react";
import * as Base from "../base";
import {getBaseUrl} from "../../utils/get-base-url";
import * as Chat from "../chat-logic";

export const HomeLinkMessage = () => {
    const dispatch = Chat.useDispatchContext();
    const url = getBaseUrl().toString();

    const handleClick = React.useCallback(() => {
        dispatch([
            new Chat.ReplaceAction([
                new Chat.TextMessage("Оплатить картой", "user"),
                new Chat.TextMessage("Введите любую активную карту с балансом не менее указанного."),
            ]),
            new Chat.PlatonAction(),
        ]);
    }, [dispatch]);

    return (
        <Base.ButtonMessage source={"user"}>
            <button className="btn btn_white" onClick={handleClick}>
                Оплатить картой
            </button>
            <a href={url} className="btn btn_blue">
                На главную
            </a>
        </Base.ButtonMessage>
    )
}
