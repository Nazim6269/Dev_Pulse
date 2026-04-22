"use client";

import { useMemo } from "react";

import { profileData } from "@/features/profile/data/profile.data";
import { getProfileIcon } from "@/features/profile/components/shared/profileIconRegistry";
import type { ProfileKPIModel } from "@/features/profile/types/profile.types";

export function useProfileKPIs() {
  const items = useMemo<ProfileKPIModel[]>(
    () =>
      profileData.kpis.map((item) => ({
        ...item,
        icon: getProfileIcon(item.iconKey),
      })),
    [],
  );

  return { items };
}
