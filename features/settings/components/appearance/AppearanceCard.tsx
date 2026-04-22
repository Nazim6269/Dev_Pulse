import { memo } from "react";

import { FieldRow } from "@/features/settings/components/shared/FieldRow";
import { SectionDesc } from "@/features/settings/components/shared/SectionDesc";
import { SectionTitle } from "@/features/settings/components/shared/SectionTitle";
import { SettingsCard } from "@/features/settings/components/shared/SettingsCard";
import { AccentColorPicker } from "@/features/settings/components/appearance/AccentColorPicker";
import { DensityToggle } from "@/features/settings/components/appearance/DensityToggle";
import { LanguageSelector } from "@/features/settings/components/appearance/LanguageSelector";
import { ThemeSelector } from "@/features/settings/components/appearance/ThemeSelector";
import { useAppearanceSettings } from "@/features/settings/hooks/useAppearanceSettings";

export const AppearanceCard = memo(function AppearanceCard() {
  const settings = useAppearanceSettings();

  return (
    <SettingsCard id="settings-section-appearance">
      <SectionTitle>Appearance</SectionTitle>
      <SectionDesc>Customise how DevPulse looks for you.</SectionDesc>
      <FieldRow description="Global colour scheme" label="Theme">
        <ThemeSelector onSelect={settings.setTheme} options={settings.themedOptions} />
      </FieldRow>
      <FieldRow description="Highlight color across UI" label="Accent color">
        <AccentColorPicker colors={settings.accents} onSelect={settings.setAccentColor} />
      </FieldRow>
      <FieldRow description="Localisation preference" label="Language & region">
        <LanguageSelector onValueChange={settings.setLanguage} options={settings.languageOptions} value={settings.language} />
      </FieldRow>
      <FieldRow description="Reduce padding across all views" label="Compact density">
        <DensityToggle checked={settings.compactDensity} onCheckedChange={settings.setCompactDensity} />
      </FieldRow>
    </SettingsCard>
  );
});

