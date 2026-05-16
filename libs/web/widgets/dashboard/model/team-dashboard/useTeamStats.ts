"use client";

import { useMemo } from "react";
import { Activity, Clock3, ThumbsUp, Users } from "lucide-react";

import type { TeamStatCardModel } from "./team.types";
import { subTeams, teamDashboardSummary, teamMembers } from "@/pages/dashboard/team-dashboard/data/team-dashboard.data";

export function useTeamStats() {
  const stats = useMemo<TeamStatCardModel[]>(
    () => [
      {
        id: "team-members",
        icon: Users,
        label: "Team members",
        value: String(teamMembers.length),
        sublabel: `across ${subTeams.length} sub-teams`,
        badge: teamDashboardSummary.teamGrowth,
        tone: "violet",
      },
      {
        id: "team-velocity",
        icon: Activity,
        label: "Team velocity",
        value: teamDashboardSummary.velocityScore,
        sublabel: "vs 30-day baseline",
        badge: teamDashboardSummary.velocityBadge,
        tone: "emerald",
      },
      {
        id: "avg-review-time",
        icon: Clock3,
        label: "Avg review time",
        value: teamDashboardSummary.averageReviewTime,
        sublabel: "team average",
        badge: teamDashboardSummary.averageReviewDelta,
        tone: "amber",
      },
      {
        id: "reviews-given",
        icon: ThumbsUp,
        label: "Reviews given",
        value: String(teamMembers.reduce((sum, member) => sum + member.reviews, 0)),
        sublabel: "team total this month",
        badge: teamDashboardSummary.reviewLgtmRate,
        tone: "blue",
      },
    ],
    [],
  );

  return { stats };
}
