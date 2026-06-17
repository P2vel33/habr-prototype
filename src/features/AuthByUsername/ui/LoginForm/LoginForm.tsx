import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import cls from "./LoginForm.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input/ui/Input";
import { loginActions } from "../../model/slice/loginSlice";
import { selectLoginState } from "../../model/selectors/selectLoginState/selectLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, ThemeText } from "@/shared/ui/Text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className = "" }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } =
        useSelector(selectLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);
    return (
        <div className={classNames(cls.loginform, {}, [className])}>
            <Text title={t("features.auth-by-username.login-form.title")} />
            {error && <Text text={error} theme={ThemeText.ERROR} />}
            <Input
                autoFocus
                className={cls.input}
                onChange={onChangeUsername}
                placeholder={t(
                    "features.auth-by-username.login-form.username-placeholder"
                )}
                value={username}
            />
            <Input
                className={cls.input}
                onChange={onChangePassword}
                type="password"
                placeholder={t(
                    "features.auth-by-username.login-form.password-placeholder"
                )}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ThemeButton.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t("features.auth-by-username.login-form.button-auth")}
            </Button>
        </div>
    );
});
