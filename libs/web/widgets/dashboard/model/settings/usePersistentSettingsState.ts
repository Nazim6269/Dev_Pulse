import { useEffect, useState } from "react";

export function usePersistentSettingsState<T>(storageKey: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const rawValue = window.localStorage.getItem(storageKey);
    if (!rawValue) {
      return initialValue;
    }

    try {
      return JSON.parse(rawValue) as T;
    } catch {
      window.localStorage.removeItem(storageKey);
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]);

  return [value, setValue] as const;
}
