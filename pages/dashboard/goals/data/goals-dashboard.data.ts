import { Clock3, Flame, GitPullRequest, TrendingUp } from "lucide-react";

import {
  GoalRecord,
  MonthlyProgressSummary,
  TrendPoint,
  CategoryRecord,
  MilestoneRecord,
  AchievementRecord,
  PersonalRecord,
} from "@/widgets/dashboard/model/goals/goals-dashboard.types";

export const goalRecords: GoalRecord[] = [
  {
    label: "Merge 20 PRs this month",
    category: "Shipping",
    current: 14,
    target: 20,
    percent: 70,
    state: "active",
    daysLeft: 12,
  },
  {
    label: "Maintain 80%+ review rate",
    category: "Quality",
    current: 83,
    target: 80,
    percent: 100,
    state: "done",
    daysLeft: 0,
  },
  {
    label: "Reduce cycle time below 20h",
    category: "Speed",
    current: 18,
    target: 20,
    percent: 100,
    state: "done",
    daysLeft: 0,
  },
  {
    label: "Review 30+ PRs this month",
    category: "Reviews",
    current: 22,
    target: 30,
    percent: 73,
    state: "active",
    daysLeft: 12,
  },
  {
    label: "Zero missed review SLAs",
    category: "Quality",
    current: 1,
    target: 0,
    percent: 0,
    state: "at-risk",
    daysLeft: 12,
  },
  {
    label: "Hit 300+ commits",
    category: "Volume",
    current: 318,
    target: 300,
    percent: 100,
    state: "done",
    daysLeft: 0,
  },
  {
    label: "Open-source 1 library",
    category: "OSS",
    current: 0,
    target: 1,
    percent: 0,
    state: "pending",
    daysLeft: 12,
  },
  {
    label: "Write 4 technical blog posts",
    category: "Writing",
    current: 0,
    target: 4,
    percent: 0,
    state: "pending",
    daysLeft: 12,
  },
];

export const monthlyProgressSummary: MonthlyProgressSummary = {
  completedPercent: 75,
  activePercent: 25,
  overallPercent: 75,
  doneCount: 6,
  activeCount: 2,
  pendingCount: 2,
  monthLabel: "April 2025",
};

export const trendPoints: TrendPoint[] = [
  { label: "W1", value: 1 },
  { label: "W2", value: 0 },
  { label: "W3", value: 2 },
  { label: "W4", value: 1 },
  { label: "W5", value: 0 },
  { label: "W6", value: 1 },
  { label: "W7", value: 1 },
  { label: "W8", value: 2 },
];

export const categoryRecords: CategoryRecord[] = [
  { name: "Code quality", completed: 3, total: 3, tone: "violet" },
  { name: "Shipping speed", completed: 2, total: 3, tone: "emerald" },
  { name: "Team reviews", completed: 1, total: 2, tone: "amber" },
  { name: "Open source", completed: 0, total: 1, tone: "neutral" },
  { name: "Content / docs", completed: 0, total: 1, tone: "blue" },
];

export const milestoneRecords: MilestoneRecord[] = [
  { label: "Q2 OSS release target", dateLabel: "Apr 30", daysLeft: 24 },
  { label: "100 PR milestone", dateLabel: "Apr 18", daysLeft: 12 },
  { label: "31-day commit streak", dateLabel: "Apr 14", daysLeft: 8 },
  { label: "500 GitHub stars", dateLabel: "Apr 10", daysLeft: 4 },
];

export const achievementRecords: AchievementRecord[] = [
  {
    label: "Merged 15 PRs in a single week",
    dateLabel: "Mar 28",
    tone: "violet",
  },
  {
    label: "Maintained 31-day commit streak",
    dateLabel: "Mar 20",
    tone: "amber",
  },
  { label: "First 500-star repository", dateLabel: "Mar 12", tone: "amber" },
  { label: "Zero review SLA violations", dateLabel: "Mar 5", tone: "emerald" },
  {
    label: "Team velocity +20% month-over-month",
    dateLabel: "Feb 28",
    tone: "violet",
  },
];

export const personalRecords: PersonalRecord[] = [
  {
    label: "Longest streak",
    value: "31 days",
    sublabel: "Feb 2025",
    icon: Flame,
    tone: "amber",
  },
  {
    label: "Best single week",
    value: "72 commits",
    sublabel: "Week 6",
    icon: TrendingUp,
    tone: "violet",
  },
  {
    label: "Most PRs in a week",
    value: "13 PRs",
    sublabel: "Mar week 2",
    icon: GitPullRequest,
    tone: "emerald",
  },
  {
    label: "Fastest cycle time",
    value: "1.2h",
    sublabel: "Mar 14",
    icon: Clock3,
    tone: "blue",
  },
];

export default function DefaultExport() { return null; }

