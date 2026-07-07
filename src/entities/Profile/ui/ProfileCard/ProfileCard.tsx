import { useTranslation } from "react-i18next";
import cls from "./ProfileCard.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Text, ThemeText } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input/ui/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "@/shared/ui/Loader/ui/Loader";
import { TextAlign } from "@/shared/ui/Text/ui/Text";
import { Avatar } from "~/src/shared/ui/Avatar";
import { Currency, CurrencySelect } from "~/src/entities/Currency";
import { Country, CountrySelect } from "~/src/entities/Country";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstname: (value: string) => void;
    onChangeLastname: (value: string) => void;
    onChangeAge: (value: string) => void;
    onChangeCity: (value: string) => void;
    onChangeUsername: (value: string) => void;
    onChangeAvatar: (value: string) => void;
    onChangeCurrency: (value: Currency) => void;
    onChangeCountry: (value: Country) => void;
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
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
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

    const mods: Mods = {
        [cls.editting]: !readonly,
    };

    return (
        <div className={classNames(cls.profilecard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatar}>
                        <Avatar src={data.avatar} alt={data.avatar} />
                    </div>
                )}
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
                <Input
                    value={data?.username || ""}
                    placeholder={t("data.username")}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t("data.age")}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.sity || ""}
                    placeholder={t("data.sity")}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar || ""}
                    placeholder={t("data.avatar")}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
