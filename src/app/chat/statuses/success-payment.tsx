import * as React from "react";
import * as Chat from "../chat-logic";
import dayjs from "dayjs";
import { getOverdue } from "../../utils/overdue";
import * as HappyBot from "../bot/happy";
import * as FrontBot from "../bot/front";
import { getPaymentDetailsUrl } from "../../utils/payment-details-url";
import { getBaseUrl } from "../../utils/get-base-url";
import { UserData } from "../chat-logic";

export const SuccessPaymentStatus: React.FC<{ user: UserData | undefined }> = ({
    user,
}) => {
    const dispatch = Chat.useDispatchContext();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const url = getBaseUrl().toString();

    if (!user) {
        return (
            <div className="status-wrap">
                <div className="status">
                    <div className="animation-container">
                        <HappyBot.Layout />
                    </div>
                    <h2>Кредит повністю сплачено!</h2>
                    <p>
                        <span>
                            Довідку про погашення я відправив до особистого
                            кабінету.
                        </span>
                        <span>Підписуйтесь на наші соцмережі!</span>
                    </p>
                    <div className="btn-container">
                        <a href={url} className="btn btn_blue">
                            <span>На головну</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    } else if (isNaN(user.debt)) {
        return (
            <div className="status-wrap">
                <div className="status">
                    <div className="animation-container">
                        <FrontBot.Layout />
                    </div>
                    <h2>Оплата успішна</h2>
                    <p>
                        Перейдіть до особистого кабінету, щоб переглянути всю
                        інформацію про кредит.
                    </p>
                    <div className="btn-container">
                        <a href={url} className="btn btn_blue">
                            <span>На головну</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    const overdue = getOverdue(user.returnDate);

    const handleClick = React.useCallback(() => {
        dispatch(
            new Chat.FlushAction(
                [
                    new Chat.CreditInfoMessage(user, overdue),
                    new Chat.PaymentSumMessage(
                        user.debt,
                        getPaymentDetailsUrl()
                    ),
                ],
                true
            )
        );
    }, [user.debt, user.returnDate, user.prolongation, overdue, dispatch]);

    return (
        <div className="status-wrap">
            <div className="status">
                <div className="animation-container">
                    <FrontBot.Layout />
                </div>
                <h2>Оплата успішна</h2>
                <p>
                    <span>
                        Залишок боргу: {+user.debt.toFixed(2)} грн до{" "}
                        {dayjs(user.returnDate).format("DD.MM.YYYY")}
                    </span>
                    <span>Бажаєте сплатити зараз?</span>
                </p>
                <div className="btn-container">
                    <a href={url} className="btn btn_white">
                        <span>Пізніше</span>
                    </a>
                    <button className="btn btn_blue" onClick={handleClick}>
                        <span>Сплатити кредит</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
