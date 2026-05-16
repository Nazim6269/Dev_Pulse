"use client";

import {
  useSettingsNavigation,
  SettingsSidebar,
  ProfileCard,
  GithubConnectionCard,
  NotificationSettingsList,
  SecurityCard,
  AppearanceCard,
  DangerZoneCard,
} from "@/widgets/dashboard";
import { memo } from "react";

export const SettingsFeature = memo(function SettingsFeature() {
  const navigation = useSettingsNavigation();

  return (
    <div className="flex h-screen overflow-hidden bg-primaryColor font-sans text-foreground">
      <div className="flex flex-1 overflow-hidden">
        <SettingsSidebar
          items={navigation.navItems}
          onSectionChange={navigation.onSectionChange}
        />
        <main className="flex-1 overflow-y-auto p-7">
          <div className="flex flex-col gap-5">
            <header className="mb-1">
              <h1 className="text-[20px] font-semibold tracking-tight text-foreground">
                {navigation.activeSectionMeta?.label} settings
              </h1>
              <p className="mt-1 text-[12px] text-muted-foreground/60">
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

export default function DefaultExport() { return null; }

