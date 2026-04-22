"use client";

import { useMemo } from "react";

import { profileData } from "@/features/profile/data/profile.data";
import type { ProfileLanguageModel } from "@/features/profile/types/profile.types";

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
