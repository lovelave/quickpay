import * as React from "react";
import classNames from "classnames";
import * as Base from "../base";
import { moneyInputFilter } from "../../utils/money-input-filter";
import { formatMoney } from "../../utils/format";

import IconAirplane from "url:../svg/icon-airplane.svg";

export interface PayPartFormProps {
    debt: number;
    busy: boolean;
    onSubmit: (amount: number) => void;
    onBack: () => void;
}

// Partial payment amount: anything above zero, up to the debt.
export const PayPartForm: React.FC<PayPartFormProps> = ({
    debt,
    busy,
    onSubmit,
    onBack,
}) => {
    const [value, setValue] = React.useState("");
    const [isClamped, setClamped] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Opened by a tap: focusing in the same task lets mobile browsers show the keyboard.
    React.useLayoutEffect(() => {
        inputRef.current?.focus();
        inputRef.current?.scrollIntoView({ block: "nearest" });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filtered = moneyInputFilter(e.target.value);
        const exceeds = parseFloat(filtered) > debt;
        setValue(exceeds ? (+debt.toFixed(2)).toString() : filtered);
        setClamped(exceeds);
    };

    const amount = parseFloat(value);
    const isValid = amount > 0;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid && !busy) {
            onSubmit(amount);
        }
    };

    let help = `Максимум ${formatMoney(debt)}`;
    if (busy) {
        help = "Переходимо до оплати…";
    } else if (isClamped) {
        help = `Більше за борг сплатити не можна — встановлено ${formatMoney(debt)}`;
    }

    return (
        <form className="qp-part" onSubmit={handleSubmit}>
            <Base.ControlMessage>
                <input
                    ref={inputRef}
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    enterKeyHint="go"
                    className="form__control"
                    value={value}
                    onChange={handleChange}
                    readOnly={busy}
                    placeholder="Сума, грн"
                    aria-label="Сума часткової оплати, грн"
                    aria-describedby="qp-part-help"
                />
                <div className="btn-container v-align">
                    <button
                        type="submit"
                        className={classNames(
                            "btn btn_action",
                            isValid && !busy ? "enabled" : "disabled"
                        )}
                        disabled={!isValid || busy}
                        aria-label="Перейти до оплати"
                    >
                        <img
                            src={IconAirplane}
                            alt=""
                            className="icon icon_airplane"
                        />
                    </button>
                </div>
            </Base.ControlMessage>
            <p
                id="qp-part-help"
                className={classNames(
                    "qp-part__help",
                    isClamped && !busy && "qp-value_warning"
                )}
                aria-live="polite"
            >
                {help}
            </p>
            <button
                type="button"
                className="btn-link qp-part__back"
                onClick={onBack}
                disabled={busy}
            >
                ‹ Назад
            </button>
        </form>
    );
};
