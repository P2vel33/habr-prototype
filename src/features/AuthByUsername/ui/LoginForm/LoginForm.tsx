import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import cls from "./LoginForm.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input/ui/Input";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, ThemeText } from "@/shared/ui/Text";
import { selectLoginUsername } from "../../model/selectors/selectLoginUsername/selectLoginUsername";
import { selectLoginError } from "../../model/selectors/selectLoginError/selectLoginError";
import { selectLoginIsLoading } from "../../model/selectors/selectLoginIsLoading/selectLoginIsLoading";
import { selectLoginPassword } from "../../model/selectors/selectLoginPassword/selectLoginPassword";
import {
    DynamicModalLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModalLoader/DynamicModalLoader";

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginForm = memo(({ className = "" }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(selectLoginUsername);
    const password = useSelector(selectLoginPassword);
    const isLoading = useSelector(selectLoginIsLoading);
    const error = useSelector(selectLoginError);

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
        <DynamicModalLoader reducers={initialReducers}>
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
        </DynamicModalLoader>
    );
});

export default LoginForm;
