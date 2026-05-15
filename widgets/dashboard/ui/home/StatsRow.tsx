"use client";

import { useEffect, useMemo, useState } from "react";
import { GitPullRequest, GitCommit, Eye, Clock } from "lucide-react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { SortableStatCard } from "./SortableCard";
import { StatsRowSkeleton } from "./skeleton";
import {
  useGithubCommitActivity,
  useGithubRepoPulls,
  useGithubRepos,
} from "@/features/github";

const STORAGE_KEY = "dashboard-stats-layout";
const GITHUB_USERNAME = "Nazim6269";

export default function StatsRow() {
  const { data: repos, isLoading: reposLoading } =
    useGithubRepos(GITHUB_USERNAME);

  const primaryRepo =
    repos && repos.length > 0
      ? [...repos].sort(
          (a, b) =>
            new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime(),
        )[0].name
      : null;

  const {
    data: summary,
    isLoading: statsLoading,
    isError: statsError,
  } = useGithubCommitActivity(GITHUB_USERNAME, primaryRepo ?? "");

  const {
    data: prs,
    isLoading: prsLoading,
    isError: prsError,
  } = useGithubRepoPulls(GITHUB_USERNAME, primaryRepo ?? "");

  const [layout, setLayout] = useState<string[]>([]);

  const statsData = useMemo(() => {
    if (!summary || !prs) return [];

    const mergedPrs = prs.filter((pr) => pr.state === "merged");
    const totalReviews = prs.reduce((sum, pr) => sum + pr.reviewComments, 0);

    let cycleTimeStr = "0h";
    if (mergedPrs.length > 0) {
      const totalCycleTimeMs = mergedPrs.reduce((sum, pr) => {
        if (pr.mergedAt && pr.createdAt) {
          return (
            sum +
            (new Date(pr.mergedAt).getTime() - new Date(pr.createdAt).getTime())
          );
        }
        return sum;
      }, 0);
      const avgCycleHours = Math.round(
        totalCycleTimeMs / mergedPrs.length / (1000 * 60 * 60),
      );
      if (avgCycleHours > 24) {
        cycleTimeStr = `${Math.round(avgCycleHours / 24)}d`;
      } else {
        cycleTimeStr = `${avgCycleHours}h`;
      }
    }

    return [
      {
        id: "prs",
        label: "PRs merged",
        value: mergedPrs.length.toString(),
        sub: "recent closed PRs",
        change: "+12%", // Simulated
        up: true,
        icon: GitPullRequest,
        accent: "text-primary",
        iconBg: "bg-primary/10",
        glow: "shadow-primary/10",
      },
      {
        id: "commits",
        label: "Commits",
        value: summary.totalCommits.toString(),
        sub: "last 52 weeks",
        change: summary.trendPercent
          ? `${summary.trendPercent > 0 ? "+" : ""}${summary.trendPercent}%`
          : "0%",
        up: (summary.trendPercent ?? 0) >= 0,
        icon: GitCommit,
        accent: "text-emerald-400",
        iconBg: "bg-emerald-500/10",
        glow: "shadow-emerald-500/10",
      },
      {
        id: "reviews",
        label: "Code reviews",
        value: totalReviews.toString(),
        sub: "recent closed PRs",
        change: "+24%", // Simulated
        up: true,
        icon: Eye,
        accent: "text-amber-400",
        iconBg: "bg-amber-500/10",
        glow: "shadow-amber-500/10",
      },
      {
        id: "cycle",
        label: "Avg cycle time",
        value: cycleTimeStr,
        sub: "per PR",
        change: "-6%", // Simulated
        up: false,
        icon: Clock,
        accent: "text-rose-400",
        iconBg: "bg-rose-500/10",
        glow: "shadow-rose-500/10",
      },
    ];
  }, [summary, prs]);

  useEffect(() => {
    if (statsData.length > 0) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedLayout = JSON.parse(saved);
        // Verify all saved IDs still exist
        const allExist = parsedLayout.every((id: string) =>
          statsData.some((stat) => stat.id === id),
        );
        if (allExist && parsedLayout.length === statsData.length) {
          setLayout(parsedLayout);
          return;
        }
      }
      setLayout(statsData.map((s) => s.id));
    }
  }, [statsData]);

  useEffect(() => {
    if (layout.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
    }
  }, [layout]);

  if (reposLoading || statsLoading || prsLoading || !primaryRepo) {
    return <StatsRowSkeleton />;
  }

  if (statsError || prsError || !summary || !prs) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center h-[116px] shadow-sm">
        <p className="text-[12px] text-muted-foreground">
          Failed to load statistics.
        </p>
      </div>
    );
  }

  const dataMap = Object.fromEntries(statsData.map((s) => [s.id, s]));
  const orderedStats = layout.map((id) => dataMap[id]).filter(Boolean);

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setLayout((prev) => {
      const oldIndex = prev.indexOf(active.id);
      const newIndex = prev.indexOf(over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={layout} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
          {orderedStats.map((stat) => (
            <SortableStatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
