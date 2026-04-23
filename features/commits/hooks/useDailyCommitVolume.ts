"use client";

import { useMemo } from "react";

import { dailyCommitVolumes } from "@/features/commits/data/commit-dashboard.data";
import type { DailyCommitBarModel } from "@/features/commits/types/commit.types";

export function useDailyCommitVolume() {
  const chartBars = useMemo<DailyCommitBarModel[]>(() => {
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
    bars: chartBars,
    trendLabel: "8% vs last month",
  };
}
