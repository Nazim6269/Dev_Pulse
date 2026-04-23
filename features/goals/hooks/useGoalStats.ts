"use client";

import { useMemo } from "react";

import { monthlyProgressSummary } from "@/features/goals/data/goals-dashboard.data";
import type {
  GoalStatsModel,
  ProgressRingModel,
  ProgressStatItem,
} from "@/features/goals/types/goals-dashboard.types";

export function useGoalStats() {
  const stats = useMemo<GoalStatsModel>(
    () => ({
      doneCount: monthlyProgressSummary.doneCount,
      activeCount: monthlyProgressSummary.activeCount,
      pendingCount: monthlyProgressSummary.pendingCount,
      atRiskCount: 1,
      overallCompletionRate: `${monthlyProgressSummary.overallPercent}%`,
    }),
    [],
  );

  const progressRing = useMemo<ProgressRingModel>(() => {
    const radius = 68;
    const circumference = Math.round(2 * Math.PI * radius);
    const completedOffset =
      circumference - (monthlyProgressSummary.completedPercent / 100) * circumference;
    const activeOffset =
      Math.round(2 * Math.PI * 56) -
      (monthlyProgressSummary.activePercent / 100) * Math.round(2 * Math.PI * 56);

    return {
      radius,
      circumference,
      completedOffset,
      activeOffset,
      overallLabel: `${monthlyProgressSummary.overallPercent}%`,
    };
  }, []);

  const progressStats = useMemo<ProgressStatItem[]>(
    () => [
      { id: "done", label: "Done", value: "6", tone: "emerald" },
      { id: "active", label: "Active", value: "2", tone: "amber" },
      { id: "pending", label: "Pending", value: "2", tone: "neutral" },
    ],
    [],
  );

  return {
    monthLabel: monthlyProgressSummary.monthLabel,
    stats,
    progressRing,
    progressStats,
  };
}
