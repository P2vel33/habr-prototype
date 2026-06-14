import { createContext } from "react";

export enum Theme {
    LIGHT = "app_light_theme",
    DARK = "app_dark_theme",
}

export interface ThemeContextProps {
    theme: Theme;
    setTheme?: (theme: Theme) => void;
}

const defaultTheme: ThemeContextProps = {
    theme: Theme.LIGHT,
    setTheme: undefined,
};

export const ThemeContext = createContext<ThemeContextProps>(defaultTheme);

export const LOCAL_STORAGE_THEME_KEY = "theme";
