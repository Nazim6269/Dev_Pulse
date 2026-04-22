import { useCallback, useMemo } from "react";

import {
  accentColorOptions,
  appearanceStorageKey,
  languageOptions,
  themeOptions,
} from "@/features/settings/data/settings.data";
import { usePersistentSettingsState } from "@/features/settings/hooks/usePersistentSettingsState";
import type {
  AccentColorId,
  LanguageOptionId,
  ThemeOptionId,
} from "@/features/settings/types/settings.types";

interface AppearanceState {
  theme: ThemeOptionId;
  accentColor: AccentColorId;
  language: LanguageOptionId;
  compactDensity: boolean;
}

const initialState: AppearanceState = {
  theme: "dark",
  accentColor: "violet",
  language: "en",
  compactDensity: false,
};

export function useAppearanceSettings() {
  const [state, setState] = usePersistentSettingsState(appearanceStorageKey, initialState);

  const setTheme = useCallback((theme: ThemeOptionId) => {
    setState((current) => ({ ...current, theme }));
  }, [setState]);

  const setAccentColor = useCallback((accentColor: AccentColorId) => {
    setState((current) => ({ ...current, accentColor }));
  }, [setState]);

  const setLanguage = useCallback((language: LanguageOptionId) => {
    setState((current) => ({ ...current, language }));
  }, [setState]);

  const setCompactDensity = useCallback((compactDensity: boolean) => {
    setState((current) => ({ ...current, compactDensity }));
  }, [setState]);

  const themedOptions = useMemo(
    () => themeOptions.map((option) => ({ ...option, selected: option.value === state.theme })),
    [state.theme],
  );

  const accents = useMemo(
    () =>
      accentColorOptions.map((option) => ({
        ...option,
        selected: option.value === state.accentColor,
      })),
    [state.accentColor],
  );

  return {
    accents,
    compactDensity: state.compactDensity,
    language: state.language,
    languageOptions,
    setAccentColor,
    setCompactDensity,
    setLanguage,
    setTheme,
    theme: state.theme,
    themedOptions,
  };
}

