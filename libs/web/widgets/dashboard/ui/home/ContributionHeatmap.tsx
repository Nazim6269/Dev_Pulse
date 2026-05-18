"use client";

import { useGithubCommitActivity, useGithubRepos } from "@/features/github";
import type { CommitActivitySummary, CommitActivityWeek } from "@/features/github";
import { useCurrentUser } from "@/features/auth";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const WEEKS_TO_SHOW = 36; // Number of weeks to show in the heatmap

const INTENSITY_CLASS = [
  "bg-muted/30",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/65",
  "bg-primary",
];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

const MONTH_ABBR = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// ---------------------------------------------------------------------------
// Skeleton
// ---------------------------------------------------------------------------
function HeatmapSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-sm animate-pulse">
      <div className="flex items-center justify-between mb-5">
        <div className="space-y-1.5">
          <div className="h-4 w-32 bg-muted rounded" />
          <div className="h-3 w-40 bg-muted rounded" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-6 bg-muted rounded" />
          {INTENSITY_CLASS.map((_, i) => (
            <span key={i} className="w-2.5 h-2.5 rounded-sm bg-muted" />
          ))}
          <div className="h-2 w-6 bg-muted rounded" />
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {/* Day labels */}
        <div className="flex flex-col gap-[3px] pt-5 shrink-0">
          {DAY_LABELS.map((d, i) => (
            <div key={i} className="h-[11px] text-[9px] text-muted-foreground/60 leading-none">
              {d}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex gap-[3px] mb-1 pb-1">
            <div className="h-2 w-full bg-muted rounded" />
          </div>
          <div className="flex flex-col gap-[3px]">
            {Array.from({ length: 7 }).map((_, ri) => (
              <div key={ri} className="flex gap-[3px]">
                {Array.from({ length: WEEKS_TO_SHOW }).map((_, ci) => (
                  <div key={ci} className="h-[11px] flex-1 rounded-[2px] bg-muted/50" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Inner Heatmap
// ---------------------------------------------------------------------------
function Heatmap({ summary }: { summary: CommitActivitySummary }) {
  const recentWeeks = summary.weeks.slice(-WEEKS_TO_SHOW);

  // Generate 7 rows (Sun-Sat), each with WEEKS_TO_SHOW columns
  const grid: number[][] = Array.from({ length: 7 }, () => []);
  recentWeeks.forEach((week) => {
    week.days.forEach((count, rowIndex) => {
      // Map raw count to 0-4 intensity scale
      const intensity =
        count === 0 ? 0 : count <= 1 ? 1 : count <= 3 ? 2 : count <= 6 ? 3 : 4;
      grid[rowIndex].push(intensity);
    });
  });

  // Extract sequential months for labels, evenly spaced
  const monthLabels: string[] = [];
  let lastMonth = -1;
  recentWeeks.forEach((week) => {
    const month = new Date(week.weekStart).getUTCMonth();
    if (month !== lastMonth) {
      monthLabels.push(MONTH_ABBR[month]);
      lastMonth = month;
    }
  });

  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[14px] font-medium text-foreground">
            Contribution calendar
          </p>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            {summary.totalCommits} contributions in the last year
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-muted-foreground/60">Less</span>
          {INTENSITY_CLASS.map((cls, i) => (
            <span key={i} className={`w-2.5 h-2.5 rounded-sm ${cls}`} />
          ))}
          <span className="text-[10px] text-muted-foreground/60">More</span>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {/* Day labels */}
        <div className="flex flex-col gap-[3px] pt-5 shrink-0">
          {DAY_LABELS.map((d, i) => (
            <div
              key={i}
              className="h-[11px] text-[9px] text-muted-foreground/60 leading-none"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Month labels */}
          <div className="flex gap-[3px] mb-1 pb-1">
            {monthLabels.map((m, i) => (
              <div
                key={i}
                className="text-[9px] text-muted-foreground/60"
                style={{ flex: 1 }}
              >
                {m}
              </div>
            ))}
          </div>
          {/* Cells */}
          <div className="flex flex-col gap-[3px]">
            {grid.map((row, ri) => (
              <div key={ri} className="flex gap-[3px]">
                {row.map((val, ci) => (
                  <div
                    key={ci}
                    className={`h-[11px] flex-1 rounded-[2px] ${INTENSITY_CLASS[val]} transition-colors hover:ring-1 hover:ring-primary/40 cursor-default relative group`}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-foreground/90 text-background px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                      {recentWeeks[ci].days[ri]} commits
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------
export default function ContributionHeatmap() {
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

  if (reposLoading || statsLoading) {
    return <HeatmapSkeleton />;
  }

  if (!primaryRepo) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center shadow-sm h-48">
        <p className="text-[12px] text-muted-foreground">
          No repository available to render contribution activity.
        </p>
      </div>
    );
  }  

  if (isError) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center shadow-sm h-48">
        <p className="text-[12px] text-muted-foreground">Failed to load contribution calendar.</p>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center shadow-sm h-48">
        <p className="text-[12px] text-muted-foreground">
          Contribution activity data is unavailable.
        </p>
      </div>
    );
  }

  return <Heatmap summary={summary} />;
}
