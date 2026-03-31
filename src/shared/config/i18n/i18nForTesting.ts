// src/shared/config/i18n/i18nForTesting.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // <-- Добавьте import
import LanguageDetector from "i18next-browser-languagedetector"; // <-- При необходимости

i18n.use(Backend) // <-- Используйте Backend
    .use(LanguageDetector) // <-- При необходимости
    .use(initReactI18next)
    .init({
        lng: "ru", // Явно укажите язык для тестов
        fallbackLng: "ru",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json", // <-- Укажите тот же путь, что и в основном файле
        },
        // Не указывайте `resources`, т.к. они будут подгружаться через backend
    });

export default i18n;
