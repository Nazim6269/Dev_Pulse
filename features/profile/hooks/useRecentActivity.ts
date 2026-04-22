"use client";

import { useMemo } from "react";

import { profileData } from "@/features/profile/data/profile.data";
import { getProfileIcon } from "@/features/profile/components/shared/profileIconRegistry";
import type {
  ActivityType,
  ProfileTone,
  RecentActivityModel,
} from "@/features/profile/types/profile.types";

const activityToneMap: Record<ActivityType, ProfileTone> = {
  merge: "violet",
  review: "amber",
  commit: "emerald",
  star: "amber",
  pr: "blue",
};

const activityIconMap: Record<ActivityType, "git-merge" | "eye" | "git-commit" | "star" | "pull-request"> = {
  merge: "git-merge",
  review: "eye",
  commit: "git-commit",
  star: "star",
  pr: "pull-request",
};

export function useRecentActivity() {
  const items = useMemo<RecentActivityModel[]>(
    () =>
      profileData.recentActivity.map((activity) => ({
        ...activity,
        icon: getProfileIcon(activityIconMap[activity.type]),
        tone: activityToneMap[activity.type],
      })),
    [],
  );

  return { items };
}
