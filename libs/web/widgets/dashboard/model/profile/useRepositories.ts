"use client";

import { useMemo } from "react";

import { profileData } from "@/pages/dashboard/profile/data/profile.data";
import type { RepositoryModel } from "@/widgets/dashboard/model/profile/profile.types";

export function useRepositories() {
  const languageColorByName = useMemo(
    () =>
      new Map(profileData.languages.map((language: any) => [language.label, language.color])),
    [],
  );

  const items = useMemo<RepositoryModel[]>(
    () =>
      profileData.repositories.map((repository: any) => ({
        ...repository,
        languageColor: languageColorByName.get(repository.language) ?? "#888888",
      })),
    [languageColorByName],
  );

  return {
    items,
    totalLabel: `View all ${profileData.stats.find((stat: any) => stat.id === "repos")?.value ?? items.length} ->`,
  };
}
