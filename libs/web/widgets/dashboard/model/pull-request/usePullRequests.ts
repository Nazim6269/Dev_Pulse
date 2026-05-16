"use client";

import { useCallback, useMemo, useState } from "react";
import { useGithubRepoPulls, useGithubRepos } from "@/features/github";
import type {
  PullRequest,
  PullRequestStatusFilter,
} from "@/types/pullRequest.types";

const GITHUB_USERNAME = "Nazim6269";

function formatTimeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHrs / 24);

  if (diffHrs < 1) return "just now";
  if (diffHrs < 24) return `${diffHrs}h ago`;
  return `${diffDays}d ago`;
}

const EMPTY_REVIEWERS: PullRequest["reviewers"] = [];

export function usePullRequests() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<PullRequestStatusFilter>("all");

  const { data: repos, isLoading: reposLoading } = useGithubRepos(GITHUB_USERNAME);

  const primaryRepo =
    repos && repos.length > 0
      ? [...repos].sort(
          (a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime(),
        )[0].name
      : null;

  const {
    data: githubPrs,
    isLoading: prsLoading,
    error: prsError,
    refetch,
  } = useGithubRepoPulls(GITHUB_USERNAME, primaryRepo ?? "", {
    state: "all",
    per_page: 100,
  });

  const isLoading = reposLoading || (!!primaryRepo && prsLoading);
  const error = prsError ? "Failed to load pull requests." : null;

  const items = useMemo<PullRequest[]>(() => {
    if (!githubPrs) return [];

    return githubPrs
      .map((pr) => {
        let cycleTime = "--";
        if (pr.mergedAt && pr.createdAt) {
          const diffMs = new Date(pr.mergedAt).getTime() - new Date(pr.createdAt).getTime();
          const hrs = Math.round(diffMs / (1000 * 60 * 60));
          cycleTime = hrs > 24 ? `${Math.round(hrs / 24)}d` : `${hrs}h`;
        }

        const mapped: PullRequest = {
          id: String(pr.id),
          title: pr.title,
          repository: pr.repo,
          branchName: pr.branch,
          status:
            pr.state === "merged"
              ? "merged"
              : pr.state === "closed"
                ? "closed"
                : "open",
          size: pr.commits > 15 ? "lg" : pr.commits > 5 ? "md" : pr.commits > 2 ? "sm" : "xs",
          reviewCount: pr.reviewComments,
          cycleTime,
          updatedAt: formatTimeAgo(pr.updatedAt),
          reviewers: [
            {
              id: pr.author,
              name: pr.author,
              initials: pr.author.substring(0, 2).toUpperCase(),
            },
          ],
        };
        return mapped;
      })
      .filter((pr) => {
        // Apply status filter
        if (statusFilter !== "all" && pr.status !== statusFilter) {
          return false;
        }
        // Apply text query
        if (query) {
          const q = query.toLowerCase();
          return (
            pr.title.toLowerCase().includes(q) ||
            pr.repository.toLowerCase().includes(q) ||
            pr.branchName.toLowerCase().includes(q)
          );
        }
        return true;
      });
  }, [githubPrs, statusFilter, query]);

  const summary = useMemo(() => {
    // calculate summary across *all* fetched PRs, not just the filtered ones
    const allPrs = githubPrs || [];
    return allPrs.reduce(
      (acc, pr) => {
        acc.total += 1;
        if (pr.state === "merged") acc.merged += 1;
        else if (pr.state === "closed") acc.closed += 1;
        else acc.open += 1;
        return acc;
      },
      { total: 0, open: 0, closed: 0, merged: 0 },
    );
  }, [githubPrs]);

  const setQueryCb = useCallback((q: string) => setQuery(q), []);
  const setStatusCb = useCallback((s: PullRequestStatusFilter) => setStatusFilter(s), []);
  
  const refresh = useCallback(async () => {
    await refetch();
  }, [refetch]);

  const updateStatus = useCallback(async (id: string, newStatus: string) => {
    // In a real app, this would make an API call to change status.
    // Since we're using a read-only GitHub API integration here, we'll just ignore or mock.
    console.warn("Status update not supported via public GitHub API", id, newStatus);
  }, []);

  return {
    items,
    filters: { query, status: statusFilter },
    summary,
    isLoading,
    error,
    setQuery: setQueryCb,
    setStatus: setStatusCb,
    refresh,
    updateStatus,
    emptyReviewers: EMPTY_REVIEWERS,
  };
}
