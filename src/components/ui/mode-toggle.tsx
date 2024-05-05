import Button from "./button";
import { HiMoon, HiSun } from 'react-icons/hi2'
import { useThemeContext } from "../../hooks/useThemeContext";

export default function ModeToggle() {
    const { isDarkMode, toggleMode } = useThemeContext();
    console.log(isDarkMode)
    return (
        <div>
            <Button variant={'ghost'} onClick={toggleMode}>
                {isDarkMode ? <HiMoon className="h-6 w-6 text-black dark:text-white" /> : <HiSun className="h-6 w-6 text-black dark:text-white" />}
            </Button>
        </div>
    )
}
