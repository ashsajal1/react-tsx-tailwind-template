import Button from "./button";
import { HiMoon, HiSun } from 'react-icons/hi2'
import { useThemeContext } from "../../hooks/useThemeContext";

export default function ModeToggle() {
    const { isDarkMode, toggleMode } = useThemeContext();
    // console.log(isDarkMode)
    return (

        <Button variant={'ghost'} onClick={toggleMode}>
            {isDarkMode ? <HiSun className="h-6 w-6 text-dark dark:text-light" /> : <HiMoon className="h-6 w-6 dark:text-white" />}
        </Button>
    )
}
