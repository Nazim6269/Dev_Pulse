import { useCallback, useMemo, useState } from "react";

import { settingsSections } from "@/pages/dashboard/settings/data/settings.data";
import type { SettingsSectionId } from "./settings.types";

const initialSectionId = settingsSections[0]?.id ?? "profile";

export function useSettingsNavigation() {
  const [activeSection, setActiveSection] =
    useState<SettingsSectionId>(initialSectionId);

  const navItems = useMemo(
    () =>
      settingsSections.map((section) => ({
        ...section,
        isActive: section.id === activeSection,
      })),
    [activeSection],
  );

  const activeSectionMeta = useMemo(
    () => navItems.find((section) => section.isActive) ?? navItems[0],
    [navItems],
  );

  const handleSectionChange = useCallback((sectionId: SettingsSectionId) => {
    setActiveSection(sectionId);
    document
      .getElementById(`settings-section-${sectionId}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return {
    activeSection,
    activeSectionMeta,
    navItems,
    onSectionChange: handleSectionChange,
  };
}
