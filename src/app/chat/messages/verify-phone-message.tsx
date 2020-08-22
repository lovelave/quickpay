import * as React from "react";
import * as Chat from "../reducer";
import * as Base from "../base";
import {Request} from "../state/debt-interface";

export const VerifyPhoneMessage: React.FC<{value: Chat.VerifyPhoneMessage}> = ({value}) => {
    const dispatch = Chat.useDispatchContext();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        fetch("https://api.lovilave.com.ua/v2/sign/request", {signal: controller.signal})
            .then(response => response.json())
            .then((debts: Request[]) => {
                controller = undefined;

                const activeDebt: Request | undefined = debts.find(e => e.status === "Active");

                if (!activeDebt) {
                    dispatch([
                        new Chat.RemoveAction(value),
                        new Chat.PushAction([
                            new Chat.TextMessage("Хмм.. На этом номере нет активного кредита."),
                        ])
                    ])
                    return;
                }

                const textMessage = (activeDebt.overdue ?? 0) > 0
                    ? new Chat.TextMessage([
                        "Ой, этот кредит просрочен!",
                        "Срочно оплатите его, чтобы избежать передачи кредита коллекторам! Введите сумму."
                    ])
                    : new Chat.TextMessage([
                        "По этому номеру есть активный кредит",
                        "Пожалуйста, введите сумму для погашения."
                    ]);

                dispatch([
                    new Chat.RemoveAction(value),
                    new Chat.PushAction([
                        textMessage,
                        new Chat.CreditInfoMessage(activeDebt),
                    ])
                ])
            });

        return () => controller && controller.abort();
    }, [value.phone]);

    return <Base.LoadMessage/>;
};
