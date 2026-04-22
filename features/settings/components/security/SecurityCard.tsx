import { memo } from "react";

import { FieldRow } from "@/features/settings/components/shared/FieldRow";
import { SectionDesc } from "@/features/settings/components/shared/SectionDesc";
import { SectionTitle } from "@/features/settings/components/shared/SectionTitle";
import { SettingsCard } from "@/features/settings/components/shared/SettingsCard";
import { ApiTokenManager } from "@/features/settings/components/security/ApiTokenManager";
import { SessionManager } from "@/features/settings/components/security/SessionManager";
import { TwoFactorStatus } from "@/features/settings/components/security/TwoFactorStatus";
import { useSecuritySettings } from "@/features/settings/hooks/useSecuritySettings";

export const SecurityCard = memo(function SecurityCard() {
  const settings = useSecuritySettings();

  return (
    <SettingsCard id="settings-section-security">
      <SectionTitle>Security</SectionTitle>
      <SectionDesc>Manage your session, password, and API access.</SectionDesc>
      <FieldRow description="TOTP app required at sign-in" label="Two-factor authentication">
        <TwoFactorStatus label={settings.twoFactorStatus.label} onEnable={settings.enableTwoFactor} tone={settings.twoFactorStatus.tone} />
      </FieldRow>
      <FieldRow description={settings.metadata.sessions.description} label={settings.metadata.sessions.label}>
        <SessionManager count={settings.sessionCount} />
      </FieldRow>
      <FieldRow description={settings.metadata.tokens.description} label={settings.metadata.tokens.label}>
        <ApiTokenManager count={settings.apiTokenCount} />
      </FieldRow>
    </SettingsCard>
  );
});

