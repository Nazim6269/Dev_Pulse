import type {
  CommitDashboardSummary,
  RawCommitEntry,
  RawCommitTypeBreakdown,
  RawRepoContribution,
  RawTimeOfDaySlot,
} from "@/entities/commit/model/types";

export const commitDashboardSummary: CommitDashboardSummary = {
  totalCommits: 318,
  averagePerDay: 10.6,
  bestSingleDay: 22,
  bestSingleDayLabel: "Mar 14",
  currentStreak: "24d",
  personalBestStreak: "31d",
  monthOverMonthChange: "+8%",
  averageDailyChange: "+3%",
  activeRepos: 4,
  activeBranches: 3,
};

export const dailyCommitVolumes: number[] = [
  8, 12, 6, 15, 11, 0, 0, 9, 14, 18, 7, 13, 10, 22, 8, 0, 0, 11, 16, 12, 9,
  14, 7, 19, 11, 13, 8, 15, 10, 12,
];

export const commitTypeBreakdown: RawCommitTypeBreakdown[] = [
  { type: "feat", count: 89, percentage: 28 },
  { type: "fix", count: 71, percentage: 22 },
  { type: "chore", count: 64, percentage: 20 },
  { type: "refactor", count: 51, percentage: 16 },
  { type: "docs", count: 28, percentage: 9 },
  { type: "test", count: 15, percentage: 5 },
];

export const recentCommits: RawCommitEntry[] = [
  {
    hash: "a3f2c1d",
    message: "feat: add PR cycle time calculation to analytics service",
    repository: "devpulse/backend",
    timeAgo: "2h ago",
    type: "feat",
  },
  {
    hash: "b7e8a2f",
    message: "fix: resolve timezone offset in heatmap data aggregation",
    repository: "devpulse/web",
    timeAgo: "4h ago",
    type: "fix",
  },
  {
    hash: "c1d4e9b",
    message: "chore: update dependency versions across workspace",
    repository: "devpulse/backend",
    timeAgo: "6h ago",
    type: "chore",
  },
  {
    hash: "d5f3c8a",
    message: "refactor: extract GitHub client into isolated service layer",
    repository: "devpulse/api",
    timeAgo: "1d ago",
    type: "refactor",
  },
  {
    hash: "e2a7b4f",
    message: "feat: implement Redis caching for GitHub API responses",
    repository: "devpulse/api",
    timeAgo: "1d ago",
    type: "feat",
  },
  {
    hash: "f9c1d6e",
    message: "docs: document OAuth flow and token refresh strategy",
    repository: "devpulse/docs",
    timeAgo: "2d ago",
    type: "docs",
  },
];

export const timeOfDaySlots: RawTimeOfDaySlot[] = [
  { label: "12am-4am", values: [1, 0, 0, 1, 2] },
  { label: "4am-8am", values: [2, 3, 2, 4, 3] },
  { label: "8am-12pm", values: [8, 12, 11, 14, 10] },
  { label: "12pm-4pm", values: [7, 9, 8, 11, 8] },
  { label: "4pm-8pm", values: [5, 6, 4, 7, 5] },
  { label: "8pm-12am", values: [9, 11, 10, 13, 9] },
];

export const repoContributions: RawRepoContribution[] = [
  {
    name: "devpulse/backend",
    commits: 134,
    feat: 38,
    fix: 28,
    chore: 44,
    other: 24,
    percentage: 42,
  },
  {
    name: "devpulse/web",
    commits: 89,
    feat: 29,
    fix: 20,
    chore: 25,
    other: 15,
    percentage: 28,
  },
  {
    name: "devpulse/api",
    commits: 61,
    feat: 21,
    fix: 15,
    chore: 16,
    other: 9,
    percentage: 19,
  },
  {
    name: "devpulse/docs",
    commits: 34,
    feat: 5,
    fix: 4,
    chore: 10,
    other: 15,
    percentage: 11,
  },
];
