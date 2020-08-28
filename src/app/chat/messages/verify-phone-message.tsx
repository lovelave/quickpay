import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";
import {UserData} from "../chat-logic";
import {getOverdue} from "../../utils/overdue";
import {getPaymentDetailsUrl} from "../../utils/payment-details-url";

export const VerifyPhoneMessage: React.FC<{ value: Chat.VerifyPhoneMessage }> = ({value}) => {
    const dispatch = Chat.useDispatchContext();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        const requestUrl = new URL("https://test.l-l.cloud/v3/quick-pay");
        requestUrl.searchParams.append("id", value.phone);

        fetch(requestUrl.toString(), {signal: controller.signal})
            .then(response => {
                controller = undefined;

                switch (response.status) {
                    case 404:
                        dispatch([
                            new Chat.RemoveAction(value),
                            new Chat.PushAction([
                                new Chat.TextMessage("Хмм.. На этом номере нет активного кредита."),
                                new Chat.InvalidPhoneRequestMessage(),
                            ])
                        ]);
                        return Promise.reject(undefined);
                    case 200:
                        return response.json();
                    default:
                        dispatch(new Chat.StateTypeAction("error"));
                        return Promise.reject(undefined);
                }
            })
            .then((user: UserData) => {
                const overdue = getOverdue(user.returnDate);

                dispatch([
                    new Chat.RemoveAction(value),
                    new Chat.PushAction([
                        new Chat.ResultPhoneMessage(overdue),
                        new Chat.CreditInfoMessage(user, overdue),
                        new Chat.PaymentSumMessage(user.debt, getPaymentDetailsUrl()),
                    ])
                ]);
            });

        return () => controller && controller.abort();
    }, [value.phone, value.type, dispatch]);

    return <Base.LoadMessage/>;
};