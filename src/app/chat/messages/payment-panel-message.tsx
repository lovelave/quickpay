import * as React from "react";
import classNames from "classnames";
import * as Chat from "../chat-logic";
import * as Base from "../base";
import { usePayment } from "../use-payment";
import { getOverdue } from "../../utils/overdue";
import { plural } from "../../utils/plural";
import { formatMoney, formatPhone } from "../../utils/format";
import { getPaymentDetailsUrl } from "../../utils/payment-details-url";
import { getSigninUrl } from "../../utils/signin-url";
import { PayPartForm } from "./pay-part-form";
import dayjs from "dayjs";

import dashedLine from "url:../svg/dashed-line.svg";

interface DueStatus {
    bubble: string;
    dateLabel: string;
    termLabel: string;
    termValue: string;
    accent?: "danger" | "warning";
}

function getDueStatus(returnDate: string): DueStatus {
    const overdue = getOverdue(returnDate);
    if (overdue > 0) {
        return {
            bubble: "Кредит прострочено!",
            dateLabel: "Строк до",
            termLabel: "Прострочення",
            termValue: plural(overdue, "days"),
            accent: "danger",
        };
    }
    if (overdue === 0) {
        return {
            bubble: "Сьогодні останній день!",
            dateLabel: "Сплатити до",
            termLabel: "Залишилось",
            termValue: "Останній день",
            accent: "warning",
        };
    }
    return {
        bubble: "Ось дані кредиту:",
        dateLabel: "Сплатити до",
        termLabel: "Залишилось",
        termValue: plural(-overdue, "days"),
    };
}

