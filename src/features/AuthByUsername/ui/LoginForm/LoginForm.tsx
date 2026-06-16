import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input/ui/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className = "" }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginform, {}, [className])}>
            <Input
                autoFocus
                className={cls.input}
                placeholder={t("widgets.widget-navbar.username-placeholder")}
            />
            <Input
                className={cls.input}
                type="password"
                placeholder={t("widgets.widget-navbar.password-placeholder")}
            />
            <Button className={cls.loginBtn}>
                {t("widgets.widget-navbar.auth")}
            </Button>
        </div>
    );
};
