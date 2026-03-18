import { useTranslation } from "react-i18next";
import cls from "./PageError.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className = "" }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.pageerror, {}, [className])}>
            {t("widgets.page-error.title")}
            <Button onClick={reloadPage}>
                {t("widgets.page-error.text-button-reload")}
            </Button>
        </div>
    );
};
