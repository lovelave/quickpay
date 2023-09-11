import * as React from "react";
import * as Base from "../base";

export const FailureMessage: React.FC<
    Pick<Base.FailureMessageProps, "details">
> = ({ details }) => {
    return (
        <Base.FailureMessage
            title={
                <>
                    <span className="emoji emoji_fire" />
                    Упс. Помилка обробки повідомлення.
                </>
            }
            details={details}
        >
            <p>Ми вже в курсі і намагатимемося все виправити.</p>
        </Base.FailureMessage>
    );
};
