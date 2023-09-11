import * as React from "react";
import * as Base from "../base";

export const IntroMessage: React.FC<{}> = React.memo(() => {
    return (
        <>
            <Base.WrapMessage source={"bot"}>
                <p>
                    Вітаю! Ви можете сплатити свій кредит або кредит друга за
                    номером телефону!
                </p>
            </Base.WrapMessage>
            <Base.WrapMessage source={"bot"} at={new Date().toISOString()}>
                <p>Вкажіть номер мобільного телефону</p>
            </Base.WrapMessage>
        </>
    );
});
