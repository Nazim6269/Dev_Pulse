import { useCallback, useMemo } from "react";

import { securityMetadata } from "@/pages/dashboard/settings/data/settings.data";
import { usePersistentSettingsState } from "./usePersistentSettingsState";
import { SettingsTone } from "./settings.types";

const storageKey = "devpulse-settings-security";

interface SecurityState {
  twoFactorEnabled: boolean;
  activeSessions: number;
  apiTokens: number;
}

const initialState: SecurityState = {
  twoFactorEnabled: false,
  activeSessions: 3,
  apiTokens: 4,
};

interface SecurityStatus {
  label: string;
  tone: Extract<SettingsTone, "success" | "warning">;
}

export function useSecuritySettings() {
  const [state, setState] = usePersistentSettingsState(
    storageKey,
    initialState,
  );

  const enableTwoFactor = useCallback(() => {
    setState((current) => ({ ...current, twoFactorEnabled: true }));
  }, [setState]);

  const twoFactorStatus = useMemo<SecurityStatus>(
    () => ({
      label: state.twoFactorEnabled ? "Enabled" : "Not enabled",
      tone: state.twoFactorEnabled ? "success" : "warning",
    }),
    [state.twoFactorEnabled],
  );

  return {
    apiTokenCount: state.apiTokens,
    enableTwoFactor,
    sessionCount: state.activeSessions,
    twoFactorStatus,
    metadata: securityMetadata,
  };
}
