import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import cls from "./SideBar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/widgets/ThemeSwither";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { ButtonSize } from "@/shared/ui/Button/ui/Button";
import { SideBarItemsList } from "../../model/items";
import { SideBarItem } from "../SideBarItem/SideBarItem";

interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className = "" }: SideBarProps) => {
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
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                {SideBarItemsList.map((item) => (
                    <SideBarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </div>
            <div
                className={classNames(cls.switchers, {
                    [cls["switchers-collapsed"]]: collapsed,
                })}
            >
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={classNames("", { [cls.lang]: !collapsed })}
                />
            </div>
        </div>
    );
});
