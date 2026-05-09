"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const cycle = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  if (!mounted) {
    return (
      <button className="relative h-9 w-9 rounded-full flex items-center justify-center text-muted-foreground" aria-label="Toggle theme">
        <Sun className="h-[1.15rem] w-[1.15rem]" />
      </button>
    );
  }

  return (
    <button
      onClick={cycle}
      className="relative h-9 w-9 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
      aria-label={`Theme: ${theme}. Click to change.`}
      title={`Current: ${theme === "system" ? "System" : theme === "light" ? "Light" : "Dark"}`}
    >
      {theme === "system" && <Monitor className="h-[1.15rem] w-[1.15rem]" />}
      {theme === "light" && <Sun className="h-[1.15rem] w-[1.15rem]" />}
      {theme === "dark" && <Moon className="h-[1.15rem] w-[1.15rem]" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
