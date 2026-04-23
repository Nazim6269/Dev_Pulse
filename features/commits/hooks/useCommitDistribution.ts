"use client";

import { useMemo } from "react";

import { commitTypeBreakdown } from "@/features/commits/data/commit-dashboard.data";
import type {
  CommitDistributionItemModel,
  ProgressTone,
} from "@/features/commits/types/commit.types";

const toneMap: Record<string, ProgressTone> = {
  feat: "violet",
  fix: "rose",
  chore: "neutral",
  refactor: "blue",
  docs: "amber",
  test: "emerald",
};

export function useCommitDistribution() {
  const items = useMemo<CommitDistributionItemModel[]>(
    () =>
      commitTypeBreakdown.map((item) => ({
        id: item.type,
        label: item.type,
        count: item.count,
        tone: toneMap[item.type],
        segments: [
          {
            id: `${item.type}-segment`,
            width: `${item.percentage}%`,
            tone: toneMap[item.type],
          },
        ],
      })),
    [],
  );

  return { items };
}
