export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "octolink-theme";

export function getStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

export function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function applyTheme(theme: ThemeMode) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function storeTheme(theme: ThemeMode) {
  window.localStorage.setItem(STORAGE_KEY, theme);
}
