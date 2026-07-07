import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "~/src/shared/ui/Select";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
interface OptionsCountry {
    value: Country;
    content: Country;
}
const options: OptionsCountry[] = [
    { value: Country.FRANCE, content: Country.FRANCE },
    { value: Country.GERMANY, content: Country.GERMANY },
    { value: Country.ITALY, content: Country.ITALY },
    { value: Country.SPAIN, content: Country.SPAIN },
];

export const CountrySelect = (props: CountrySelectProps) => {
    const { className = "", value, onChange, readonly } = props;
    const { t } = useTranslation("country");

    const onChangeHandler = useCallback(
        (country: string) => {
            onChange?.(country as Country);
        },
        [onChange]
    );

    return (
        <Select
            label={t("country")}
            options={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
        />
    );
};
