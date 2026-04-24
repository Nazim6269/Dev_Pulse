"use client";

import { startTransition, useCallback, useMemo, useState } from "react";

import type {
  TeamMemberCardModel,
  TeamSortKey,
} from "@/widgets/dashboard/model/team-dashboard/team.types";
import { teamMembers } from "@/pages/dashboard/team-dashboard/data/team-dashboard.data";

const sortLabelMap: Record<TeamSortKey, string> = {
  commits: "Sort by commits",
  reviews: "Sort by reviews",
};

export function useTeamMembers() {
  const [sortKey, setSortKey] = useState<TeamSortKey>("commits");

  const items = useMemo<TeamMemberCardModel[]>(
    () =>
      [...teamMembers].sort((left, right) => {
        const primary = right[sortKey] - left[sortKey];
        if (primary !== 0) {
          return primary;
        }
        return right.commits - left.commits;
      }),
    [sortKey],
  );

  const setSort = useCallback((nextSort: TeamSortKey) => {
    startTransition(() => {
      setSortKey(nextSort);
    });
  }, []);

  return {
    items,
    sortKey,
    sortLabelMap,
    setSort,
  };
}
