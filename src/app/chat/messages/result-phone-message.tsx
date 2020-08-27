import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";

export const ResultPhoneMessage: React.FC<{value: Chat.ResultPhoneMessage}> = ({value: {overdue}}) => {
    if (overdue === 0) {
        return <Base.TextMessage
            value={{
                author: "bot",
                content: [
                    "Сегодня последний день!",
                    "Срочно оплатите кредит, чтобы он не был передан коллекторам!",
                ],
                time: null
            }}
        />;
    } else if (overdue > 0) {
        return <Base.TextMessage
            value={{
                author: "bot",
                content: [
                    "Ой, этот кредит просрочен!",
                    "Срочно оплатите его, чтобы он не был передан коллекторам!",
                ],
                time: null,
            }}
        />;
    } else {
        return <Base.TextMessage
            value={{
                author: "bot",
                content: [
                    "По этому номеру есть активный кредит",
                    "Пожалуйста, введите сумму для погашения."
                ],
                time: null,
            }}
        />;
    }
}
