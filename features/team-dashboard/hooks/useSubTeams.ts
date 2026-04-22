"use client";

import { useMemo } from "react";

import { subTeams } from "@/features/team-dashboard/data/team-dashboard.data";
import type { SubTeamCardModel } from "@/features/team-dashboard/types/team.types";

export function useSubTeams() {
  const items = useMemo<SubTeamCardModel[]>(
    () =>
      subTeams.map((team) => ({
        id: team.name,
        name: team.name,
        gradient: team.gradient,
        memberChips: team.members.map((member) => member.split(" ")[0]),
        commits: team.commits,
        prs: team.prs,
        reviews: team.reviews,
        healthLabel: `${team.health}%`,
        healthValue: team.health,
      })),
    [],
  );

  return { items };
}
