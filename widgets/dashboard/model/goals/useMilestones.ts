"use client";

import { useMemo } from "react";

import { milestoneRecords } from "@/pages/dashboard/goals/data/goals-dashboard.data";
import type {
  MilestoneItemModel,
  MilestoneUrgency,
} from "./goals-dashboard.types";

function getUrgency(daysLeft: number): MilestoneUrgency {
  if (daysLeft <= 7) return "high";
  if (daysLeft <= 14) return "medium";
  return "low";
}

export function useMilestones() {
  const items = useMemo<MilestoneItemModel[]>(
    () =>
      [...milestoneRecords]
        .sort((left, right) => left.daysLeft - right.daysLeft)
        .map((milestone) => ({
          id: milestone.label,
          label: milestone.label,
          dateLabel: milestone.dateLabel,
          daysLeftLabel: `${milestone.daysLeft}d`,
          urgency: getUrgency(milestone.daysLeft),
        })),
    [],
  );

  return { items };
}
