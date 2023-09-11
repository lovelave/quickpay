import * as React from "react";
import * as Chat from "../chat-logic";
import dayjs from "dayjs";
import { plural } from "../../utils/plural";
import { Time } from "../base/time";

const dashedLine = require("../svg/dashed-line.svg");

export interface Item {
    value: string;
    label: string;
}

export const Item: React.FC<Item> = ({ value, label }) => {
    return (
        <div className="form-group">
            <span className="label">{label}</span>
            <div className="input-group">
                <span className="value">{value}</span>
            </div>
        </div>
    );
};

export const CreditInfoMessage: React.FC<{ value: Chat.CreditInfoMessage }> = ({
    value: { user, overdue },
}) => {
    const dayNames = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    const returnDate = dayjs(user.returnDate);

    const formatReturnDate =
        returnDate.format("DD.MM.YYYY") +
        " " +
        dayNames[+returnDate.format("d")];

    const items: Item[] =
        overdue > 0
            ? [
                  {
                      label: "Кінець терміну",
                      value: formatReturnDate,
                  },
                  {
                      label: "Прострочення",
                      value: plural(overdue, "days"),
                  },
                  {
                      label: "Клієнт",
                      value: user.name,
                  },
              ]
            : [
                  {
                      label: "Сплатити до",
                      value: formatReturnDate,
                  },
                  {
                      label: "Залишилось",
                      value:
                          overdue === 0
                              ? "Сьогодні останній день!"
                              : plural(
                                    returnDate.diff(
                                        dayjs().startOf("day"),
                                        "day"
                                    ),
                                    "days"
                                ),
                  },
                  {
                      label: "Клієнт",
                      value: user.name,
                  },
              ];

    return (
        <div className="message bot-message user-data total full-sized-mobile">
            <div className="wrap">
                <div className="animated">
                    <form className="data-panel">
                        <div className="panel-heading">
                            <h4>Дані кредиту</h4>
                        </div>
                        <div className="panel-body">
                            <div className="half">
                                {items.map((e, i) => (
                                    <Item {...e} key={i} />
                                ))}
                            </div>
                        </div>
                        <div className="panel-footer">
                            <img src={dashedLine} className="line" alt="line" />
                            <p className="solid">
                                Разом до повернення на сьогодні:&nbsp;
                                <span className="increased">
                                    {+user.debt.toFixed(2)}
                                </span>
                                &nbsp;грн
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <Time value={new Date().toISOString()} />
        </div>
    );
};
