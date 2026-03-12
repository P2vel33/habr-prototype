import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
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
