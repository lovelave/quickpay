import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";
import { UserData } from "../chat-logic";
import { getBaseUrl } from "../../utils/get-base-url";
import { identifyUser } from "../../../sentry";

export const VerifyPayerMessage: React.FC<{
    value: Chat.VerifyPayerMessage;
}> = ({ value }) => {
    const dispatch = Chat.useDispatchContext();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        const requestUrl = getBaseUrl();
        requestUrl.pathname = "v3/quick-pay";
        Chat.appendPayerParam(requestUrl, value.payer, "id");

        fetch(requestUrl.toString(), { signal: controller.signal })
            .then((response) => {
                controller = undefined;

                switch (response.status) {
                    case 404:
                        dispatch([
                            new Chat.RemoveAction(value),
                            new Chat.PushAction(
                                "code" in value.payer
                                    ? [
                                          new Chat.TextMessage([
                                              "Посилання застаріло або кредит уже погашено.",
                                              "Щоб сплатити кредит, вкажіть номер мобільного телефону.",
                                          ]),
                                          new Chat.IntroRequestMessage(),
                                      ]
                                    : [
                                          new Chat.TextMessage(
                                              "Хм… На цьому номері немає активного кредиту."
                                          ),
                                          new Chat.InvalidPhoneRequestMessage(),
                                      ]
                            ),
                        ]);
                        return;
                    case 200:
                        return response.json();
                    default:
                        dispatch(new Chat.StateTypeAction("error"));
                        return;
                }
            })
            .then((user?: UserData) => {
                if (!user) {
                    return;
                }
                identifyUser(value.payer, user);

                // The panel replaces the whole chat (greeting, phone prompt), so the debt and
                // the payment buttons start at the top of the screen in both flows.
                dispatch([
                    new Chat.FlushAction(
                        [
                            new Chat.PaymentPanelMessage(
                                user,
                                value.payer,
                                value.mode
                            ),
                        ],
                        true
                    ),
                    new Chat.StatePayerAction(value.payer),
                    new Chat.StateUserAction(
                        user.debt,
                        user.returnDate,
                        user.name,
                        user.prolongation
                    ),
                ]);
            })
            .catch(() => {
                if (controller?.signal.aborted) {
                    return;
                }
                dispatch(new Chat.StateTypeAction("error"));
            });

        return () => controller && controller.abort();
    }, [value, dispatch]);

    return <Base.LoadMessage />;
};
