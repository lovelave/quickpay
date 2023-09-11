import * as React from "react";
import * as ErrorBot from "../bot/error";
import * as Chat from "../chat-logic";
import { getPaymentDetailsUrl } from "../../utils/payment-details-url";

export const ErrorStatus: React.FC<{}> = React.memo(() => {
    const dispatch = Chat.useDispatchContext();

    const url = getPaymentDetailsUrl();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const handleClick = React.useCallback(() => {
        dispatch(new Chat.FlushAction(Chat.initialState.messages));
    }, [dispatch]);

    return (
        <div className="status-wrap">
            <div className="status">
                <div className="animation-container">
                    <ErrorBot.Layout />
                </div>
                <h2>Щось пішло не так!</h2>
                <p>
                    <span>
                        Ви можете завантажити реквізити для оплати або
                        зателефонувати нам
                    </span>
                    <span>
                        <a href="tel:+380675613804" className="phone-link">
                            +38(067) 561-38-04
                        </a>
                        <a href="tel:+380504736480" className="phone-link">
                            +38(050) 473-64-80.
                        </a>
                    </span>
                </p>
                <div className="btn-container">
                    <button className="btn btn_white" onClick={handleClick}>
                        <span>Спробувати ще</span>
                    </button>
                    <a
                        href={url}
                        rel="noopener nofollow"
                        target="_blank"
                        className="btn btn_blue"
                    >
                        <span>Завантажити реквізити</span>
                    </a>
                </div>
            </div>
        </div>
    );
});
