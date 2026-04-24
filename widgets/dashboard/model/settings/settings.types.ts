import type { LucideIcon } from "lucide-react";

export type SettingsSectionId =
  | "profile"
  | "github"
  | "notifications"
  | "security"
  | "appearance"
  | "danger-zone";

export type SettingsTone = "primary" | "success" | "warning" | "danger" | "neutral" ;
export type ThemeOptionId = "dark" | "light" | "system";
export type AccentColorId = "violet" | "blue" | "emerald" | "amber" | "rose";
export type LanguageOptionId = "en" | "en-gb" | "de" | "fr";
export type RepoAccessValue = "all" | "selected" | "public";
export type SyncIntervalValue = "1m" | "5m" | "15m" | "1h";

export interface SettingsNavSection {
  id: SettingsSectionId;
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface SelectOption<T extends string> {
  value: T;
  label: string;
}

export interface ProfileSettingsForm {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  location: string;
  website: string;
}

export interface NotificationPreference {
  id: string;
  label: string;
  description: string;
  enabledByDefault: boolean;
}

export interface SecurityActionMeta {
  label: string;
  description: string;
  actionLabel: string;
}

