"use client";

import { useGithubRepoPulls, useGithubRepos } from "@/features/github";
import { PRCycleCardSkeleton } from "./skeleton";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const GITHUB_USERNAME = "Nazim6269";

export default function PRCycleCard() {
  const { data: repos, isLoading: reposLoading } = useGithubRepos(GITHUB_USERNAME);
  
  const primaryRepo =
    repos && repos.length > 0
      ? [...repos].sort(
          (a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime(),
        )[0].name
      : null;

  const { data: prs, isLoading: prsLoading, isError } = useGithubRepoPulls(
    GITHUB_USERNAME,
    primaryRepo ?? ""
  );

  if (reposLoading || prsLoading || !primaryRepo) {
    return <PRCycleCardSkeleton />;
  }

  if (isError || !prs) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center h-full shadow-sm">
        <p className="text-[12px] text-muted-foreground">Failed to load PR cycle time.</p>
      </div>
    );
  }

  const mergedPrs = prs.filter((pr) => pr.state === "merged" && pr.mergedAt && pr.createdAt);

  let avgCycleHours = 0;
  let bestPRHours = 0;
  let slowestPRHours = 0;

  if (mergedPrs.length > 0) {
    const cycles = mergedPrs.map(
      (pr) => (new Date(pr.mergedAt!).getTime() - new Date(pr.createdAt).getTime()) / (1000 * 60 * 60)
    );
    
    avgCycleHours = cycles.reduce((a, b) => a + b, 0) / cycles.length;
    bestPRHours = Math.min(...cycles);
    slowestPRHours = Math.max(...cycles);
  }

  // Simulate phases based on total avg time
  // Since GitHub API doesn't expose fine-grained review event timestamps in the standard pulls endpoint,
  // we distribute the total cycle time into realistic average ratios.
  const timeToReview = avgCycleHours * 0.25; // 25%
  const reviewIters = avgCycleHours * 0.40;  // 40%
  const mergeReady = avgCycleHours * 0.35;   // 35%

  const phases = [
    {
      label: "Time to first review",
      value: `${timeToReview.toFixed(1)}h`,
      pct: 25,
      color: "bg-primary",
    },
    { 
      label: "Review iterations", 
      value: `${reviewIters.toFixed(1)}h`, 
      pct: 40, 
      color: "bg-amber-400" 
    },
    {
      label: "Merge ready → merge",
      value: `${mergeReady.toFixed(1)}h`,
      pct: 35,
      color: "bg-emerald-400",
    },
  ];

  const formatHours = (h: number) => {
    if (h === 0) return "-";
    return h < 10 ? h.toFixed(1) + "h" : Math.round(h) + "h";
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-5 h-full shadow-sm">
      <div>
        <p className="text-[14px] font-medium text-foreground">PR cycle time</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">
          Avg time open → merged
        </p>
      </div>

      {/* Big number */}
      <div className="flex items-end gap-2">
        <span className="text-5xl font-semibold tracking-tighter text-foreground">
          {mergedPrs.length > 0 ? Math.round(avgCycleHours) : "-"}
        </span>
        <span className="text-[16px] text-muted-foreground/60 mb-1.5">
          hrs avg
        </span>
      </div>

      {/* Progress phases */}
      <div className="flex flex-col gap-3">
        {phases.map(({ label, value, pct, color }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">{label}</span>
              <span className="text-[11px] font-medium text-foreground/70">
                {mergedPrs.length > 0 ? value : "-"}
              </span>
            </div>
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full ${color} rounded-full`}
                style={{ width: `${mergedPrs.length > 0 ? pct : 0}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Comparison */}
      <div className="mt-auto grid grid-cols-2 gap-3">
        <div className="bg-muted/50 rounded-xl p-3 text-center">
          <p className="text-[13px] font-semibold text-emerald-500">
            {formatHours(bestPRHours)}
          </p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Best PR</p>
        </div>
        <div className="bg-muted/50 rounded-xl p-3 text-center">
          <p className="text-[13px] font-semibold text-rose-500">
            {formatHours(slowestPRHours)}
          </p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Slowest PR</p>
        </div>
      </div>
    </div>
  );
}
