"use client";

import { useMemo } from "react";

import type {
  AchievementItemModel,
  BadgeVariant,
} from "@/widgets/dashboard/model/goals/goals-dashboard.types";
import { achievementRecords } from "@/pages/dashboard/goals/data/goals-dashboard.data";

const badgeMap: Record<string, BadgeVariant> = {
  violet: "info",
  amber: "warning",
  emerald: "success",
};

export function useAchievements() {
  const items = useMemo<AchievementItemModel[]>(
    () =>
      achievementRecords.map((achievement) => ({
        id: achievement.label,
        label: achievement.label,
        dateLabel: achievement.dateLabel,
        badgeVariant: badgeMap[achievement.tone] ?? "neutral",
      })),
    [],
  );

  return { items };
}
