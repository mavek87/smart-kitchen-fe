import React, {useState} from "react";
import {DARK_THEME, LIGHT_THEME} from "../constants";

export const ThemeContext = React.createContext({
    theme: "",
    toggleTheme: () => {}
});

interface Props {
    children: React.ReactNode
}

export default function ThemeContextProvider({children}: Props) {
    const [theme, setTheme] = useState<string>(DARK_THEME);

    function toggleTheme() {
        setTheme(oldTheme => {
            let newTheme;
            if (oldTheme) {
                newTheme = oldTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
            } else {
                newTheme = LIGHT_THEME;
            }
            document.documentElement.setAttribute('data-theme', newTheme);
            return newTheme;
        });
    }

    const themeContextState = {
        theme, toggleTheme
    }

    return <ThemeContext.Provider value={themeContextState}>
        {children}
    </ThemeContext.Provider>;
}