"use client";

import { useMemo } from "react";

import { profileData } from "@/features/profile/data/profile.data";
import { getProfileIcon } from "@/features/profile/components/shared/profileIconRegistry";
import type { AchievementModel } from "@/features/profile/types/profile.types";

export function useAchievements() {
  const items = useMemo<AchievementModel[]>(
    () =>
      profileData.achievements.map((achievement) => ({
        ...achievement,
        icon: getProfileIcon(achievement.iconKey),
      })),
    [],
  );

  return {
    items,
    earnedLabel: `${items.length} earned`,
  };
}
