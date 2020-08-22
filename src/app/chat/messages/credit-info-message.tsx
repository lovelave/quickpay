import * as React from "react";
import * as Chat from "../reducer";
import dayjs from "dayjs";

export interface Item {
    value: string
    label: string
}

export const Item: React.FC<Item> = (
    { value, label }
) => {
    return (
        <div className="form-group">
            <span className="label">{label}</span>
            <div className="input-group">
                <span className="value">{value}</span>
            </div>
        </div>
    );
};

export const CreditInfoMessage: React.FC<{value: Chat.CreditInfoMessage}> = ({value: {debt}}) => {
    const dayNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    const items: Item[] = (debt.overdue ?? 0) > 0
        ? [
            {
                label: "Конец срока",
                value: dayjs(debt.dateReturn).format("DD.MM.YYYY ") + " " + dayNames[new Date(debt.dateReturn).getDay()],
            },
            {
                label: "Просрочка",
                value: (debt.overdue ?? 0).toString(),
            }
        ]
        : [
            {
                label: "",
                value: "",
            },
            {
                label: "",
                value: "",
            }
        ];

    return (
        <div className="message bot-message user-data total full-sized-mobile">
            <div className="wrap">
                <div className="animated">
                    <form className="data-panel">
                        <div className="panel-heading">
                            <h4>Данные по кредиту</h4>
                        </div>
                        <div className="panel-body">
                            <div className="half">
                                {items.map((e, i) => <Item {...e} key={i} />)}
                            </div>
                        </div>
                        <div className="panel-footer">
                            <span className="line"/>
                            <div className="solid">
                                <p>Итого к возврату на сегодня: <span className="increased">{debt.debt?.total ?? 0}</span> грн</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
