"use client";

import { useMemo } from "react";

import { personalRecords } from "@/features/goals-dashboard/data/goals-dashboard.data";
import type { RecordCardModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

export function useRecords() {
  const items = useMemo<RecordCardModel[]>(
    () =>
      personalRecords.map((record) => ({
        id: record.label,
        label: record.label,
        value: record.value,
        sublabel: record.sublabel,
        icon: record.icon,
        tone: record.tone,
      })),
    [],
  );

  return {
    items,
    highlightLabel: "4 new PRs this month",
  };
}
