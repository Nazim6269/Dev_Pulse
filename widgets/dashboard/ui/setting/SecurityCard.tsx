import { memo } from "react";


import { ApiTokenManager } from "@/widgets/dashboard/ui/setting/ApiTokenManager";
import { SessionManager } from "@/widgets/dashboard/ui/setting/SessionManager";
import { TwoFactorStatus } from "@/widgets/dashboard/ui/setting/TwoFactorStatus";
import { useSecuritySettings } from "../../model/settings/useSecuritySettings";
import { SettingsCard } from "./shared/SettingsCard";
import { SectionTitle } from "./shared/SectionTitle";
import { SectionDesc } from "./shared/SectionDesc";
import { FieldRow } from "./shared/FieldRow";



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

