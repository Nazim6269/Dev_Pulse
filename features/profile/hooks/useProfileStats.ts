"use client";

import { useMemo } from "react";

import { profileData } from "@/features/profile/data/profile.data";
import type { ProfileStatModel } from "@/features/profile/types/profile.types";

export function useProfileStats() {
  const stats = useMemo<ProfileStatModel[]>(
    () =>
      profileData.stats.map((stat) => ({
        id: stat.id,
        label: stat.label,
        value: stat.value.toLocaleString(),
      })),
    [],
  );

  return { stats };
}
