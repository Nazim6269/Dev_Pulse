"use client";

import { useGithubRepos } from "@/features/github";
import { GitFork, Star, ExternalLink } from "lucide-react";
import { TopReposSkeleton } from "./skeleton";
import type { GithubRepositoryModel } from "@/features/github";

// ---------------------------------------------------------------------------
// Language → colour dot mapping
// ---------------------------------------------------------------------------
const LANG_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-300",
  Python: "bg-yellow-400",
  Rust: "bg-orange-400",
  Go: "bg-cyan-400",
  Java: "bg-red-400",
  "C++": "bg-pink-400",
  Ruby: "bg-rose-500",
  Swift: "bg-orange-300",
  Kotlin: "bg-violet-400",
};

function langColor(lang: string | null) {
  return lang ? (LANG_COLORS[lang] ?? "bg-muted-foreground/40") : "bg-muted-foreground/40";
}

// ---------------------------------------------------------------------------
// Pseudo-sparkline derived from repo metadata (stars + forks as activity proxy)
// ---------------------------------------------------------------------------
function deriveActivity(repo: GithubRepositoryModel): number[] {
  const base = (repo.stars + repo.forks) || 1;
  return Array.from({ length: 7 }, (_, i) =>
    Math.max(1, Math.round((base / 7) * (0.6 + Math.sin(i + repo.id) * 0.4))),
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const GITHUB_USERNAME = "Nazim6269";
const MAX_REPOS = 5;

export default function TopRepos() {
  const { data: repos, isLoading, isError } = useGithubRepos(GITHUB_USERNAME);

  if (isLoading) return <TopReposSkeleton />;

  if (isError || !repos) {
    return (
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center h-110 shadow-sm">
        <p className="text-[12px] text-muted-foreground">Failed to load repositories.</p>
      </div>
    );
  }

  // Sort by stars desc, take top N
  const top = [...repos]
    .sort((a, b) => b.stars - a.stars)
    .slice(0, MAX_REPOS);

  const maxActivity = Math.max(...top.flatMap(deriveActivity), 1);

  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 shadow-sm h-110">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-medium text-foreground">Top repositories</p>
        <a
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-primary/80 hover:text-primary transition-colors"
        >
          View all →
        </a>
      </div>

      {/* Repo list */}
      <div className="flex flex-col gap-3 overflow-y-auto">
        {top.map((repo) => {
          const activity = deriveActivity(repo);
          return (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border-muted hover:border-border-active/30 hover:bg-muted/50 transition-all duration-200 group"
            >
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="text-[12px] font-medium text-primary truncate">
                    {repo.name}
                  </p>
                  <ExternalLink
                    size={10}
                    className="opacity-0 group-hover:opacity-40 transition-opacity shrink-0 text-foreground"
                  />
                </div>

                {repo.description && (
                  <p className="text-[10px] text-muted-foreground truncate mb-2">
                    {repo.description}
                  </p>
                )}

                <div className="flex items-center gap-3">
                  {repo.language && (
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground/60">
                      <span className={`w-1.5 h-1.5 rounded-full ${langColor(repo.language)}`} />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground/60">
                    <Star size={9} /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground/60">
                    <GitFork size={9} /> {repo.forks}
                  </span>
                </div>
              </div>

              {/* Mini sparkline */}
              <div className="flex items-end gap-0.5 h-8 shrink-0">
                {activity.map((v, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-t-[1px] bg-primary/30 group-hover:bg-primary/50 transition-colors"
                    style={{ height: `${Math.round((v / maxActivity) * 100)}%` }}
                  />
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
