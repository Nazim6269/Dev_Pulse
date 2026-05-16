"use client";

import { useMemo } from "react";

import { dailyCommitVolumes } from "@/entities/commit/model/data";
import type { DailyCommitBarModel } from "@/entities/commit/model/types";

export function useDailyCommitVolume() {
  const bars = useMemo<DailyCommitBarModel[]>(() => {
    const maxDaily = dailyCommitVolumes.reduce(
      (highest, current) => Math.max(highest, current),
      0,
    );

    return dailyCommitVolumes.map((value, index) => ({
      id: `day-${index + 1}`,
      value,
      height: value === 0 ? "6%" : `${Math.round((value / maxDaily) * 100)}%`,
      isEmpty: value === 0,
      tickLabel: (index + 1) % 5 === 0 ? String(index + 1) : undefined,
    }));
  }, []);

  return {
    bars,
    trendLabel: "8% vs last month",
  };
}
