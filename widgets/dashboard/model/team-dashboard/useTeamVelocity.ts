"use client";

import { useMemo } from "react";

import type { VelocityBarModel, VelocitySummaryItem } from "./team.types";
import { teamDashboardSummary, teamVelocityData } from "@/pages/dashboard/team-dashboard/data/team-dashboard.data";

export function useTeamVelocity() {
  const bars = useMemo<VelocityBarModel[]>(() => {
    const maxValue = teamVelocityData.reduce(
      (highest, point) => Math.max(highest, point.value),
      0,
    );

    return teamVelocityData.map((point) => ({
      id: point.label,
      label: point.label,
      value: point.value,
      height: `${Math.round((point.value / maxValue) * 100)}%`,
    }));
  }, []);

  const averagePrs = useMemo(() => {
    const total = teamVelocityData.reduce((sum, point) => sum + point.value, 0);
    return (total / teamVelocityData.length).toFixed(1);
  }, []);

  const summary = useMemo<VelocitySummaryItem[]>(
    () => [
      {
        id: "prs-average",
        label: "PRs/week avg",
        value: averagePrs,
        tone: "violet",
      },
      {
        id: "merge-rate",
        label: "Merge rate",
        value: teamDashboardSummary.velocityScore,
        tone: "emerald",
      },
      {
        id: "cycle-time",
        label: "Avg cycle",
        value: teamDashboardSummary.averageReviewTime,
        tone: "amber",
      },
    ],
    [averagePrs],
  );

  return { bars, summary };
}
