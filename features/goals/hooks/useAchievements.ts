"use client";

import { useMemo } from "react";

import { achievementRecords } from "@/features/goals/data/goals-dashboard.data";
import type {
  AchievementItemModel,
  BadgeVariant,
} from "@/features/goals/types/goals-dashboard.types";

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
