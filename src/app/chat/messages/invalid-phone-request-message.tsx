import * as React from "react";
import * as Base from "../base";
import * as Chat from "../chat-logic";
import { getBaseUrl } from "../../utils/get-base-url";

export const InvalidPhoneRequestMessage = () => {
    const dispatch = Chat.useDispatchContext();

    const url = getBaseUrl().toString();

    const handleClick = React.useCallback(() => {
        dispatch(new Chat.FlushAction(Chat.initialState.messages));
    }, [dispatch]);

    return (
        <Base.ButtonMessage source={"user"}>
            <a href={url} className="btn btn_white">
                На головну
            </a>
            <Base.Button theme={"secondary"} onClick={handleClick}>
                Змінити номер
            </Base.Button>
        </Base.ButtonMessage>
    );
};
