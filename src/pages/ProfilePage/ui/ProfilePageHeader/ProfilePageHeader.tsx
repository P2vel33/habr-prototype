import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import cls from "./ProfilePageHeader.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import {
    profileActions,
    selectProfileReadonly,
    updateProfileData,
} from "@/entities/Profile";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({
    className = "",
}: ProfilePageHeaderProps) => {
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();
    const readonly = useSelector(selectProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCancel = useCallback(() => {
        dispatch(profileActions.returnProfile());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <div className={classNames(cls.profilepageheader, {}, [className])}>
            <Text title={t("title")} />
            {readonly ? (
                <Button theme={ThemeButton.OUTLINE} onClick={onEdit}>
                    {t("button-edit")}
                </Button>
            ) : (
                <div className={cls["action-buttons"]}>
                    <Button theme={ThemeButton.OUTLINE_RED} onClick={onCancel}>
                        {t("button-cancel")}
                    </Button>
                    <Button theme={ThemeButton.OUTLINE} onClick={onSave}>
                        {t("button-save")}
                    </Button>
                </div>
            )}
        </div>
    );
};
