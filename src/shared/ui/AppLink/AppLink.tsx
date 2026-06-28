import { Link, LinkProps } from "react-router-dom";
import { FC, memo, ReactNode } from "react";
import cls from "./AppLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.applink, {}, [
                className || "",
                cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
