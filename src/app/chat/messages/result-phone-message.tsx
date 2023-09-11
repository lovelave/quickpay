import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";

export const ResultPhoneMessage: React.FC<{
    value: Chat.ResultPhoneMessage;
}> = ({ value: { overdue } }) => {
    if (overdue === 0) {
        return (
            <Base.TextMessage
                value={{
                    author: "bot",
                    content: [
                        "Сьогодні останній день!",
                        "Терміново сплатіть кредит, щоб його не було передано колекторам!",
                    ],
                    time: null,
                }}
            />
        );
    } else if (overdue > 0) {
        return (
            <Base.TextMessage
                value={{
                    author: "bot",
                    content: [
                        "Ой цей кредит прострочений!",
                        "Терміново сплатіть його, щоб його не було передано колекторам!",
                    ],
                    time: null,
                }}
            />
        );
    } else {
        return (
            <Base.TextMessage
                value={{
                    author: "bot",
                    content: [
                        "За цим номером є активний кредит.",
                        "Будь ласка, введіть суму для погашення.",
                    ],
                    time: null,
                }}
            />
        );
    }
};
