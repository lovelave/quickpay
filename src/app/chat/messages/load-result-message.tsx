import * as React from "react";
import * as Chat from "../reducer";
import {UserData} from "../state/debt-interface";
import * as Base from "../base";

export const LoadResultMessage = () => {
    const dispatch = Chat.useDispatchContext();

    React.useEffect(() => {
        let controller: AbortController | undefined = new AbortController();

        const phone = window.location.search;

        console.log(phone);

        fetch("https://test.l-l.cloud/v2/sign/request", {
            signal: controller.signal,
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({Request: {phone: window.location.search}}),
        })
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
            .then((user: UserData) => {
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
            });

        return () => controller && controller.abort();
    }, []);

    return <Base.LoadMessage/>;
}
