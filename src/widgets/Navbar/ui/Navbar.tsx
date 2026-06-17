import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { selectUserAuthData, userActions } from "@/entities/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(selectUserAuthData);
    const dispatch = useDispatch();

    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className || ""])}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t("widgets.widget-navbar.button-logout")}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className || ""])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t("widgets.widget-navbar.button-auth")}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
