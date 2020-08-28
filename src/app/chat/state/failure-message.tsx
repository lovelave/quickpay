import * as React from "react";
import * as Base from "../base";

export const FailureMessage: React.FC<Pick<Base.FailureMessageProps, "details">> = ({ details }) => {
    return (
        <Base.FailureMessage
            title={<><span className="emoji emoji_fire"/> Упс. Ошибка обработки сообщения.</>}
            details={details}
        >
            <p>Мы уже в курсе и постараемся все исправить.</p>
        </Base.FailureMessage>
    );
};