export const PaymentPanelMessage: React.FC<{
    value: Chat.PaymentPanelMessage;
}> = ({ value: { user, payer, mode: initialMode } }) => {
    const dispatch = Chat.useDispatchContext();
    const { busy, pay, form } = usePayment(payer, user.debt);
    const [mode, setMode] = React.useState(initialMode);
    const [isProlongOpen, setProlongOpen] = React.useState(false);

    const partButtonRef = React.useRef<HTMLButtonElement>(null);
    const prolongButtonRef = React.useRef<HTMLButtonElement>(null);
    const prolongNoteRef = React.useRef<HTMLParagraphElement>(null);
    const focusAfterRender =
        React.useRef<React.RefObject<HTMLElement | null>>(null);
    React.useEffect(() => {
        focusAfterRender.current?.current?.focus();
        focusAfterRender.current = null;
    }, [mode, isProlongOpen]);

    const status = getDueStatus(user.returnDate);
    const debt = formatMoney(user.debt);
    const hasProlongation =
        typeof user.prolongation === "number" && user.prolongation > 0;

    const handleChangePhone = React.useCallback(() => {
        dispatch(new Chat.FlushAction(Chat.initialState.messages));
    }, [dispatch]);

    const openProlong = () => {
        focusAfterRender.current = prolongNoteRef;
        setProlongOpen(true);
    };
    const closeProlong = () => {
        focusAfterRender.current = prolongButtonRef;
        setProlongOpen(false);
    };
    const closePart = () => {
        focusAfterRender.current = partButtonRef;
        setMode("actions");
    };

    return (
        <div className="qp-panel">
            <Base.WrapMessage source="bot">
                <p>{status.bubble}</p>
                {"phone" in payer && (
                    <p className="qp-bubble-sub">
                        <span className="nowrap">
                            {formatPhone(payer.phone)}
                        </span>{" "}
                        <button
                            type="button"
                            className="btn-link"
                            onClick={handleChangePhone}
                            disabled={busy}
                        >
                            Змінити
                        </button>
                    </p>
                )}
            </Base.WrapMessage>

            <div className="message bot-message qp-card">
                <dl className="qp-card__rows">
                    <div className="qp-row">
                        <dt>{status.dateLabel}</dt>
                        <dd>{dayjs(user.returnDate).format("DD.MM.YYYY")}</dd>
                    </div>
                    <div className="qp-row">
                        <dt>{status.termLabel}</dt>
                        <dd
                            className={classNames(
                                status.accent && `qp-value_${status.accent}`
                            )}
                        >
                            {status.termValue}
                        </dd>
                    </div>
                    <div className="qp-row">
                        <dt>Клієнт</dt>
                        <dd title={user.name}>{user.name}</dd>
                    </div>
                </dl>
                <div className="qp-card__footer">
                    <img src={dashedLine} className="qp-card__line" alt="" />
                    <p className="qp-card__total-label">
                        Разом до повернення на сьогодні
                    </p>
                    <p className="qp-card__total-amount">{debt}</p>
                    {isProlongOpen ? (
                        <div
                            id="qp-prolong-note"
                            className="qp-prolong"
                            role="region"
                            aria-label="Продовження строку"
                        >
                            <p tabIndex={-1} ref={prolongNoteRef}>
                                Продовження строку —{" "}
                                <b>{formatMoney(user.prolongation ?? 0)}</b>.
                                Документи підписують в особистому кабінеті на
                                lovilave.com.ua.
                            </p>
                            <div className="qp-card__actions">
                                <a
                                    href={getSigninUrl(payer)}
                                    className="btn btn_blue qp-btn-xs"
                                >
                                    Увійти в кабінет
                                </a>
                                <button
                                    type="button"
                                    className="btn btn_white qp-btn-xs"
                                    onClick={closeProlong}
                                >
                                    Назад
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div
                            className={classNames(
                                "qp-card__actions",
                                !hasProlongation && "qp-card__actions_single"
                            )}
                        >
                            <a
                                href={getPaymentDetailsUrl()}
                                target="_blank"
                                rel="noopener nofollow"
                                className={classNames(
                                    "btn btn_white qp-btn-xs",
                                    busy && "is-disabled"
                                )}
                                aria-label="Реквізити для оплати в банку, PDF"
                                aria-disabled={busy || undefined}
                                tabIndex={busy ? -1 : undefined}
                            >
                                Оплата в банку
                            </a>
                            {hasProlongation && (
                                <button
                                    type="button"
                                    className="btn btn_white qp-btn-xs"
                                    onClick={openProlong}
                                    disabled={busy}
                                    ref={prolongButtonRef}
                                >
                                    Продовжити строк
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="qp-actions">
                {mode === "part" ? (
                    <PayPartForm
                        debt={user.debt}
                        busy={busy}
                        onSubmit={pay}
                        onBack={closePart}
                    />
                ) : (
                    <div className="qp-actions__buttons">
                        <button
                            type="button"
                            className={classNames(
                                "btn btn_blue qp-btn qp-btn_pay",
                                busy && "is-busy"
                            )}
                            onClick={() => pay(user.debt)}
                            // Not disabled while busy, so keyboard focus stays on it; usePayment ignores repeats.
                            aria-disabled={busy}
                            aria-busy={busy}
                            aria-label={
                                busy
                                    ? "Переходимо до оплати…"
                                    : `Сплатити повністю ${debt}`
                            }
                        >
                            {busy ? (
                                <span className="qp-btn__label">
                                    Переходимо до оплати…
                                </span>
                            ) : (
                                <>
                                    <span className="qp-btn__label">
                                        Сплатити повністю
                                    </span>
                                    <span className="qp-btn__sub">{debt}</span>
                                </>
                            )}
                        </button>
                        <button
                            type="button"
                            className="btn btn_white qp-btn qp-btn_part"
                            onClick={() => setMode("part")}
                            disabled={busy}
                            ref={partButtonRef}
                        >
                            <span>Сплатити частково</span>
                        </button>
                    </div>
                )}
                <span className="sr-only" role="status">
                    {busy ? "Переходимо до оплати…" : ""}
                </span>
                {form}
            </div>
        </div>
    );
};
