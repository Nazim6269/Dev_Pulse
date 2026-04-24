"use client";

import { useMemo } from "react";

import { profileData } from "@/pages/dashboard/profile/data/profile.data";
import { getProfileIcon } from "../../ui/profile/shared/profileIconRegistry";
import type {
  ActivityType,
  ProfileTone,
  RecentActivityModel,
} from "./profile.types";

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
      profileData.recentActivity.map((activity: any) => ({
        ...activity,
        icon: getProfileIcon(activityIconMap[activity.type as ActivityType]),
        tone: activityToneMap[activity.type as ActivityType],
      })),
    [],
  );

  return { items };
}
