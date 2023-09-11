import * as React from "react";
import * as Base from "../base";
import { getBaseUrl } from "../../utils/get-base-url";
import * as Chat from "../chat-logic";

export const HomeLinkMessage = () => {
    const dispatch = Chat.useDispatchContext();
    const url = getBaseUrl().toString();

    const handleClick = React.useCallback(() => {
        dispatch([
            new Chat.ReplaceAction([
                new Chat.TextMessage("Сплатити карткою", "user"),
                new Chat.TextMessage(
                    "Введіть будь-яку активну картку з балансом не меншим за вказаний."
                ),
            ]),
            new Chat.PlatonAction(),
        ]);
    }, [dispatch]);

    return (
        <Base.ButtonMessage source={"user"}>
            <button className="btn btn_white" onClick={handleClick}>
                Сплатити карткою
            </button>
            <a href={url} className="btn btn_blue">
                На головну
            </a>
        </Base.ButtonMessage>
    );
};
