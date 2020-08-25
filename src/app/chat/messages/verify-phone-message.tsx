import * as React from "react";
import * as Chat from "../reducer";
import * as Base from "../base";
import {Request} from "../state/debt-interface";

export const VerifyPhoneMessage: React.FC<{ value: Chat.VerifyPhoneMessage }> = ({value}) => {
    const dispatch = Chat.useDispatchContext();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        fetch("https://api.lovilave.com.ua/v2/sign/request", {signal: controller.signal})
            .then(response => {
                // if (response.status === 422) {
                //     dispatch([
                //         new Chat.RemoveAction(value),
                //         new Chat.PushAction([
                //             new Chat.TextMessage("Хмм.. На этом номере нет активного кредита."),
                //         ])
                //     ]);
                //     return Promise.reject(undefined);
                // }

                return response.json()
            })
            .then((debts: Request[]) => {
                controller = undefined;

                // const activeDebt: Request | undefined = debts.find(e => e.status === "Active");
                //
                // if (!activeDebt) {
                //     return;
                // }
                //
                // const textMessage = (activeDebt.overdue ?? 0) > 0
                //     ? new Chat.TextMessage([
                //         "Ой, этот кредит просрочен!",
                //         "Срочно оплатите его, чтобы избежать передачи кредита коллекторам! Введите сумму."
                //     ])
                //     : new Chat.TextMessage([
                //         "По этому номеру есть активный кредит",
                //         "Пожалуйста, введите сумму для погашения."
                //     ]);

                const textMessage = new Chat.TextMessage([
                    "По этому номеру есть активный кредит",
                    "Пожалуйста, введите сумму для погашения."
                ], "bot", null);

                dispatch([
                    new Chat.RemoveAction(value),
                    new Chat.PushAction([
                        textMessage,
                        new Chat.CreditInfoMessage({
                            "id": 31,
                            "applicationId": "8449235",
                            "number": 1,
                            "amount": 3000,
                            "term": 24,
                            "created": "2020-08-10 09:43:39",
                            "status": "Active",
                            "initDebtSum": 4425.6,
                            "initReturnDate": "2020-09-02 12:55:09",
                            "rate": {"interest": 0.0198, "penalty": 0.02},
                            "defaultRate": {"interest": 0.0198, "penalty": 0.02},
                            "gracePeriod": 0,
                            "commissionSum": 0,
                            "dateReturn": "2020-09-02 00:00:00",
                            "agreement": "https://bobra-backend-test.s3.eu-central-1.amazonaws.com/documents/27/035b4ce9654614d8749b2eaf2f2c6904042cc0b7.pdf",
                            "debt": {"body": 3000, "interest": 59.4, "penalty": 0, "total": 3059.4},
                            "paid": 0,
                            "overdue": 0,
                            "datePaid": "2020-08-10 12:55:09",
                        }),
                        new Chat.PaymentSumMessage(3059.4, "https://bobra-backend-test.s3.eu-central-1.amazonaws.com/documents/27/035b4ce9654614d8749b2eaf2f2c6904042cc0b7.pdf"), // debt.total
                    ])
                ])
            });

        return () => controller && controller.abort();
    }, [value.phone]);

    return <Base.LoadMessage/>;
};
