import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface ThemeContextTypes {
    isDarkMode: boolean,
    toggleMode: () => void,
}
export const ThemeContext = createContext<ThemeContextTypes>({
    isDarkMode: false, toggleMode: () => { }
});

export function ThemeContextProvider({ children }: PropsWithChildren) {
    const theme = localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    const [isDarkMode, setIsDarkMode] = useState(theme);

    useEffect(() => {
        const currentMode = localStorage.getItem('theme');
        if (currentMode === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, [isDarkMode])

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }

    }
    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    )
}