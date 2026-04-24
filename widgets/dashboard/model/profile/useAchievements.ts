"use client";

import { useMemo } from "react";

import type { AchievementModel } from "./profile.types";
import { profileData } from "@/pages/dashboard/profile/data/profile.data";
import { getProfileIcon } from "../../ui/profile/shared/profileIconRegistry";

export function useAchievements() {
  const items = useMemo<AchievementModel[]>(
    () =>
      profileData.achievements.map((achievement: { iconKey: any }) => ({
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
