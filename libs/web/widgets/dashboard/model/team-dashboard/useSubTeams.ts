"use client";

import { useMemo } from "react";

import type { SubTeamCardModel } from "./team.types";
import { subTeams } from "@/pages/dashboard/team-dashboard/data/team-dashboard.data";

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
