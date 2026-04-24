import {
  AlertTriangle,
  Bell,
  Globe,
  Palette,
  Shield,
  Trash2,
  User,
} from "lucide-react";

import type {
  AccentColorId,
  LanguageOptionId,
  NotificationPreference,
  ProfileSettingsForm,
  RepoAccessValue,
  SecurityActionMeta,
  SelectOption,
  SettingsNavSection,
  SyncIntervalValue,
  ThemeOptionId,
} from "@/widgets/dashboard/model/settings/settings.types";

export const settingsSections: SettingsNavSection[] = [
  {
    id: "profile",
    label: "Profile",
    description: "Manage your account details and public presence.",
    icon: User,
  },
  {
    id: "github",
    label: "GitHub",
    description: "Control repository access, sync cadence, and connection health.",
    icon: Globe,
  },
  {
    id: "notifications",
    label: "Notifications",
    description: "Choose which activities should trigger alerts and summaries.",
    icon: Bell,
  },
  {
    id: "security",
    label: "Security",
    description: "Manage authentication, active sessions, and API access.",
    icon: Shield,
  },
  {
    id: "appearance",
    label: "Appearance",
    description: "Adjust theme, accent color, language, and interface density.",
    icon: Palette,
  },
  {
    id: "danger-zone",
    label: "Danger zone",
    description: "Sensitive account actions like export and permanent deletion.",
    icon: AlertTriangle,
  },
];

export const sidebarFooterAction = {
  label: "Delete account",
  icon: Trash2,
};

export const defaultProfileSettings: ProfileSettingsForm = {
  firstName: "Rafiq",
  lastName: "Ahsan",
  email: "rafiq@devpulse.app",
  bio: "Frontend engineer building scalable products. Open source contributor & coffee-driven debugger.",
  location: "Dhaka, BD",
  website: "devpulse.app/rafiq",
};

export const profileConstraints = {
  bioMaxLength: 160,
  avatarHint: "JPG, PNG or WebP - max 2MB",
};

export const githubConnection = {
  username: "rafiq-ahsan",
  profileUrl: "github.com/rafiq-ahsan",
};

export const repoAccessOptions: SelectOption<RepoAccessValue>[] = [
  { value: "all", label: "All repos" },
  { value: "selected", label: "Selected repos" },
  { value: "public", label: "Public only" },
];

export const syncIntervalOptions: SelectOption<SyncIntervalValue>[] = [
  { value: "1m", label: "Every 1 min" },
  { value: "5m", label: "Every 5 min" },
  { value: "15m", label: "Every 15 min" },
  { value: "1h", label: "Every hour" },
];

export const notificationPreferences: NotificationPreference[] = [
  { id: "pr-merged", label: "PR merged", description: "When one of your PRs is merged", enabledByDefault: true },
  { id: "review-requested", label: "Review requested", description: "When someone requests your review", enabledByDefault: true },
  { id: "review-completed", label: "Review completed", description: "When a review is left on your PR", enabledByDefault: true },
  { id: "goal-completed", label: "Goal completed", description: "When you hit a tracking goal", enabledByDefault: true },
  { id: "weekly-digest", label: "Weekly digest", description: "Summary email every Monday", enabledByDefault: false },
  { id: "team-mention", label: "Team mention", description: "When someone @-mentions you", enabledByDefault: false },
];

export const securityMetadata: Record<"sessions" | "tokens", SecurityActionMeta> = {
  sessions: {
    label: "Active sessions",
    description: "Devices currently signed in",
    actionLabel: "View all",
  },
  tokens: {
    label: "API tokens",
    description: "For CLI and integrations",
    actionLabel: "Manage tokens",
  },
};

export const themeOptions: SelectOption<ThemeOptionId>[] = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
  { value: "system", label: "System" },
];

export const accentColorOptions: Array<{ value: AccentColorId; swatchClassName: string }> = [
  { value: "violet", swatchClassName: "bg-violet-500" },
  { value: "blue", swatchClassName: "bg-blue-500" },
  { value: "emerald", swatchClassName: "bg-emerald-500" },
  { value: "amber", swatchClassName: "bg-amber-500" },
  { value: "rose", swatchClassName: "bg-rose-500" },
];

export const languageOptions: SelectOption<LanguageOptionId>[] = [
  { value: "en", label: "English (US)" },
  { value: "en-gb", label: "English (GB)" },
  { value: "de", label: "Deutsch" },
  { value: "fr", label: "Francais" },
];

export const appearanceStorageKey = "devpulse-settings-appearance";

