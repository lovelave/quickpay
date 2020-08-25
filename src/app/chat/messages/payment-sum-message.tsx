import * as React from "react";
import * as Base from "../base";
import * as Chat from "../reducer";
import classNames from "classnames";
import {ReplaceAction, useDispatchContext} from "../reducer";

const IconAirplane = require("../svg/icon-airplane.svg");

export const PaymentSumMessage: React.FC<{value: Chat.PaymentSumMessage}> = ({value: {sum, agreement}}) => {
    const [value, setValue] = React.useState<string>(sum.toString());

    const dispatch = useDispatchContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
         if (
             value.length === 0 ||
             (value.match(/^[1-9][,.\d]{0,7}$/)
                 && +value.replace(/,/, "."))
            ) {
            setValue(value.replace(/(.*[,.]\d{1,2})\d*$/, "$1"));
         }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (value.length < 1) {
            return;
        }

        localStorage.setItem("ll.pay", JSON.stringify(value.replace(/,/, ".")));

        dispatch(
            new ReplaceAction(
            [
                new Chat.TextMessage(value + " грн", "user"),
                new Chat.TextMessage([
                    "Как вам удобнее оплатить, онлайн картой или по квитанции в банке или терминале?",
                    "Учтите, платежи по квитанции могут идти до 3 рабочих дней!"
                ]),
                new Chat.PaymentRequestMessage(agreement),
            ]),
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <Base.Form.ControlMessage>
                <input
                    type="text"
                    className="form__control"
                    value={value}
                    onChange={handleChange}
                    autoFocus
                    placeholder="Введите сумму"
                />
                <div className="btn-container v-align">
                    <button
                        id="sign-phone-submit"
                        type="submit"
                        className={classNames("btn btn_action", value.length > 0 ? "enable" : "disabled")}
                    >
                        <img src={IconAirplane} alt="icon" className="icon icon_airplane"/>
                    </button>
                </div>
            </Base.Form.ControlMessage>
        </form>
    )
}
