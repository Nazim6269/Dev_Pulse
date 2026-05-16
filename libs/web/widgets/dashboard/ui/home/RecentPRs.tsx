"use client";

import { useGithubRepoPulls, useGithubRepos } from "@/features/github";
import type { GithubPullRequest, PullRequestState } from "@/features/github";
import { GitMerge, GitPullRequest, XCircle, Clock } from "lucide-react";
import { RecentPRsSkeleton } from "./skeleton";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const GITHUB_USERNAME = "Nazim6269";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

const STATE_CONFIG: Record<
  PullRequestState,
  { icon: React.ReactNode; badge: string; bg: string }
> = {
  merged: {
    icon: <GitMerge size={13} className="text-primary" />,
    badge:
      "text-primary border-primary/20 bg-primary/10",
    bg: "bg-primary/15",
  },
  open: {
    icon: <GitPullRequest size={13} className="text-emerald-500" />,
    badge: "text-emerald-500 border-emerald-500/20 bg-emerald-500/10",
    bg: "bg-emerald-500/15",
  },
  closed: {
    icon: <XCircle size={13} className="text-rose-400" />,
    badge: "text-rose-400 border-rose-400/20 bg-rose-400/10",
    bg: "bg-rose-400/15",
  },
};

// ---------------------------------------------------------------------------
// Inner component — needs a resolved repo name
// ---------------------------------------------------------------------------
function PRList({ username, repo }: { username: string; repo: string }) {
  const { data: prs, isLoading, isError } = useGithubRepoPulls(username, repo);

  if (isLoading) return <RecentPRsSkeleton />;

  if (isError || !prs) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center h-110 shadow-sm">
        <p className="text-[12px] text-muted-foreground">
          Failed to load pull requests.
        </p>
      </div>
    );
  }

  const recent = prs.slice(0, 6);

  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 shadow-sm h-110">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-medium text-foreground">
          Recent pull requests
        </p>
        <a
          href={`https://github.com/${username}/${repo}/pulls?q=is%3Apr+is%3Aclosed`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-primary/80 hover:text-primary transition-colors"
        >
          View all →
        </a>
      </div>

      {/* PR list */}
      <div className="flex flex-col divide-y divide-border-muted overflow-y-auto">
        {recent.length === 0 ? (
          <p className="text-[12px] text-muted-foreground py-4 text-center">
            No pull requests found.
          </p>
        ) : (
          recent.map((pr: GithubPullRequest) => {
            const cfg = STATE_CONFIG[pr.state];
            const date = pr.mergedAt ?? pr.closedAt ?? pr.updatedAt;
            return (
              <a
                key={pr.id}
                href={pr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 flex items-start gap-3 group"
              >
                {/* State icon */}
                <div
                  className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${cfg.bg}`}
                >
                  {cfg.icon}
                </div>

                {/* Body */}
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] text-foreground/90 truncate group-hover:text-foreground transition-colors leading-tight">
                    {pr.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-[10px] text-muted-foreground truncate max-w-[120px]">
                      {pr.repo}
                    </span>
                    <span className="text-muted-foreground/30">·</span>
                    <span className="text-[10px] text-muted-foreground/60 flex items-center gap-1">
                      <Clock size={9} />
                      {timeAgo(date)}
                    </span>
                    {pr.reviewComments > 0 && (
                      <>
                        <span className="text-muted-foreground/30">·</span>
                        <span className="text-[10px] text-muted-foreground">
                          {pr.reviewComments} review{pr.reviewComments !== 1 ? "s" : ""}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Badge */}
                <span
                  className={`shrink-0 text-[10px] px-1.5 py-0.5 rounded-full border mt-0.5 ${cfg.badge}`}
                >
                  {pr.state}
                </span>
              </a>
            );
          })
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Root component — resolves the most active repo first, then renders PRList
// ---------------------------------------------------------------------------
export default function RecentPRs() {
  const { data: repos, isLoading } = useGithubRepos(GITHUB_USERNAME);

  if (isLoading) return <RecentPRsSkeleton />;

  // Pick the most recently pushed repo as the primary PR source
  const primaryRepo =
    repos && repos.length > 0
      ? repos.sort(
          (a, b) =>
            new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime(),
        )[0].name
      : null;

  if (!primaryRepo) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center h-110 shadow-sm">
        <p className="text-[12px] text-muted-foreground">No repositories found.</p>
      </div>
    );
  }

  return <PRList username={GITHUB_USERNAME} repo={primaryRepo} />;
}
