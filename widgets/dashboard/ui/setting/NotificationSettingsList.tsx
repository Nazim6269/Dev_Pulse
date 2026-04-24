import { memo } from "react";

import { SectionDesc } from "./shared/SectionDesc";
import { SectionTitle } from "./shared/SectionTitle";
import { SettingsCard } from "./shared/SettingsCard";
import { NotificationToggleItem } from "./NotificationToggleItem";
import { useNotificationSettings } from "@/widgets/dashboard/model/settings/useNotificationSettings";

export const NotificationSettingsList = memo(
  function NotificationSettingsList() {
    const settings = useNotificationSettings();

    return (
      <SettingsCard id="settings-section-notifications">
        <SectionTitle>Notification preferences</SectionTitle>
        <SectionDesc>Choose what activities trigger alerts.</SectionDesc>
        {settings.notificationItems.map((item: any) => (
          <NotificationToggleItem
            key={item.id}
            description={item.description}
            enabled={item.enabled}
            label={item.label}
            onToggle={(enabled) =>
              settings.toggleNotification(item.id, enabled)
            }
          />
        ))}
      </SettingsCard>
    );
  },
);
