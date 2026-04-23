"use client";

import { useMemo } from "react";

import { trendPoints } from "@/features/goals/data/goals-dashboard.data";
import type {
  TrendBarModel,
  TrendSummaryItem,
} from "@/features/goals/types/goals-dashboard.types";

export function useTrendData() {
  const bars = useMemo<TrendBarModel[]>(() => {
    const maxValue = trendPoints.reduce(
      (highest, point) => Math.max(highest, point.value),
      1,
    );

    return trendPoints.map((point) => ({
      id: point.label,
      label: point.label,
      value: point.value,
      height: point.value === 0 ? "8%" : `${Math.round((point.value / maxValue) * 100)}%`,
      isEmpty: point.value === 0,
    }));
  }, []);

  const summary = useMemo<TrendSummaryItem[]>(
    () => [
      { id: "completion-rate", label: "Completion rate", value: "75%", tone: "violet" },
      { id: "on-track", label: "On track", value: "8", tone: "emerald" },
      { id: "at-risk", label: "At risk", value: "1", tone: "amber" },
      { id: "overdue", label: "Overdue", value: "1", tone: "rose" },
    ],
    [],
  );

  return {
    bars,
    completedThisMonthLabel: "6 this month",
    summary,
  };
}
