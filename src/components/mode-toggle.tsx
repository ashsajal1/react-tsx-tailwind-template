import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <>
      <Button
        className="hidden dark:flex"
        onClick={() => setTheme("light")}
        variant="outline"
        size="icon"
      >
        <Sun strokeWidth={1} className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <Button
        className="dark:hidden"
        onClick={() => setTheme("dark")}
        variant="outline"
        size="icon"
      >
        <Moon strokeWidth={1} className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
