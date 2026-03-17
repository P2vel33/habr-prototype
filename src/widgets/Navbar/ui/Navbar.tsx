import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className || ""])}>
            <div className={cls.links}>
                <AppLink to="/" className={cls.mainLink}>
                    {t("navbar.main-page")}
                </AppLink>
                <AppLink to="/about">{t("navbar.about-page")}</AppLink>
            </div>
        </div>
    );
};
