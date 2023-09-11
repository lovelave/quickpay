import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";
import { IframePaymentForm } from "./iframe-payment";

export const IframeMessage: React.FC<{ value: Chat.IframeMessage }> = ({
    value: { action, data },
}) => {
    const dispatch = Chat.useDispatchContext();

    const handleComplete = React.useCallback(() => {
        dispatch(new Chat.LoadPaymentResultAction());
    }, [dispatch]);

    const handleError = React.useCallback(() => {
        dispatch(
            new Chat.ReplaceAction([
                new Chat.TextMessage("Помилка оплати", "user"),
                new Chat.TextMessage(
                    "Ви можете спробувати ще раз або завантажити реквізити для оплати"
                ),
                new Chat.PaymentErrorRequestMessage(),
            ])
        );
    }, [dispatch]);

    return (
        <Base.ButtonMessage source="user" className="message-card">
            <IframePaymentForm data={data} action={action} target="_blank">
                <Base.Button theme={"secondary"} type={"submit"}>
                    Сплатити
                </Base.Button>
            </IframePaymentForm>
        </Base.ButtonMessage>
    );
};
