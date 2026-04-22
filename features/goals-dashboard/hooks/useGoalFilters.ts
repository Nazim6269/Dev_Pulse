"use client";

import { startTransition, useCallback, useDeferredValue, useMemo, useState } from "react";

import { useGoals } from "@/features/goals-dashboard/hooks/useGoals";
import type {
  GoalFilter,
  GoalItemModel,
} from "@/features/goals-dashboard/types/goals-dashboard.types";

export function useGoalFilters() {
  const [selectedFilter, setSelectedFilter] = useState<GoalFilter>("this-month");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const { items } = useGoals();

  const filteredGoals = useMemo<GoalItemModel[]>(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();
    if (!normalizedQuery) {
      return items;
    }

    return items.filter((goal) =>
      [goal.label, goal.category].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [deferredQuery, items]);

  const updateFilter = useCallback((filter: GoalFilter) => {
    startTransition(() => {
      setSelectedFilter(filter);
    });
  }, []);

  return {
    selectedFilter,
    query,
    setQuery,
    setSelectedFilter: updateFilter,
    filteredGoals,
  };
}
