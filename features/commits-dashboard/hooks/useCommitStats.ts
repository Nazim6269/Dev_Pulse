"use client";

import { useMemo } from "react";
import {
  Calendar,
  GitCommitHorizontal,
  Pencil,
  TrendingUp,
} from "lucide-react";

import { commitDashboardSummary } from "@/features/commits-dashboard/data/commit-dashboard.data";
import type { StatCardModel } from "@/features/commits-dashboard/types/commit.types";

export function useCommitStats() {
  const stats = useMemo<StatCardModel[]>(
    () => [
      {
        id: "total-commits",
        label: "Total commits",
        value: String(commitDashboardSummary.totalCommits),
        sublabel: "this month",
        badge: commitDashboardSummary.monthOverMonthChange,
        icon: GitCommitHorizontal,
        tone: "emerald",
      },
      {
        id: "average-per-day",
        label: "Avg per day",
        value: commitDashboardSummary.averagePerDay.toFixed(1),
        sublabel: "on working days",
        badge: commitDashboardSummary.averageDailyChange,
        icon: TrendingUp,
        tone: "violet",
      },
      {
        id: "best-day",
        label: "Best single day",
        value: String(commitDashboardSummary.bestSingleDay),
        sublabel: commitDashboardSummary.bestSingleDayLabel,
        badge: "peak",
        icon: Pencil,
        tone: "amber",
      },
      {
        id: "current-streak",
        label: "Current streak",
        value: commitDashboardSummary.currentStreak,
        sublabel: `personal best: ${commitDashboardSummary.personalBestStreak}`,
        badge: "streak",
        icon: Calendar,
        tone: "blue",
      },
    ],
    [],
  );

  return {
    stats,
    activitySummary: {
      activeRepos: commitDashboardSummary.activeRepos,
      activeBranches: commitDashboardSummary.activeBranches,
    },
  };
}
