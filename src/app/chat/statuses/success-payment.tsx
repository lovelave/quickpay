import * as React from "react";
import * as Chat from "../chat-logic";
import dayjs from "dayjs";
import {getOverdue} from "../../utils/overdue";
import * as HappyBot from "../bot/happy";
import * as FrontBot from "../bot/front";
import {getPaymentDetailsUrl} from "../../utils/payment-details-url";
import {getBaseUrl} from "../../utils/get-base-url";
import {UserData} from "../chat-logic";

export const SuccessPaymentStatus: React.FC<{ user: UserData | undefined }> = ({user}) => {
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
                    <h2>Кредит полностью оплачен!</h2>
                    <p>
                        <span>Справку о погашении я отправил в личный кабинет.</span>
                        <span>Подписывайтесь на наши соцсети!</span>
                    </p>
                    <div className="btn-container">
                        <a href={url} className="btn btn_blue">
                            <span>На главную</span>
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
                    <h2>Оплата успешна</h2>
                    <p>Перейдите в личный кабинет, чтобы посмотреть всю информацию о кредите.</p>
                    <div className="btn-container">
                        <a href={url} className="btn btn_blue">
                            <span>На главную</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    const overdue = getOverdue(user.returnDate);

    const handleClick = React.useCallback(() => {
        dispatch(new Chat.FlushAction([
            new Chat.CreditInfoMessage(user, overdue),
            new Chat.PaymentSumMessage(user.debt, getPaymentDetailsUrl()),
        ], true));
    }, [user.debt, user.returnDate, user.prolongation, overdue, dispatch]);

    return (
        <div className="status-wrap">
            <div className="status">
                <div className="animation-container">
                    <FrontBot.Layout />
                </div>
                <h2>Оплата успешна</h2>
                <p>
                    <span>Остаток долга: {user.debt} грн до {dayjs(user.returnDate).format("DD.MM.YYYY")}</span>
                    <span>Хотите оплатить сейчас?</span>
                </p>
                <div className="btn-container">
                    <a href={url} className="btn btn_white">
                        <span>Позже</span>
                    </a>
                    <button className="btn btn_blue" onClick={handleClick}>
                        <span>Оплатить кредит</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
