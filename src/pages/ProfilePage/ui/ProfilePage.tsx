import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
    DynamicModalLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModalLoader/DynamicModalLoader";
import {
    fetchProfileData,
    profileActions,
    profileReducer,
    selectProfileError,
    selectProfileForm,
    selectProfileIsLoading,
    selectProfileReadonly,
} from "@/entities/Profile";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfileCard } from "@/entities/Profile/ui/ProfileCard/ProfileCard";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Country } from "@/shared/const/common";

export interface ProfilePageProps {
    className?: string;
}

const redusers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className = "" }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(selectProfileForm);
    const isLoading = useSelector(selectProfileIsLoading);
    const error = useSelector(selectProfileError);
    const readonly = useSelector(selectProfileReadonly);

    const onChangeFirstname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ firstname: value }));
        },
        [dispatch]
    );
    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastname: value }));
        },
        [dispatch]
    );
    const onChangeAge = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
        },
        [dispatch]
    );
    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ sity: value }));
        },
        [dispatch]
    );
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ username: value }));
        },
        [dispatch]
    );
    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value }));
        },
        [dispatch]
    );

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModalLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames("", {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    readonly={readonly}
                />
            </div>
        </DynamicModalLoader>
    );
};

export default ProfilePage;
