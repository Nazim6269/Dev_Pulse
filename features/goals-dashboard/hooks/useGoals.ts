"use client";

import { useMemo } from "react";

import { goalRecords } from "@/features/goals-dashboard/data/goals-dashboard.data";
import type {
  DashboardTone,
  GoalItemModel,
  GoalState,
} from "@/features/goals-dashboard/types/goals-dashboard.types";

const toneMap: Record<GoalState, DashboardTone> = {
  done: "emerald",
  active: "amber",
  "at-risk": "rose",
  pending: "neutral",
};

function getProgressLabel(
  state: GoalState,
  current: number,
  target: number,
) {
  return state === "pending" ? "not started" : `${current} / ${target}`;
}

export function useGoals() {
  const items = useMemo<GoalItemModel[]>(
    () =>
      goalRecords.map((goal) => ({
        id: goal.label,
        label: goal.label,
        category: goal.category,
        progressLabel: getProgressLabel(goal.state, goal.current, goal.target),
        progressWidth: `${goal.percent}%`,
        state: goal.state,
        tone: toneMap[goal.state],
        daysLeftLabel: goal.daysLeft > 0 ? `${goal.daysLeft}d left` : undefined,
      })),
    [],
  );

  const groups = useMemo(
    () =>
      items.reduce(
        (accumulator, item) => {
          accumulator[item.state].push(item);
          return accumulator;
        },
        {
          done: [] as GoalItemModel[],
          active: [] as GoalItemModel[],
          "at-risk": [] as GoalItemModel[],
          pending: [] as GoalItemModel[],
        },
      ),
    [items],
  );

  return { items, groups };
}
