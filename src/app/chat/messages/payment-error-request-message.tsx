import * as React from "react";
import * as Base from "../base";
import * as Chat from "../chat-logic";
import {getPaymentDetailsUrl} from "../../utils/payment-details-url";

export const PaymentErrorRequestMessage = () => {
    const dispatch = Chat.useDispatchContext();

    const url = getPaymentDetailsUrl();

    const handleRecipe = React.useCallback(() => {
        dispatch(new Chat.ReplaceAction([
            new Chat.TextMessage("Скачать квитанцию", "user"),
            new Chat.TextMessage("Готово! Буду ждать вашу оплату."),
            new Chat.HomeLinkMessage(),
        ]));
    }, [dispatch]);

    const handleRetry = React.useCallback(() => {
        dispatch([
            new Chat.ReplaceAction([new Chat.TextMessage("Попробовать ещё", "user")]),
            new Chat.PlatonAction(),
        ]);
    }, [dispatch]);

    return (
        <Base.ButtonMessage source={"user"}>
            <a href={url} target="_blank" className="btn btn_white" onClick={handleRecipe}>
                Скачать реквизиты
            </a>
            <Base.Button theme={"secondary"} onClick={handleRetry}>
                Попробовать ещё
            </Base.Button>
        </Base.ButtonMessage>
    )
}
