import { useCallback, useMemo, useState, useTransition } from "react";

import {
  githubConnection,
  repoAccessOptions,
  syncIntervalOptions,
} from "@/features/settings/data/settings.data";
import { usePersistentSettingsState } from "@/features/settings/hooks/usePersistentSettingsState";
import type { RepoAccessValue, SettingsTone, SyncIntervalValue } from "@/features/settings/types/settings.types";

const storageKey = "devpulse-settings-github";

interface GithubState {
  repoAccess: RepoAccessValue;
  syncInterval: SyncIntervalValue;
  includePrivateRepos: boolean;
  connected: boolean;
}

interface GithubStatus {
  label: string;
  tone: SettingsTone;
}

const initialState: GithubState = {
  repoAccess: "all",
  syncInterval: "5m",
  includePrivateRepos: true,
  connected: true,
};

export function useGithubSettings() {
  const [state, setState] = usePersistentSettingsState<GithubState>(storageKey, initialState);
  const [isSyncing, startSyncTransition] = useTransition();
  const [lastSyncedAt, setLastSyncedAt] = useState("Just now");

  const updateRepoAccess = useCallback((repoAccess: RepoAccessValue) => {
    setState((current) => ({ ...current, repoAccess }));
  }, [setState]);

  const updateSyncInterval = useCallback((syncInterval: SyncIntervalValue) => {
    setState((current) => ({ ...current, syncInterval }));
  }, [setState]);

  const togglePrivateRepos = useCallback((includePrivateRepos: boolean) => {
    setState((current) => ({ ...current, includePrivateRepos }));
  }, [setState]);

  const disconnectGithub = useCallback(() => {
    setState((current) => ({ ...current, connected: false }));
  }, [setState]);

  const syncNow = useCallback(() => {
    startSyncTransition(() => {
      setLastSyncedAt("Synced moments ago");
    });
  }, []);

  const status = useMemo<GithubStatus>(
    () => ({
      label: state.connected ? "Active" : "Disconnected",
      tone: state.connected ? "success" : "warning",
    }),
    [state.connected],
  );

  return {
    connection: githubConnection,
    disconnectGithub,
    includePrivateRepos: state.includePrivateRepos,
    isConnected: state.connected,
    isSyncing,
    lastSyncedAt,
    repoAccess: state.repoAccess,
    repoAccessOptions,
    status,
    syncInterval: state.syncInterval,
    syncIntervalOptions,
    syncNow,
    togglePrivateRepos,
    updateRepoAccess,
    updateSyncInterval,
  };
}
