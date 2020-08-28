import * as React from "react";
import * as Chat from "../chat-logic";
import { useInputState } from "@horat1us/react-hooks";
import { PhoneInput } from "@ua-opendata/react-phone-input";
import classNames from "classnames";
const IconAirplane = require("../svg/icon-airplane.svg");

export const IntroRequestMessage: React.FC<{}> = () => {
    const dispatch = Chat.useDispatchContext();
    const [value, handleChange] = useInputState();

    const rawValue = value.replace(/\D/g, '');

    const isSubmitEnable = rawValue.length === 12;

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isSubmitEnable) {
            return false;
        }

        dispatch([
            new Chat.StateInputDataAction("phone", rawValue),
            new Chat.ReplaceAction([
                new Chat.TextMessage(value, "user"),
                new Chat.VerifyPhoneMessage(rawValue),
            ]),
        ]);
    },[rawValue, value, dispatch]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="message user-message editing">
                <div className="form-group">
                    <PhoneInput
                        onChange={handleChange}
                        value={value}
                        id="sign-phone"
                        className="form__control"
                        type="tel"
                        placeholder="+38 (0"
                        autoFocus
                    />
                    <div className="btn-container v-align">
                        <button
                            id="sign-phone-submit"
                            type="submit"
                            className={classNames("btn btn_action", isSubmitEnable ? "enabled" : "disabled")}
                        >
                            <img src={IconAirplane} alt="icon" className="icon icon_airplane"/>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
};
