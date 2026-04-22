import { memo } from "react";

import { SectionDesc } from "@/features/settings/components/shared/SectionDesc";
import { SectionTitle } from "@/features/settings/components/shared/SectionTitle";
import { SettingsCard } from "@/features/settings/components/shared/SettingsCard";
import { NotificationToggleItem } from "@/features/settings/components/notifications/NotificationToggleItem";
import { useNotificationSettings } from "@/features/settings/hooks/useNotificationSettings";

export const NotificationSettingsList = memo(function NotificationSettingsList() {
  const settings = useNotificationSettings();

  return (
    <SettingsCard id="settings-section-notifications">
      <SectionTitle>Notification preferences</SectionTitle>
      <SectionDesc>Choose what activities trigger alerts.</SectionDesc>
      {settings.notificationItems.map((item) => (
        <NotificationToggleItem
          key={item.id}
          description={item.description}
          enabled={item.enabled}
          label={item.label}
          onToggle={(enabled) => settings.toggleNotification(item.id, enabled)}
        />
      ))}
    </SettingsCard>
  );
});

