"use client";

import { useMemo } from "react";

import {
  recentCommits,
  repoContributions,
  timeOfDaySlots,
} from "@/features/commits/data/commit-dashboard.data";
import { useCommitDistribution } from "@/features/commits/hooks/useCommitDistribution";
import { useDailyCommitVolume } from "@/features/commits/hooks/useDailyCommitVolume";
import type {
  BadgeVariant,
  RecentCommitItemModel,
  RepoCommitItemModel,
  TimeOfDayRowModel,
} from "@/features/commits/types/commit.types";

const badgeToneMap: Record<string, BadgeVariant> = {
  feat: "info",
  fix: "warning",
  chore: "neutral",
  refactor: "info",
  docs: "warning",
  test: "success",
};

export function useCommitCharts() {
  const dailyCommitVolume = useDailyCommitVolume();
  const commitDistribution = useCommitDistribution();

  const recentCommitItems = useMemo<RecentCommitItemModel[]>(
    () =>
      recentCommits.map((commit) => ({
        hash: commit.hash,
        message: commit.message,
        repository: commit.repository,
        timeAgo: commit.timeAgo,
        type: commit.type,
        badgeVariant: badgeToneMap[commit.type],
      })),
    [],
  );

  const timeOfDayRows = useMemo<TimeOfDayRowModel[]>(() => {
    const maxValue = timeOfDaySlots.reduce((highest, slot) => {
      const slotMax = slot.values.reduce(
        (innerHighest, current) => Math.max(innerHighest, current),
        0,
      );
      return Math.max(highest, slotMax);
    }, 0);

    return timeOfDaySlots.map((slot) => ({
      id: slot.label,
      label: slot.label,
      total: slot.values.reduce((sum, current) => sum + current, 0),
      cells: slot.values.map((value, index) => ({
        id: `${slot.label}-${index}`,
        opacity: value === 0 ? 1 : Math.max(0.2, value / maxValue),
        tone: "violet",
      })),
    }));
  }, []);

  const peakActivity = useMemo(() => {
    const ranked = [...timeOfDayRows].sort((left, right) => right.total - left.total);
    return ranked.slice(0, 2).map((row) => row.label).join(" and ");
  }, [timeOfDayRows]);

  const repoItems = useMemo<RepoCommitItemModel[]>(
    () =>
      repoContributions.map((repo) => ({
        id: repo.name,
        name: repo.name,
        commitCount: repo.commits,
        shareLabel: `${repo.percentage}%`,
        segments: [
          {
            id: `${repo.name}-feat`,
            width: `${Math.round((repo.feat / repo.commits) * 100)}%`,
            tone: "violet",
          },
          {
            id: `${repo.name}-fix`,
            width: `${Math.round((repo.fix / repo.commits) * 100)}%`,
            tone: "rose",
          },
          {
            id: `${repo.name}-chore`,
            width: `${Math.round((repo.chore / repo.commits) * 100)}%`,
            tone: "neutral",
          },
          {
            id: `${repo.name}-other`,
            width: `${Math.round((repo.other / repo.commits) * 100)}%`,
            tone: "blue",
          },
        ],
      })),
    [],
  );

  return {
    dailyCommitVolume,
    commitDistribution,
    recentCommitItems,
    timeOfDayRows,
    peakActivity,
    repoItems,
  };
}
