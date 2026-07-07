import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import cls from "./SideBarItem.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { SideItemType } from "../../model/items";
import { classNames } from "@/shared/lib/classNames/classNames";
import { selectUserAuthData } from "~/src/entities/User";

interface SideBarItemProps {
    item: SideItemType;
    collapsed: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
    const isAuth = useSelector(selectUserAuthData);
    const { t } = useTranslation();

    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
