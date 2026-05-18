"use client";

import { useMemo } from "react";
import { Target, CheckCircle2, Circle } from "lucide-react";
import { useGithubCommitActivity, useGithubRepoPulls, useGithubRepos } from "@/features/github";
import { GoalTrackerSkeleton } from "./skeleton";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const GITHUB_USERNAME = "Nazim6269";

export default function GoalTracker() {
  const { data: repos, isLoading: reposLoading } = useGithubRepos(GITHUB_USERNAME);

  const primaryRepo =
    repos && repos.length > 0
      ? [...repos].sort(
          (a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime(),
        )[0].name
      : null;

  const { data: summary, isLoading: statsLoading, isError: statsError } = useGithubCommitActivity(
    GITHUB_USERNAME,
    primaryRepo ?? ""
  );

  const { data: prs, isLoading: prsLoading, isError: prsError } = useGithubRepoPulls(
    GITHUB_USERNAME,
    primaryRepo ?? ""
  );

  const goals = useMemo(() => {
    if (!summary || !prs) return [];

    const mergedPrs = prs.filter((pr) => pr.state === "merged");

    // 1. Commits this week (from last week of summary)
    const lastWeek = summary.weeks.length > 0 ? summary.weeks[summary.weeks.length - 1] : null;
    const commitsThisWeek = lastWeek ? lastWeek.total : 0;

    // 2. Merged PRs
    const mergedCount = mergedPrs.length;

    // 3. Reviewed PRs
    const reviewedCount = prs.filter((pr) => pr.reviewComments > 0).length;

    // 4. Avg Cycle time
    let avgCycleHours = 24; // Default
    if (mergedPrs.length > 0) {
      const totalCycleMs = mergedPrs.reduce(
        (sum, pr) =>
          sum +
          (pr.mergedAt && pr.createdAt
            ? new Date(pr.mergedAt).getTime() - new Date(pr.createdAt).getTime()
            : 0),
        0
      );
      avgCycleHours = totalCycleMs / mergedPrs.length / (1000 * 60 * 60);
    }
    const cycleTimeDone = mergedPrs.length > 0 && avgCycleHours <= 24;
    // Map cycle time progress inversely: 24h = 100%, 48h = 50%, etc.
    const cycleTimeProgress = cycleTimeDone
      ? 24
      : Math.max(0, Math.round(24 * (24 / Math.max(24, avgCycleHours))));

    // 5. Total commits
    const totalCommits = summary.totalCommits;

    // 6. Consistency: Have at least 3 active days this week
    const activeDaysThisWeek = lastWeek ? lastWeek.days.filter((d) => d > 0).length : 0;

    return [
      {
        label: "Commit 10 times this week",
        current: commitsThisWeek,
        target: 10,
        done: commitsThisWeek >= 10,
      },
      {
        label: "Code 3 days this week",
        current: activeDaysThisWeek,
        target: 3,
        done: activeDaysThisWeek >= 3,
      },
      {
        label: "Merge 5 PRs recently",
        current: mergedCount,
        target: 5,
        done: mergedCount >= 5,
      },
      {
        label: "Participate in 5 PR reviews",
        current: reviewedCount,
        target: 5,
        done: reviewedCount >= 5,
      },
      {
        label: "Avg PR cycle time < 24h",
        current: cycleTimeProgress,
        target: 24,
        done: cycleTimeDone,
      },
      {
        label: "Reach 500 total commits",
        current: totalCommits,
        target: 500,
        done: totalCommits >= 500,
      },
    ];
  }, [summary, prs]);

  if (reposLoading || statsLoading || prsLoading) {
    return <GoalTrackerSkeleton />;
  }

  if (!primaryRepo) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center h-110 shadow-sm">
        <p className="text-[12px] text-muted-foreground">
          No repository available to render goals.
        </p>
      </div>
    );
  }

  if (statsError || prsError) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center h-110 shadow-sm">
        <p className="text-[12px] text-muted-foreground">Failed to load goals.</p>
      </div>
    );
  }

  if (!summary || !prs) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center h-110 shadow-sm">
        <p className="text-[12px] text-muted-foreground">
          Goal data is unavailable.
        </p>
      </div>
    );
  }

  const completedGoals = goals.filter((g) => g.done).length;
  const totalGoals = goals.length;
  const completionPct = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 h-110 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-medium text-foreground">Goals</p>
        <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center">
          <Target size={14} className="text-amber-400" />
        </div>
      </div>

      {/* Completion ring (CSS only) */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 shrink-0">
          <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              className="text-muted-foreground/10"
            />
            <circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 26}`}
              strokeDashoffset={`${2 * Math.PI * 26 * (1 - completionPct / 100)}`}
              className="text-amber-400 transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[14px] font-semibold text-amber-400">
              {completionPct}%
            </span>
          </div>
        </div>
        <div>
          <p className="text-[13px] font-medium text-foreground">
            {completedGoals} of {totalGoals} goals
          </p>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            completed this period
          </p>
        </div>
      </div>

      {/* Goal list */}
      <div className="flex flex-col gap-2.5 overflow-y-auto pr-1 mt-1">
        {goals.map((g, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              {g.done ? (
                <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
              ) : (
                <Circle size={13} className="text-muted-foreground/30 shrink-0" />
              )}
              <span
                className={`text-[11px] leading-tight truncate ${
                  g.done ? "text-muted-foreground line-through" : "text-foreground/80"
                }`}
              >
                {g.label}
              </span>
            </div>
            <div className="ml-[21px] h-0.5 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  g.done ? "bg-emerald-500" : "bg-amber-400"
                }`}
                style={{
                  width: `${Math.min(100, Math.round((g.current / g.target) * 100))}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
