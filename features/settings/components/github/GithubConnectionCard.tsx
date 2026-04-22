import { ExternalLink, Globe } from "lucide-react";
import { memo } from "react";

import { Button } from "@/components/ui/button";
import { FieldRow } from "@/features/settings/components/shared/FieldRow";
import { IconWrapper } from "@/features/settings/components/shared/IconWrapper";
import { SectionDesc } from "@/features/settings/components/shared/SectionDesc";
import { SectionTitle } from "@/features/settings/components/shared/SectionTitle";
import { SettingsCard } from "@/features/settings/components/shared/SettingsCard";
import { ToggleSwitch } from "@/features/settings/components/shared/ToggleSwitch";
import { GithubStatusBadge } from "@/features/settings/components/github/GithubStatusBadge";
import { RepoAccessSelect } from "@/features/settings/components/github/RepoAccessSelect";
import { SyncIntervalSelect } from "@/features/settings/components/github/SyncIntervalSelect";
import { useGithubSettings } from "@/features/settings/hooks/useGithubSettings";

export const GithubConnectionCard = memo(function GithubConnectionCard() {
  const settings = useGithubSettings();

  return (
    <SettingsCard id="settings-section-github">
      <SectionTitle>GitHub connection</SectionTitle>
      <SectionDesc>Your synced GitHub account and OAuth permissions.</SectionDesc>

      <div className="mb-5 flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
        <IconWrapper icon={Globe} tone="neutral" />
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-medium text-white/85">{settings.connection.username}</p>
          <p className="text-[11px] text-white/35">
            {settings.isConnected ? "Connected" : "Disconnected"} - {settings.connection.profileUrl}
          </p>
        </div>
        <GithubStatusBadge label={settings.status.label} tone={settings.status.tone} />
        <Button className="h-8 text-[11px] text-white/40 hover:text-white/70" size="sm" variant="ghost">
          <ExternalLink className="mr-1 h-3 w-3" /> View
        </Button>
      </div>

      <FieldRow description="Which repos DevPulse can read" label="Repository access">
        <RepoAccessSelect onValueChange={settings.updateRepoAccess} options={settings.repoAccessOptions} value={settings.repoAccess} />
      </FieldRow>
      <FieldRow description="How often to pull new data" label="Auto-sync interval">
        <SyncIntervalSelect onValueChange={settings.updateSyncInterval} options={settings.syncIntervalOptions} value={settings.syncInterval} />
      </FieldRow>
      <FieldRow description="Requires private repo scope" label="Include private repos">
        <ToggleSwitch checked={settings.includePrivateRepos} onCheckedChange={settings.togglePrivateRepos} />
      </FieldRow>

      <div className="mt-4 flex items-center justify-between">
        <Button className="h-8 text-[11px] text-rose-400/60 hover:bg-rose-400/[0.08] hover:text-rose-400" onClick={settings.disconnectGithub} size="sm" variant="ghost">
          Disconnect GitHub
        </Button>
        <Button className="h-8 border border-white/[0.10] bg-white/[0.07] text-[11px] text-white/70 hover:bg-white/[0.12]" onClick={settings.syncNow} size="sm">
          {settings.isSyncing ? "Syncing..." : settings.lastSyncedAt}
        </Button>
      </div>
    </SettingsCard>
  );
});

