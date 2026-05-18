"use client";

import { useGithubCommitActivity, useGithubRepos } from "@/features/github";
import type { CommitActivitySummary } from "@/features/github";
import { useCurrentUser } from "@/features/auth";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
/** How many recent weeks to show in the bar chart */
const CHART_WEEKS = 8;

// ---------------------------------------------------------------------------
// Skeleton
// ---------------------------------------------------------------------------
function ActivityChartSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 shadow-sm animate-pulse">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <div className="h-4 w-32 bg-muted rounded" />
          <div className="h-3 w-20 bg-muted rounded" />
        </div>
        <div className="flex items-center gap-4">
          <div className="h-3 w-20 bg-muted rounded" />
          <div className="h-3 w-20 bg-muted rounded" />
        </div>
      </div>
      <div className="flex items-end gap-3 h-48 pt-2">
        {Array.from({ length: CHART_WEEKS }).map((_, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex items-end gap-0.5 h-28">
              <div
                className="flex-1 rounded-t-md bg-muted"
                style={{ height: `${30 + Math.random() * 60}%` }}
              />
              <div
                className="flex-1 rounded-t-md bg-muted/50"
                style={{ height: `${10 + Math.random() * 30}%` }}
              />
            </div>
            <div className="h-2.5 w-6 bg-muted rounded" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-border-muted">
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-1">
              <div className="h-3 w-20 bg-muted rounded" />
              <div className="h-5 w-10 bg-muted rounded" />
            </div>
          ))}
        </div>
        <div className="h-6 w-28 bg-muted rounded-full" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Inner chart — needs resolved data
// ---------------------------------------------------------------------------
function Chart({ summary, repo }: { summary: CommitActivitySummary; repo: string }) {
  const recentWeeks = summary.weeks.slice(-CHART_WEEKS);
  const maxTotal = Math.max(...recentWeeks.map((w) => w.total), 1);
  const totalCommits = summary.totalCommits;
  const trendPercent = summary.trendPercent;
  console.log(summary, 'summary');

  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px] font-medium text-foreground">Commit activity</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Last {CHART_WEEKS} weeks · <span className="text-primary/70">{repo}</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-primary/70" />
            <span className="text-[11px] text-muted-foreground">Commits</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-primary/20" />
            <span className="text-[11px] text-muted-foreground">Daily avg</span>
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-3 h-48 pt-2">
        {recentWeeks.map((week) => {
          const commitH = Math.round((week.total / maxTotal) * 100);
          // Daily avg as a proportion of the weekly total bar
          const dailyAvg = week.days.filter((d) => d > 0).length;
          const avgH = Math.round((dailyAvg / 7) * commitH);
          return (
            <div key={week.weekStart} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-end gap-0.5 h-28">
                {/* Commits bar */}
                <div
                  className="flex-1 rounded-t-md bg-primary/70 hover:bg-primary transition-colors cursor-default relative group"
                  style={{ height: `${Math.max(commitH, 2)}%` }}
                >
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-60 transition-opacity whitespace-nowrap text-foreground">
                    {week.total}
                  </span>
                </div>
                {/* Active-days bar */}
                <div
                  className="flex-1 rounded-t-md bg-primary/20 hover:bg-primary/40 transition-colors cursor-default"
                  style={{ height: `${Math.max(avgH, 2)}%` }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground/50 truncate w-full text-center">
                {week.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Summary footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border-muted">
        <div className="flex gap-4">
          <div>
            <p className="text-[11px] text-muted-foreground">Total commits</p>
            <p className="text-[15px] font-semibold text-primary">{totalCommits}</p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground">Best week</p>
            <p className="text-[15px] font-semibold text-foreground/70">
              {summary.bestWeek?.label ?? "—"}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground">Best count</p>
            <p className="text-[15px] font-semibold text-foreground/70">
              {summary.bestWeek?.total ?? "—"}
            </p>
          </div>
        </div>

        {trendPercent !== null && (
          <div
            className={`text-[11px] px-2.5 py-1 rounded-full border ${
              trendPercent >= 0
                ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
                : "text-rose-400 bg-rose-400/10 border-rose-400/20"
            }`}
          >
            {trendPercent >= 0 ? "↑" : "↓"} {Math.abs(trendPercent)}% vs prev period
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Root — resolves repo, then fetches commit activity
// ---------------------------------------------------------------------------
export default function ActivityChart() {
  const { data: user } = useCurrentUser();
  const username = user?.githubUsername || 'Nazim6269';
  const { data: repos, isLoading: reposLoading } = useGithubRepos(username);

  const primaryRepo =
    repos && repos.length > 0
      ? [...repos].sort(
          (a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime(),
        )[0].name
      : null;

  const {
    data: summary,
    isLoading: statsLoading,
    isError,
  } = useGithubCommitActivity(username, primaryRepo ?? "");

  if (reposLoading || statsLoading || !summary || !primaryRepo) {
    return <ActivityChartSkeleton />;
  }

  if (isError) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center shadow-sm h-48">
        <p className="text-[12px] text-muted-foreground">Failed to load commit activity.</p>
      </div>
    );
  }

  return <Chart summary={summary} repo={primaryRepo} />;
}
