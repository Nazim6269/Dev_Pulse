"use client";

import { useMemo } from "react";

import { profileData } from "@/pages/dashboard/profile/data/profile.data";
import { getProfileIcon } from "@/widgets/dashboard/ui/profile/shared/profileIconRegistry";
import { ProfileKPIModel } from "./profile.types";

export function useProfileKPIs() {
  const items = useMemo<ProfileKPIModel[]>(
    () =>
      profileData.kpis.map((item: { iconKey: any }) => ({
        ...item,
        icon: getProfileIcon(item.iconKey),
      })),
    [],
  );

  return { items };
}
