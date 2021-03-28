import { ThemeProvider } from "styled-components"
import { useState } from "react";

export const THEME_OPTIONS = {
    light: "LIGHT",
    dark: "DARK",
};

export const THEMES = {
    [THEME_OPTIONS.light]: {
        primary: "#f25287",
        secondary: "#2ecc71",
        tertiary: "#ffc93c",
        background: "#ffffff",
        textPrimary: "#000000",
        textSecondary: "#2ecc71",
    },
};

export const Theme = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(THEME_OPTIONS.light);

    return (
        <ThemeProvider
            theme={{
                colors: THEMES[theme],
                selectedTheme: theme,
                setTheme: (theme: string) => setTheme(theme)
            }}
        >
            { children }
        </ThemeProvider>
    );
}