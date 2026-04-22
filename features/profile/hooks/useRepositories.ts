"use client";

import { useMemo } from "react";

import { profileData } from "@/features/profile/data/profile.data";
import type { RepositoryModel } from "@/features/profile/types/profile.types";

export function useRepositories() {
  const languageColorByName = useMemo(
    () =>
      new Map(profileData.languages.map((language) => [language.label, language.color])),
    [],
  );

  const items = useMemo<RepositoryModel[]>(
    () =>
      profileData.repositories.map((repository) => ({
        ...repository,
        languageColor: languageColorByName.get(repository.language) ?? "#888888",
      })),
    [languageColorByName],
  );

  return {
    items,
    totalLabel: `View all ${profileData.stats.find((stat) => stat.id === "repos")?.value ?? items.length} ->`,
  };
}
