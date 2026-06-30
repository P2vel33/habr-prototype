import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
    DynamicModalLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModalLoader/DynamicModalLoader";
import { fetchProfileData, profileReducer } from "@/entities/Profile";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfileCard } from "@/entities/User/ui/ProfileCard/ProfileCard";

export interface ProfilePageProps {
    className?: string;
}

const redusers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className = "" }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModalLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames("", {}, [className])}>
                {/* {t("pages.profile-page.title")} */}
                <ProfileCard />
            </div>
        </DynamicModalLoader>
    );
};

export default ProfilePage;
