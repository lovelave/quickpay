import * as React from "react";
import * as ErrorBot from "../bot/error";
import * as Chat from "../chat-logic";
import {Dispatch} from "../chat-logic";
import {getPaymentDetailsUrl} from "../../utils/payment-details-url";

export const ErrorStatus: React.FC<{dispatch?: Dispatch}> = ({dispatch}) => {
    const rightDispatch = dispatch || Chat.useDispatchContext();

    const url = getPaymentDetailsUrl();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const handleClick = React.useCallback(() => {
        rightDispatch(new Chat.FlushAction(Chat.initialState.messages));
    }, [rightDispatch]);

    return (
        <div className="status-wrap">
            <div className="status">
                <div className="animation-container">
                    <ErrorBot.Layout />
                </div>
                <h2>Что-то пошло не так!</h2>
                <p>
                    <span>Вы можете скачать реквизиты для оплаты или позвонить нам</span>
                    <span>
                        <a href="tel:+380675613804" className="phone-link">+38(067) 561-38-04</a>
                        <a href="tel:+380504736480" className="phone-link">+38(050) 473-64-80.</a>
                    </span>
                </p>
                <div className="btn-container">
                    <button className="btn btn_white" onClick={handleClick}>
                        <span>Попробовать ещё</span>
                    </button>
                    <a href={url} target="_blank" className="btn btn_blue">
                        <span>Скачать реквизиты</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
