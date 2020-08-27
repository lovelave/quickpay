import * as React from "react";
import * as Base from "../base";
import * as Chat from "../chat-logic";

export const InvalidPhoneRequestMessage = () => {
    const dispatch = Chat.useDispatchContext();

    const handleClick = React.useCallback(() => {
        dispatch(new Chat.FlushAction(Chat.initialState.messages));
    }, [dispatch]);

    return (
        <Base.ButtonMessage source={"user"}>
            <a href="https://lovilave.com.ua/" className="btn btn_white">
                На главную
            </a>
            <Base.Button theme={"secondary"} onClick={handleClick}>
                Изменить номер
            </Base.Button>
        </Base.ButtonMessage>
    )
}
