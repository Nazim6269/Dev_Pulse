"use client";

import { useMemo } from "react";
import { profileData } from "@/pages/dashboard/profile/data/profile.data";
import { getProfileIcon } from "../../ui/profile/shared/profileIconRegistry";
import type {
  ActivityLegendItemModel,
  ContributionActivityModel,
  HeatmapRowModel,
  StreakStatModel,
} from "./profile.types";

export function useContributionActivity() {
  const rows = useMemo<HeatmapRowModel[]>(
    () =>
      Array.from({ length: profileData.contributionActivity.rows }, (_, rowIndex) => ({
        id: `row-${rowIndex}`,
        cells: profileData.contributionActivity.values.map((value: any, columnIndex: any) => ({
          id: `cell-${rowIndex}-${columnIndex}`,
          intensity: ((value + rowIndex) % 6) as 0 | 1 | 2 | 3 | 4 | 5,
        })),
      })),
    [],
  );

  const legend = useMemo<ActivityLegendItemModel[]>(
    () =>
      [0, 1, 2, 3, 4, 5].map((intensity) => ({
        id: `legend-${intensity}`,
        intensity: intensity as 0 | 1 | 2 | 3 | 4 | 5,
      })),
    [],
  );

  const streakStats = useMemo<StreakStatModel[]>(
    () => [
      {
        id: "current-streak",
        label: "Current streak",
        value: profileData.contributionActivity.currentStreak,
        icon: getProfileIcon("zap"),
        tone: "amber",
      },
      {
        id: "best-streak",
        label: "Personal best",
        value: profileData.contributionActivity.bestStreak,
        icon: getProfileIcon("trending-up"),
        tone: "emerald",
      },
    ],
    [],
  );

  const activity = useMemo<ContributionActivityModel>(
    () => ({
      heading: "Contribution activity",
      summary: `${profileData.contributionActivity.totalContributions} contributions · ${profileData.contributionActivity.weeksLabel}`,
      rows,
      legend,
      streakStats,
    }),
    [legend, rows, streakStats],
  );

  return { activity };
}
