import * as React from "react";
import * as Base from "../base";
import * as Chat from "../chat-logic";

export const PaymentRequestMessage: React.FC<{
    value: Chat.PaymentRequestMessage;
}> = ({ value: { agreement } }) => {
    const dispatch = Chat.useDispatchContext();

    const cardHandler = React.useCallback(() => {
        dispatch([
            new Chat.ReplaceAction([
                new Chat.TextMessage("Карткою", "user"),
                new Chat.TextMessage(
                    "Введіть будь-яку активну картку з балансом не меншим за вказаний."
                ),
            ]),
            new Chat.PlatonAction(),
        ]);
    }, [dispatch]);

    const receiptHandler = React.useCallback(() => {
        dispatch(
            new Chat.ReplaceAction([
                new Chat.TextMessage("Завантажити квитанцію", "user"),
                new Chat.TextMessage("Готово! Чекатиму на вашу оплату."),
                new Chat.HomeLinkMessage(),
            ])
        );
    }, [dispatch]);

    return (
        <Base.ButtonMessage source={"user"}>
            <a
                href={agreement}
                className="btn btn_white"
                target="_blank"
                onClick={receiptHandler}
            >
                Завантажити квитанцію
            </a>
            <Base.Button theme={"secondary"} onClick={cardHandler}>
                Карткою
            </Base.Button>
        </Base.ButtonMessage>
    );
};
