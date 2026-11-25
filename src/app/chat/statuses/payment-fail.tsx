import * as React from "react";
import * as ErrorBot from "../bot/error";
import * as Chat from "../chat-logic";
import { usePayment } from "../use-payment";
import { formatMoney } from "../../utils/format";
import { getPaymentDetailsUrl } from "../../utils/payment-details-url";

// Platon returned the borrower with a failed or cancelled payment.
export const PaymentFailStatus: React.FC<{
    payer: Chat.Payer;
    payment: Chat.StartedPayment;
}> = ({ payer, payment }) => {
    const dispatch = Chat.useDispatchContext();
    const { busy, pay, form } = usePayment(payer, payment.debtBefore);

    const handleRetry = () => pay(payment.amount);
    const handleChangeAmount = () => {
        dispatch(
            new Chat.FlushAction(
                [new Chat.VerifyPayerMessage(payer, "part")],
                true
            )
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
                    <span>Сума: {formatMoney(payment.amount)}.</span>
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
                    <button
                        className="btn btn_blue"
                        onClick={handleRetry}
                        disabled={busy}
                        aria-busy={busy}
                    >
                        <span>
                            {busy
                                ? "Переходимо до оплати…"
                                : "Спробувати ще раз"}
                        </span>
                    </button>
                </div>
                <button
                    type="button"
                    className="btn-link"
                    onClick={handleChangeAmount}
                    disabled={busy}
                >
                    Змінити суму
                </button>
                {form}
            </div>
        </div>
    );
};
