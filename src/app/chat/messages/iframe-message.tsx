import * as React from "react";
import * as Chat from "../reducer";
import * as Base from "../base";
import {IframePayment} from "./iframe-payment";

export const IframeMessage: React.FC<{value: Chat.IframeMessage}> = ({value: {action, data}}) => {
    const dispatch = Chat.useDispatchContext();

    const handleComplete = () => {
        // setTimeout(() => {
        //     dispatch(new Chat.ReplaceAction([
        //         new Chat.LoadIframeMessage(),
        //     ]));
        // }, 1500);
        console.log("заебись");
    };

    return (
        <Base.WrapMessage source="user" className="message-card">
            <IframePayment onComplete={handleComplete} data={data} action={action}>
                <div className="for-mobile">
                    <p>Для ввода перейдете на страницу платежного сервиса Platon. Ваши данные надежно защищены.</p>
                    <button type="submit" className="btn btn_blue">Перейти</button>
                </div>
            </IframePayment>
        </Base.WrapMessage>
    );
}
