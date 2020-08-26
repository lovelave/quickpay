import * as React from "react";
import * as Chat from "../reducer";
import * as Base from "../base";
import {IframePayment} from "./iframe-payment";

export const IframeMessage: React.FC<{value: Chat.IframeMessage}> = ({value: {action, data}}) => {
    const dispatch = Chat.useDispatchContext();

    const handleComplete = React.useCallback(() => {
        dispatch(new Chat.ReplaceAction([new Chat.LoadResultMessage()]));
    }, [dispatch]);

    const handleError = React.useCallback(() => {
        dispatch(new Chat.ReplaceAction([new Chat.TextMessage("xyu")]));
    }, [dispatch]);

    return (
        <Base.WrapMessage source="user" className="message-card">
            <IframePayment onComplete={handleComplete} onError={handleError} data={data} action={action}>
                <div className="for-mobile">
                    <p>Для ввода перейдите на страницу платежного сервиса Platon. Ваши данные надежно защищены.</p>
                    <button type="submit" className="btn btn_blue">Перейти</button>
                </div>
            </IframePayment>
        </Base.WrapMessage>
    );
}
