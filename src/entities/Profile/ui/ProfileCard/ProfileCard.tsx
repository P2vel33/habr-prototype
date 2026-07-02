import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import cls from "./ProfileCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { selectProfileData } from "@/entities/Profile/model/selectors/selectProfileData/selectProfileData";
import { selectProfileIsLoading } from "@/entities/Profile/model/selectors/selectProfileIsLoading/selectProfileIsLoading";
import { selectProfileError } from "@/entities/Profile/model/selectors/selectProfileError/selectProfileError";
import { Text } from "@/shared/ui/Text";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input/ui/Input";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className = "" }: ProfileCardProps) => {
    const { t } = useTranslation("profile");

    const data = useSelector(selectProfileData);
    const isLoading = useSelector(selectProfileIsLoading);
    const error = useSelector(selectProfileError);
    return (
        <div className={classNames(cls.profilecard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t("title")} />
                <Button theme={ThemeButton.OUTLINE}>{t("button-edit")}</Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstname || ""}
                    placeholder={t("data.firstname")}
                />
                <Input
                    value={data?.lastname || ""}
                    placeholder={t("data.lastname")}
                />
            </div>
        </div>
    );
};
