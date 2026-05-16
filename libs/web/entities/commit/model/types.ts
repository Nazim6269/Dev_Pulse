import type { LucideIcon } from "lucide-react";

export type CommitType =
  | "feat"
  | "fix"
  | "chore"
  | "refactor"
  | "docs"
  | "test";

export type CardVariant = "default" | "elevated" | "subtle";
export type BadgeVariant = "success" | "warning" | "info" | "neutral";
export type ProgressTone =
  | "violet"
  | "rose"
  | "amber"
  | "blue"
  | "emerald"
  | "neutral";

export interface CommitDashboardSummary {
  totalCommits: number;
  averagePerDay: number;
  bestSingleDay: number;
  bestSingleDayLabel: string;
  currentStreak: string;
  personalBestStreak: string;
  monthOverMonthChange: string;
  averageDailyChange: string;
  activeRepos: number;
  activeBranches: number;
}

export interface RawCommitEntry {
  hash: string;
  message: string;
  repository: string;
  timeAgo: string;
  type: CommitType;
}

export interface RawCommitTypeBreakdown {
  type: CommitType;
  count: number;
  percentage: number;
}

export interface RawTimeOfDaySlot {
  label: string;
  values: number[];
}

export interface RawRepoContribution {
  name: string;
  commits: number;
  feat: number;
  fix: number;
  chore: number;
  other: number;
  percentage: number;
}

export interface StatCardModel {
  id: string;
  label: string;
  value: string;
  sublabel: string;
  badge: string;
  icon: LucideIcon;
  tone: ProgressTone;
}

export interface DailyCommitBarModel {
  id: string;
  value: number;
  height: string;
  isEmpty: boolean;
  tickLabel?: string;
}

export interface CommitDistributionItemModel {
  id: string;
  label: string;
  count: number;
  tone: ProgressTone;
  segments: ProgressSegment[];
}

export interface RecentCommitItemModel {
  hash: string;
  message: string;
  repository: string;
  timeAgo: string;
  type: CommitType;
  badgeVariant: BadgeVariant;
}

export interface HeatmapCellModel {
  id: string;
  opacity: number;
  tone: ProgressTone;
}

export interface TimeOfDayRowModel {
  id: string;
  label: string;
  total: number;
  cells: HeatmapCellModel[];
}

export interface ProgressSegment {
  id: string;
  width: string;
  tone: ProgressTone;
}

export interface RepoCommitItemModel {
  id: string;
  name: string;
  commitCount: number;
  shareLabel: string;
  segments: ProgressSegment[];
}
