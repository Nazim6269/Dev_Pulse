"use client";

import { memo } from "react";

import { AppearanceCard } from "@/features/settings/components/appearance/AppearanceCard";
import { DangerZoneCard } from "@/features/settings/components/danger-zone/DangerZoneCard";
import { GithubConnectionCard } from "@/features/settings/components/github/GithubConnectionCard";
import { NotificationSettingsList } from "@/features/settings/components/notifications/NotificationSettingsList";
import { ProfileCard } from "@/features/settings/components/profile/ProfileCard";
import { SecurityCard } from "@/features/settings/components/security/SecurityCard";
import { SettingsSidebar } from "@/features/settings/components/sidebar/SettingsSidebar";
import { useSettingsNavigation } from "@/features/settings/hooks/useSettingsNavigation";

export const SettingsFeature = memo(function SettingsFeature() {
  const navigation = useSettingsNavigation();

  return (
    <div className="flex h-screen overflow-hidden bg-primaryColor font-sans text-white">
      <div className="flex flex-1 overflow-hidden">
        <SettingsSidebar items={navigation.navItems} onSectionChange={navigation.onSectionChange} />
        <main className="flex-1 overflow-y-auto p-7">
          <div className="flex flex-col gap-5">
            <header className="mb-1">
              <h1 className="text-[20px] font-semibold tracking-tight text-white">
                {navigation.activeSectionMeta?.label} settings
              </h1>
              <p className="mt-1 text-[12px] text-white/35">
                {navigation.activeSectionMeta?.description}
              </p>
            </header>
            <ProfileCard />
            <GithubConnectionCard />
            <NotificationSettingsList />
            <SecurityCard />
            <AppearanceCard />
            <DangerZoneCard />
          </div>
        </main>
      </div>
    </div>
  );
});

