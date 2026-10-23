import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";
import { IframePaymentForm } from "./iframe-payment";

export const IframeMessage: React.FC<{ value: Chat.IframeMessage }> = ({
    value: { action, data },
}) => {
    return (
        <Base.ButtonMessage source="user" className="message-card">
            <IframePaymentForm data={data} action={action} target="_blank">
                <Base.Button theme={"secondary"} type={"submit"}>
                    Сплатити
                </Base.Button>
            </IframePaymentForm>
        </Base.ButtonMessage>
    );
};
