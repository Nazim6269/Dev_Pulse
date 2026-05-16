"use client"

import { useTheme as useNextTheme } from "next-themes"

/**
 * Custom hook to interact with the theme system.
 * Abstracts next-themes for easier extension (e.g., adding brand themes or complex logic).
 */
export function useTheme() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme()

  return {
    theme,
    setTheme,
    resolvedTheme,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    toggleTheme: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
    systemTheme,
  }
}
