import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal/Modal";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [auth, SetAuth] = useState<boolean>(false);

    const toggleAuth = useCallback(() => {
        SetAuth((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.navbar, {}, [className || ""])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={toggleAuth}
            >
                {t("navbar.auth")}
            </Button>
            <Modal isOpen={auth} onClose={toggleAuth}>
                Че, ты, сутулый хуй хочешь?
            </Modal>
        </div>
    );
};
