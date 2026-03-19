import { useState } from "react";
import { useTranslation } from "react-i18next";
import cls from "./SideBar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/widgets/ThemeSwither";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { Button } from "@/shared/ui/Button";

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className = "" }: SideBarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(true);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                {collapsed
                    ? t("widgets.side-bar.text-button-toggle")
                    : t("widgets.side-bar.text-button-toggle-collapsed")}
            </Button>
            <div
                className={classNames(cls.switchers, {
                    [cls["switchers-collapsed"]]: collapsed,
                })}
            >
                <ThemeSwitcher />
                <LangSwitcher
                    className={classNames("", { [cls.lang]: !collapsed })}
                />
            </div>
        </div>
    );
};
