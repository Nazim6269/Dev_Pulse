"use client";

import { useMemo } from "react";

import { profileData } from "@/pages/dashboard/profile/data/profile.data";
import type { ProfileStatModel } from "./profile.types";

export function useProfileStats() {
  const stats = useMemo<ProfileStatModel[]>(
    () =>
      profileData.stats.map((stat: { id: any; label: any; value: { toLocaleString: () => any; }; }) => ({
        id: stat.id,
        label: stat.label,
        value: stat.value.toLocaleString(),
      })),
    [],
  );

  return { stats };
}
