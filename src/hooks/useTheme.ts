"use client";

import { useCallback, useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  storeTheme,
  type ThemeMode,
} from "@/lib/theme";

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>("dark");

  // On mount, sync React state with whatever the blocking script
  // already applied to <html data-theme="...">.
  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as ThemeMode) ||
      getStoredTheme() ||
      getSystemTheme();
    setThemeState(current);
  }, []);

  const setTheme = useCallback((next: ThemeMode) => {
    applyTheme(next);
    storeTheme(next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return { theme, setTheme, toggleTheme };
}
