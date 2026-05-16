import { ExternalLink, Globe } from "lucide-react";
import { memo } from "react";

import { Button } from "@/components/ui/button";

import { FieldRow } from "./shared/FieldRow";
import { IconWrapper } from "./shared/IconWrapper";
import { SectionDesc } from "./shared/SectionDesc";
import { SectionTitle } from "./shared/SectionTitle";
import { SettingsCard } from "./shared/SettingsCard";
import { ToggleSwitch } from "./shared/ToggleSwitch";
import { GithubStatusBadge } from "./GithubStatusBadge";
import { RepoAccessSelect } from "./RepoAccessSelect";
import { SyncIntervalSelect } from "./SyncIntervalSelect";
import { useGithubSettings } from "@/widgets/dashboard/model/settings/useGithubSettings";

export const GithubConnectionCard = memo(function GithubConnectionCard() {
  const settings = useGithubSettings();

  return (
    <SettingsCard id="settings-section-github">
      <SectionTitle>GitHub connection</SectionTitle>
      <SectionDesc>
        Your synced GitHub account and OAuth permissions.
      </SectionDesc>

      <div className="mb-5 flex items-center gap-4 rounded-xl border border-border/40 bg-muted/30 p-4">
        <IconWrapper icon={Globe} tone="neutral" />
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-medium text-foreground/90">
            {settings.connection.username}
          </p>
          <p className="text-[11px] text-muted-foreground/40">
            {settings.isConnected ? "Connected" : "Disconnected"} -{" "}
            {settings.connection.profileUrl}
          </p>
        </div>
        <GithubStatusBadge
          label={settings.status.label}
          tone={settings.status.tone}
        />
        <Button
          className="h-8 text-[11px] text-muted-foreground/60 hover:text-foreground/80"
          size="sm"
          variant="ghost"
        >
          <ExternalLink className="mr-1 h-3 w-3" /> View
        </Button>
      </div>

      <FieldRow
        description="Which repos DevPulse can read"
        label="Repository access"
      >
        <RepoAccessSelect
          onValueChange={settings.updateRepoAccess}
          options={settings.repoAccessOptions}
          value={settings.repoAccess}
        />
      </FieldRow>
      <FieldRow
        description="How often to pull new data"
        label="Auto-sync interval"
      >
        <SyncIntervalSelect
          onValueChange={settings.updateSyncInterval}
          options={settings.syncIntervalOptions}
          value={settings.syncInterval}
        />
      </FieldRow>
      <FieldRow
        description="Requires private repo scope"
        label="Include private repos"
      >
        <ToggleSwitch
          checked={settings.includePrivateRepos}
          onCheckedChange={settings.togglePrivateRepos}
        />
      </FieldRow>

      <div className="mt-4 flex items-center justify-between">
        <Button
          className="h-8 text-[11px] text-rose-400/60 hover:bg-rose-400/[0.08] hover:text-rose-400"
          onClick={settings.disconnectGithub}
          size="sm"
          variant="ghost"
        >
          Disconnect GitHub
        </Button>
        <Button
          className="h-8 border border-border/40 bg-muted/50 text-[11px] text-muted-foreground/70 hover:bg-muted/80 hover:text-foreground"
          onClick={settings.syncNow}
          size="sm"
        >
          {settings.isSyncing ? "Syncing..." : settings.lastSyncedAt}
        </Button>
      </div>
    </SettingsCard>
  );
});
