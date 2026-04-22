import type { LucideIcon } from "lucide-react";

export type GoalState = "done" | "active" | "at-risk" | "pending";
export type DashboardTone =
  | "violet"
  | "emerald"
  | "amber"
  | "rose"
  | "blue"
  | "neutral";
export type BadgeVariant = "success" | "warning" | "danger" | "info" | "neutral";
export type GoalFilter = "this-month" | "this-quarter" | "all-time";
export type MilestoneUrgency = "low" | "medium" | "high";

export interface GoalRecord {
  label: string;
  category: string;
  current: number;
  target: number;
  percent: number;
  state: GoalState;
  daysLeft: number;
}

export interface TrendPoint {
  label: string;
  value: number;
}

export interface CategoryRecord {
  name: string;
  completed: number;
  total: number;
  tone: DashboardTone;
}

export interface MilestoneRecord {
  label: string;
  dateLabel: string;
  daysLeft: number;
}

export interface AchievementRecord {
  label: string;
  dateLabel: string;
  tone: DashboardTone;
}

export interface PersonalRecord {
  label: string;
  value: string;
  sublabel: string;
  icon: LucideIcon;
  tone: DashboardTone;
}

export interface MonthlyProgressSummary {
  completedPercent: number;
  activePercent: number;
  overallPercent: number;
  doneCount: number;
  activeCount: number;
  pendingCount: number;
  monthLabel: string;
}

export interface GoalItemModel {
  id: string;
  label: string;
  category: string;
  progressLabel: string;
  progressWidth: string;
  state: GoalState;
  tone: DashboardTone;
  daysLeftLabel?: string;
}

export interface GoalStatsModel {
  doneCount: number;
  activeCount: number;
  pendingCount: number;
  atRiskCount: number;
  overallCompletionRate: string;
}

export interface ProgressRingModel {
  radius: number;
  circumference: number;
  completedOffset: number;
  activeOffset: number;
  overallLabel: string;
}

export interface ProgressStatItem {
  id: string;
  label: string;
  value: string;
  tone: DashboardTone;
}

export interface TrendBarModel {
  id: string;
  label: string;
  value: number;
  height: string;
  isEmpty: boolean;
}

export interface TrendSummaryItem {
  id: string;
  label: string;
  value: string;
  tone: DashboardTone;
}

export interface CategoryItemModel {
  id: string;
  label: string;
  completedLabel: string;
  tone: DashboardTone;
  blocks: CategoryBlockModel[];
}

export interface CategoryBlockModel {
  id: string;
  filled: boolean;
  tone: DashboardTone;
}

export interface MilestoneItemModel {
  id: string;
  label: string;
  dateLabel: string;
  daysLeftLabel: string;
  urgency: MilestoneUrgency;
}

export interface AchievementItemModel {
  id: string;
  label: string;
  dateLabel: string;
  badgeVariant: BadgeVariant;
}

export interface RecordCardModel {
  id: string;
  label: string;
  value: string;
  sublabel: string;
  icon: LucideIcon;
  tone: DashboardTone;
}

export interface ProgressSegment {
  id: string;
  width: string;
  tone: DashboardTone;
}
