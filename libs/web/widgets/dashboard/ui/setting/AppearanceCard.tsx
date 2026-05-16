import { memo } from "react";

import { FieldRow } from "@/widgets/dashboard/ui/setting/shared/FieldRow";
import { SectionDesc } from "@/widgets/dashboard/ui/setting/shared/SectionDesc";
import { SectionTitle } from "@/widgets/dashboard/ui/setting/shared/SectionTitle";
import { SettingsCard } from "@/widgets/dashboard/ui/setting/shared/SettingsCard";
import { AccentColorPicker } from "@/widgets/dashboard/ui/setting/AccentColorPicker";
import { DensityToggle } from "@/widgets/dashboard/ui/setting/DensityToggle";
import { LanguageSelector } from "@/widgets/dashboard/ui/setting/LanguageSelector";
import { ThemeSelector } from "@/widgets/dashboard/ui/setting/ThemeSelector";
import { useAppearanceSettings } from "@/widgets/dashboard/model/settings/useAppearanceSettings";

export const AppearanceCard = memo(function AppearanceCard() {
  const settings = useAppearanceSettings();

  return (
    <SettingsCard id="settings-section-appearance">
      <SectionTitle>Appearance</SectionTitle>
      <SectionDesc>Customise how DevPulse looks for you.</SectionDesc>
      <FieldRow description="Global colour scheme" label="Theme">
        <ThemeSelector
          onSelect={settings.setTheme}
          options={settings.themedOptions}
        />
      </FieldRow>
      <FieldRow description="Highlight color across UI" label="Accent color">
        <AccentColorPicker
          colors={settings.accents}
          onSelect={settings.setAccentColor}
        />
      </FieldRow>
      <FieldRow description="Localisation preference" label="Language & region">
        <LanguageSelector
          onValueChange={settings.setLanguage}
          options={settings.languageOptions}
          value={settings.language}
        />
      </FieldRow>
      <FieldRow
        description="Reduce padding across all views"
        label="Compact density"
      >
        <DensityToggle
          checked={settings.compactDensity}
          onCheckedChange={settings.setCompactDensity}
        />
      </FieldRow>
    </SettingsCard>
  );
});
