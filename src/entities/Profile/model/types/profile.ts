import { Country, Currency } from "@/shared/const/common";

export interface Profile {
    firstname: string;
    lastname: string;
    age: 24;
    currency: Currency;
    country: Country;
    sity: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
