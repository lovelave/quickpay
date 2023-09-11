import * as React from "react";
import * as Base from "../base";
import * as Chat from "../chat-logic";
import { getPaymentDetailsUrl } from "../../utils/payment-details-url";

export const PaymentErrorRequestMessage = () => {
    const dispatch = Chat.useDispatchContext();

    const url = getPaymentDetailsUrl();

    const handleRecipe = React.useCallback(() => {
        dispatch(
            new Chat.ReplaceAction([
                new Chat.TextMessage("Завантажити квитанцію", "user"),
                new Chat.TextMessage("Готово! Чекатиму на вашу оплату."),
                new Chat.HomeLinkMessage(),
            ])
        );
    }, [dispatch]);

    const handleRetry = React.useCallback(() => {
        dispatch([
            new Chat.ReplaceAction([
                new Chat.TextMessage("Спробувати ще", "user"),
            ]),
            new Chat.PlatonAction(),
        ]);
    }, [dispatch]);

    return (
        <Base.ButtonMessage source={"user"}>
            <a
                href={url}
                rel="noopener nofollow"
                target="_blank"
                className="btn btn_white"
                onClick={handleRecipe}
            >
                Завантажити реквізити
            </a>
            <Base.Button theme={"secondary"} onClick={handleRetry}>
                Спробувати ще
            </Base.Button>
        </Base.ButtonMessage>
    );
};
