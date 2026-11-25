import * as React from "react";
import * as Chat from "../chat-logic";
import dayjs from "dayjs";
import * as HappyBot from "../bot/happy";
import * as FrontBot from "../bot/front";
import { getBaseUrl } from "../../utils/get-base-url";
import { formatMoney } from "../../utils/format";
import { UserData } from "../chat-logic";

export const SuccessPaymentStatus: React.FC<{
    user: UserData | undefined;
    payer: Chat.Payer | undefined;
}> = ({ user, payer }) => {
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
    } else if (isNaN(user.debt) || !payer) {
        // The payment is not posted yet, or the debt can't be loaded.
        return (
            <div className="status-wrap">
                <div className="status">
                    <div className="animation-container">
                        <FrontBot.Layout />
                    </div>
                    <h2>Оплата успішна</h2>
                    <p>
                        Зарахування може тривати кілька хвилин. Залишок можна
                        перевірити в особистому кабінеті.
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

    const handleClick = () => {
        dispatch(
            new Chat.FlushAction(
                [new Chat.PaymentPanelMessage(user, payer)],
                true
            )
        );
    };

    return (
        <div className="status-wrap">
            <div className="status">
                <div className="animation-container">
                    <FrontBot.Layout />
                </div>
                <h2>Оплата успішна</h2>
                <p>
                    <span>
                        Залишок до сплати: {formatMoney(user.debt)} до{" "}
                        {dayjs(user.returnDate).format("DD.MM.YYYY")}
                    </span>
                    <span>Бажаєте сплатити ще?</span>
                </p>
                <div className="btn-container">
                    <a href={url} className="btn btn_white">
                        <span>Пізніше</span>
                    </a>
                    <button className="btn btn_blue" onClick={handleClick}>
                        <span>Сплатити ще</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
