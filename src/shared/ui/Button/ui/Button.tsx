import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    USUALLY = "usually",
    OUTLINE = "outline",
    OUTLINE_RED = "outlineRed",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}
export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className = "",
        children,
        theme = ThemeButton.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled = false,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
});
