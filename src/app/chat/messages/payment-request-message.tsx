import * as React from "react";
import * as Base from "../base";
import * as Chat from "../reducer";

export const PaymentRequestMessage: React.FC<{value: Chat.PaymentRequestMessage}> = ({value: {agreement}}) => {
    const dispatch = Chat.useDispatchContext();

    const cardHandler = () => {
        dispatch([
            new Chat.ReplaceAction([
                new Chat.TextMessage("Картой", "user"),
                new Chat.TextMessage("Введите любую активную карту с балансом не менее указанного."),
            ]),
            new Chat.PlatonAction(),
        ]);
    }

    const receiptHandler = () => {
        dispatch(new Chat.ReplaceAction([
            new Chat.TextMessage("Скачать квитанцию", "user"),
            new Chat.TextMessage("Готово! Буду ждать вашу оплату."),
            new Chat.HomeLinkMessage(),
        ]));
    }

    return (
        <Base.ButtonMessage source={"user"}>
            <a href={agreement} className="btn btn_white" target="_blank" onClick={receiptHandler}>
                Скачать квитанцию
            </a>
            <Base.Button theme={"secondary"} onClick={cardHandler}>
                Картой
            </Base.Button>
        </Base.ButtonMessage>
    )
}
