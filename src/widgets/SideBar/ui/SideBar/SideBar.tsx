import { useState } from "react";
import { useTranslation } from "react-i18next";
import cls from "./SideBar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/widgets/ThemeSwither";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { ButtonSize } from "@/shared/ui/Button/ui/Button";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";

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
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? ">" : "<"}
                {/* {collapsed
                    ? t("widgets.side-bar.text-button-toggle")
                    : t("widgets.side-bar.text-button-toggle-collapsed")} */}
            </Button>
            <div className={cls.items}>
                <div>
                    <AppLink
                        to={RoutePath.main}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.item}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t("navbar.main-page")}
                        </span>
                    </AppLink>
                </div>
                <AppLink
                    to={RoutePath.about}
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t("navbar.about-page")}</span>
                </AppLink>
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
};
