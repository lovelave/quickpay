import * as React from "react";

import classNames from "classnames";
import { ButtonMessage } from "./button-message";

export interface Item<O> {
    type: "primary" | "secondary";
    option: O;
    content: string;
}

export interface ButtonProps<O = any> extends Item<O> {
    onClick: (option: O, content: string) => void;
}

const getClassNameByType = (type: ButtonProps["type"]): string => {
    switch (type) {
        case "primary":
            return "btn_blue";
        case "secondary":
            return "btn_white";
    }
};

export const Button: React.FC<ButtonProps> = (
    { content, type, onClick, option }
) => {

    const handleClick = () => {
        onClick(option, content)
    };

    return (
        <button type="button" className={classNames("btn", getClassNameByType(type))} onClick={handleClick}>
            {content}
        </button>
    );
};

Button.displayName = "Chat.Menu.Button";

export interface MessageProps<O = any> {
    items: Array<Item<O>>;
    onSelect: (option: O, content: string) => void;
}

export const Message: React.FC<MessageProps> = ({ items, onSelect }) => {
    const handleClick = React.useCallback((option, select) => onSelect(option, select), [onSelect]);
    return (
        <ButtonMessage source="user" className="menu-message">
            {items.map((item, i) => (
                <Button key={i} onClick={handleClick} {...item} />
            ))}
        </ButtonMessage>
    );
};
