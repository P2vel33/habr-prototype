import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "~/src/shared/ui/Select";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}
interface OptionsCurrency {
    value: Currency;
    content: Currency;
}
const options: OptionsCurrency[] = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
    const { className = "", value, onChange, readonly } = props;
    const { t } = useTranslation("currency");

    const onChangeHandler = useCallback(
        (currency: string) => {
            onChange?.(currency as Currency);
        },
        [onChange]
    );

    return (
        <Select
            label={t("currency")}
            options={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
        />
    );
};
