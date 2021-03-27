import { ThemeProvider } from "styled-components"
import { useState } from "react";
// import { useLocalStorage } from "../utils/hooks";

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

        highlight: "#e9ecef",
        unselected: "#f9f9f9",
        invert: "white",
        positive: "#28d76e",
        negative: "#f00f30",
        warn: "#ff9900",
        grey: "#d4d4d4",
        blue: "#3182DD",
        boxShadow: "0px 0px 15px -0px rgba(0,0,0,0.15)",
        primaryBoxShadow: "10px 7px 55px 10px rgba(0,0,0,0.15)",
    },

    [THEME_OPTIONS.dark]: {
        primary: "#2A9D8F",
        secondary: "#F4A261",
        tertiary: "#E9C46A",
        textPrimary: "white",
        textSecondary: "#bababa",
        highlight: "#3b3b3b",
        unselected: "#2b2b2b",
        invert: "#151515",
        positive: "#28d76e",
        negative: "#f00f30",
        warn: "#ff9900",
        grey: "#d4d4d4",
        blue: "#3182DD",
        boxShadow: "0px 0px 15px -0px rgba(0,0,0,1)",
        primaryBoxShadow: "10px 7px 55px 10px rgba(0,0,0,1)",
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