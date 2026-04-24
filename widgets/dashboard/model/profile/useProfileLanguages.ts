"use client";

import { useMemo } from "react";

import { profileData } from "@/pages/dashboard/profile/data/profile.data";
import type { ProfileLanguageModel } from "./profile.types";

export function useProfileLanguages() {
  const items = useMemo<ProfileLanguageModel[]>(
    () =>
      [...profileData.languages].sort((left, right) =>
        left.label.localeCompare(right.label),
      ),
    [],
  );

  return { items };
}
