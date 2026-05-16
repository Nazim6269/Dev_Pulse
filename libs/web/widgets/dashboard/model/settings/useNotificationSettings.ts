import { useCallback, useMemo } from "react";

import { notificationPreferences } from "@/pages/dashboard/settings/data/settings.data";
import { usePersistentSettingsState } from "./usePersistentSettingsState";

const storageKey = "devpulse-settings-notifications";

function buildInitialState() {
  return Object.fromEntries(
    notificationPreferences.map((item) => [item.id, item.enabledByDefault]),
  ) as Record<string, boolean>;
}

export function useNotificationSettings() {
  const [state, setState] = usePersistentSettingsState(storageKey, buildInitialState());

  const notificationItems = useMemo(
    () =>
      notificationPreferences.map((item) => ({
        ...item,
        enabled: state[item.id] ?? item.enabledByDefault,
      })),
    [state],
  );

  const toggleNotification = useCallback((id: string, enabled: boolean) => {
    setState((current) => ({ ...current, [id]: enabled }));
  }, [setState]);

  return {
    notificationItems,
    toggleNotification,
  };
}

