import * as React from "react";
import { PhoneNumberList } from "modules/data/PhoneNumberList";
import { IconOperator } from "modules/components/Icons/icon-operator";

import "./styles.scss";

export const Support = () => {
    return (
        <div className="support">
            <a href="mailto:hello@lovilave.com.ua" className="btn btn_blue">
                Написать нам
                <span className="emoji emoji_speaker" />
            </a>
            <span className="sub-title">С 10:00 до 19:00, Пн - Пт</span>
            <div className="btn-container">
                {
                    PhoneNumberList.map((phone) => {
                        return <a href={`tel:${phone.value}`} className="phone-link" key={phone.operator}>
                            <IconOperator operator={phone.operator} />
                            <span>{phone.value}</span>
                        </a>
                    })
                }
            </div>
        </div>
    );
}

Support.displayName = "Support";
