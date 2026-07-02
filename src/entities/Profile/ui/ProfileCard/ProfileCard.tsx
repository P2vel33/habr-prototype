import { useTranslation } from "react-i18next";
import cls from "./ProfileCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, ThemeText } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input/ui/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "@/shared/ui/Loader/ui/Loader";
import { TextAlign } from "@/shared/ui/Text/ui/Text";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstname: (value: string) => void;
    onChangeLastname: (value: string) => void;
    readonly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation("profile");
    const {
        data,
        error,
        isLoading,
        className = "",
        onChangeFirstname,
        onChangeLastname,
        readonly,
    } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.profilecard, {}, [
                    className,
                    cls.loader,
                ])}
            >
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div
                className={classNames(cls.profilecard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    title={t("profile-card.error-title")}
                    theme={ThemeText.ERROR}
                    text={t("profile-card.error-text")}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.profilecard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.firstname || ""}
                    placeholder={t("data.firstname")}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname || ""}
                    placeholder={t("data.lastname")}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
