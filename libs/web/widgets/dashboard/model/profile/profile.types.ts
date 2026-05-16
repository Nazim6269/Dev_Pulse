import type { ComponentType } from "react";

export type ProfileTone = "violet" | "emerald" | "amber" | "rose" | "blue" | "neutral";
export type ProfileBadgeVariant = "role" | "success" | "highlight" | "neutral";
export type ActivityIntensity = 0 | 1 | 2 | 3 | 4 | 5;
export type ActivityType = "merge" | "review" | "commit" | "star" | "pr";
export type SocialPlatform = "github" | "twitter";
export type ProfileIconKey =
  | "calendar"
  | "clock"
  | "edit"
  | "external"
  | "eye"
  | "fork"
  | "git-commit"
  | "git-merge"
  | "globe"
  | "link"
  | "map-pin"
  | "pull-request"
  | "share"
  | "star"
  | "trending-up"
  | "zap";

export type ProfileIconComponent = ComponentType<{ className?: string; size?: number }>;

export interface ProfileHeaderActionData {
  id: "share" | "view-public" | "edit";
  label: string;
  iconKey: ProfileIconKey;
  href?: string;
}

export interface ProfileBadgeData {
  id: string;
  label: string;
  variant: ProfileBadgeVariant;
}

export interface ProfileMetaData {
  id: string;
  label: string;
  value: string;
  iconKey: ProfileIconKey;
  tone?: ProfileTone;
}

export interface SocialLinkData {
  id: SocialPlatform;
  label: string;
  href: string;
  iconKey: ProfileIconKey;
}

export interface ProfileIdentityData {
  name: string;
  email: string;
  initials: string;
  status: "online" | "offline";
  bio: string;
  location: string;
  websiteLabel: string;
  websiteHref: string;
  joinedLabel: string;
  badges: ProfileBadgeData[];
  socials: SocialLinkData[];
}

export interface ProfileStatData {
  id: string;
  label: string;
  value: number;
}

export interface ProfileLanguageData {
  id: string;
  label: string;
  color: string;
}

export interface ProfileKPIData {
  id: string;
  label: string;
  value: string;
  iconKey: ProfileIconKey;
  tone: ProfileTone;
}

export interface ContributionActivityData {
  totalContributions: number;
  weeksLabel: string;
  values: ActivityIntensity[];
  rows: number;
  currentStreak: string;
  bestStreak: string;
}

export interface AchievementData {
  id: string;
  label: string;
  description: string;
  iconKey: ProfileIconKey;
  tone: ProfileTone;
}

export interface RepositoryData {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updated: string;
}

export interface RecentActivityData {
  id: string;
  type: ActivityType;
  text: string;
  repository: string;
  timeAgo: string;
}

export interface ProfileData {
  title: string;
  headerActions: ProfileHeaderActionData[];
  identity: ProfileIdentityData;
  stats: ProfileStatData[];
  languages: ProfileLanguageData[];
  kpis: ProfileKPIData[];
  contributionActivity: ContributionActivityData;
  achievements: AchievementData[];
  repositories: RepositoryData[];
  recentActivity: RecentActivityData[];
}

export interface ProfileHeaderActionModel extends ProfileHeaderActionData {
  icon: ProfileIconComponent;
}

export interface ProfileMetaItemModel extends Omit<ProfileMetaData, "iconKey"> {
  icon: ProfileIconComponent;
}

export interface SocialLinkModel extends Omit<SocialLinkData, "iconKey"> {
  icon: ProfileIconComponent;
}

export interface ProfileIdentityModel extends Omit<ProfileIdentityData, "socials"> {
  meta: ProfileMetaItemModel[];
  socials: SocialLinkModel[];
}

export interface ProfileStatModel {
  id: string;
  label: string;
  value: string;
}

export type ProfileLanguageModel = ProfileLanguageData;

export interface ProfileKPIModel extends Omit<ProfileKPIData, "iconKey"> {
  icon: ProfileIconComponent;
}

export interface HeatmapCellModel {
  id: string;
  intensity: ActivityIntensity;
}

export interface HeatmapRowModel {
  id: string;
  cells: HeatmapCellModel[];
}

export interface ActivityLegendItemModel {
  id: string;
  intensity: ActivityIntensity;
}

export interface StreakStatModel {
  id: string;
  label: string;
  value: string;
  icon: ProfileIconComponent;
  tone: Extract<ProfileTone, "amber" | "emerald">;
}

export interface ContributionActivityModel {
  heading: string;
  summary: string;
  rows: HeatmapRowModel[];
  legend: ActivityLegendItemModel[];
  streakStats: StreakStatModel[];
}

export interface AchievementModel extends Omit<AchievementData, "iconKey"> {
  icon: ProfileIconComponent;
}

export interface RepositoryModel extends RepositoryData {
  languageColor: string;
}

export interface RecentActivityModel extends Omit<RecentActivityData, "type"> {
  type: ActivityType;
  icon: ProfileIconComponent;
  tone: ProfileTone;
}
