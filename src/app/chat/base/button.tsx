import * as React from "react";
import classNames from "classnames";

export type ButtonTheme = "primary" | "secondary";
export type ButtonProps = React.DetailedHTMLProps<React.HTMLProps<HTMLButtonElement>, HTMLButtonElement> & {
    theme: ButtonTheme,
}

const getClassNameByTheme = (theme?: ButtonProps["theme"]): string => {
    switch (theme) {
        case "primary":
            return "btn_white";
        default:
        case "secondary":
            return "btn_blue";
    }
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        return <button
            {...props}
            type={props.type as any ?? "button"}
            className={classNames("btn", getClassNameByTheme(props.theme), props.className)}
            ref={ref}
        />;
    }
);
