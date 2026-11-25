import * as React from "react";
import * as ErrorBot from "../bot/error";
import * as Chat from "../chat-logic";
import { usePayment } from "../use-payment";
import { formatMoney } from "../../utils/format";
import { getPaymentDetailsUrl } from "../../utils/payment-details-url";

// Same amount again, straight to Platon.
const RetryPaymentButton: React.FC<{
    payer: Chat.Payer;
    payment: Chat.StartedPayment;
    onBusy: (busy: boolean) => void;
}> = ({ payer, payment, onBusy }) => {
    const { busy, pay, form } = usePayment(payer, payment.debtBefore);
    React.useEffect(() => onBusy(busy), [busy, onBusy]);

    return (
        <>
            <button
                className="btn btn_blue"
                onClick={() => pay(payment.amount)}
                disabled={busy}
                aria-busy={busy}
            >
                <span>
                    {busy ? "Переходимо до оплати…" : "Спробувати ще раз"}
                </span>
            </button>
            {form}
        </>
    );
};

/**
 * Platon returned the borrower with a failed or cancelled payment.
 * The payment (amount) and the payer come from session storage and may be missing
 * (storage blocked or cleared): the retry then starts over from the debt or the phone.
 */
export const PaymentFailStatus: React.FC<{
    payer?: Chat.Payer;
    payment?: Chat.StartedPayment;
}> = ({ payer, payment }) => {
    const dispatch = Chat.useDispatchContext();
    const [busy, setBusy] = React.useState(false);

    const startOver = (mode?: Chat.PaymentPanelMode) => {
        dispatch(
            payer
                ? new Chat.FlushAction(
                      [new Chat.VerifyPayerMessage(payer, mode)],
                      true
                  )
                : new Chat.FlushAction(Chat.initialState.messages)
        );
    };

    return (
        <div className="status-wrap">
            <div className="status">
                <div className="animation-container">
                    <ErrorBot.Layout />
                </div>
                <h2>Оплату не завершено</h2>
                <p>
                    {payment && (
                        <span>Сума: {formatMoney(payment.amount)}.</span>
                    )}
                    <span>
                        Спробуйте ще раз або сплатіть через банк за реквізитами.
                    </span>
                </p>
                <div className="btn-container">
                    <a
                        href={getPaymentDetailsUrl()}
                        rel="noopener nofollow"
                        target="_blank"
                        className="btn btn_white"
                        aria-label="Реквізити для оплати в банку, PDF"
                    >
                        <span>Оплата в банку</span>
                    </a>
                    {payer && payment ? (
                        <RetryPaymentButton
                            payer={payer}
                            payment={payment}
                            onBusy={setBusy}
                        />
                    ) : (
                        <button
                            className="btn btn_blue"
                            onClick={() => startOver()}
                        >
                            <span>Спробувати ще раз</span>
                        </button>
                    )}
                </div>
                {payer && payment && (
                    <button
                        type="button"
                        className="btn-link"
                        onClick={() => startOver("part")}
                        disabled={busy}
                    >
                        Змінити суму
                    </button>
                )}
            </div>
        </div>
    );
};
