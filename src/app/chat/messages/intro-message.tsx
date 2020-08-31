import * as React from "react";
import * as Base from "../base";

export const IntroMessage: React.FC<{}> = React.memo(() => {
    return <>
        <Base.WrapMessage source={"bot"}>
            <p>Приветствую! Вы можете оплатить свой кредит или кредит друга по номеру телефона!</p>
        </Base.WrapMessage>
        <Base.WrapMessage source={"bot"} at={new Date().toISOString()}>
            <p>Укажите номер мобильного телефона</p>
        </Base.WrapMessage>
    </>
});
