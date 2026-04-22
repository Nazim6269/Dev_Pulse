import { useCallback, useMemo } from "react";

import { securityMetadata } from "@/features/settings/data/settings.data";
import { usePersistentSettingsState } from "@/features/settings/hooks/usePersistentSettingsState";

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

export function useSecuritySettings() {
  const [state, setState] = usePersistentSettingsState(storageKey, initialState);

  const enableTwoFactor = useCallback(() => {
    setState((current) => ({ ...current, twoFactorEnabled: true }));
  }, [setState]);

  const twoFactorStatus = useMemo(
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

