import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
    DynamicModalLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModalLoader/DynamicModalLoader";
import { profileReducer } from "@/entities/Profile";

export interface ProfilePageProps {
    className?: string;
}

const redusers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className = "" }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModalLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames("", {}, [className])}>
                {t("pages.profile-page.title")}
            </div>
        </DynamicModalLoader>
    );
};

export default ProfilePage;
