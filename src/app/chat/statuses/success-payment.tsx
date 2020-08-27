import * as React from "react";
import * as Chat from "../chat-logic";
import dayjs from "dayjs";
import {getOverdue} from "../../utils/overdue";
import * as ErrorBot from "../bot/error";

interface SuccessPaymentProps {
    user: {
        debt: number
        returnDate: string
        prolongation?: number
    } | undefined
}

export const SuccessPaymentStatus: React.FC<SuccessPaymentProps> = ({user}) => {
    const dispatch = Chat.useDispatchContext();

    if (!user) { // Полностью оплачен
        return null;
    }

    const overdue = getOverdue(user.returnDate);

    const handleClick = () => {
        dispatch(new Chat.FlushAction([
            new Chat.CreditInfoMessage(user, overdue),
            new Chat.PaymentSumMessage(user.debt, "https://bobra-backend-test.s3.eu-central-1.amazonaws.com/documents/27/035b4ce9654614d8749b2eaf2f2c6904042cc0b7.pdf"),
        ], true));
    }

    return (
        <div className="status-wrap">
            <div className="status">
                <div className="animation-container">
                    <ErrorBot.Layout />
                </div>
                <h2>Платёж успешно совершен</h2>
                <p>
                    <span>Вы не полностью оплатили кредит.</span>
                    <span>Осталось заплатить {user.debt} грн до {dayjs(user.returnDate).format("DD.MM.YYYY")}</span>
                    <span>Хотите оплатить сейчас?</span>
                </p>
                <div className="btn-container">
                    <a href="https://lovilave.com.ua/" className="btn btn_white">
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
