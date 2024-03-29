import * as React from "react";
import * as Base from "../base";
import * as Chat from "../chat-logic";
import classNames from "classnames";
import { useIsMobile } from "../../hooks/use-is-mobile";
import { useInputState } from "@horat1us/react-hooks";
import { moneyInputFilter } from "../../utils/money-input-filter";

const IconAirplane = require("../svg/icon-airplane.svg");

export const PaymentSumMessage: React.FC<{ value: Chat.PaymentSumMessage }> = ({
    value: { sum, agreement },
}) => {
    const [value, handleChange] = useInputState(
        (+sum.toFixed(2)).toString(),
        moneyInputFilter
    );

    const dispatch = Chat.useDispatchContext();

    const handleSubmit = React.useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();

            if (!value.length) {
                return;
            }

            const filteredValue =
                +value > Math.ceil(sum) ? sum.toString() : value;

            dispatch([
                new Chat.StateInputDataAction("amount", filteredValue),
                new Chat.ReplaceAction([
                    new Chat.TextMessage(value + " грн", "user"),
                    new Chat.TextMessage([
                        "Як вам зручніше оплатити, онлайн карткою чи за квитанцією у банку чи терміналі?",
                        "Врахуйте, платежі за квитанцією можуть тривати до 3 робочих днів!",
                    ]),
                    new Chat.PaymentRequestMessage(agreement),
                ]),
            ]);
        },
        [value, agreement, sum, dispatch]
    );

    return (
        <form onSubmit={handleSubmit}>
            <Base.ControlMessage>
                <input
                    type="text"
                    className="form__control"
                    value={value}
                    onChange={handleChange}
                    autoFocus={!useIsMobile() ?? true}
                    placeholder="Введіть суму"
                />
                <div className="btn-container v-align">
                    <button
                        id="sign-phone-submit"
                        type="submit"
                        className={classNames(
                            "btn btn_action",
                            !value.length ? "disabled" : "enable"
                        )}
                    >
                        <img
                            src={IconAirplane}
                            alt="icon"
                            className="icon icon_airplane"
                        />
                    </button>
                </div>
            </Base.ControlMessage>
        </form>
    );
};
