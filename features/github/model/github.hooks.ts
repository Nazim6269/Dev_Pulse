import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { githubKeys } from "./github.querykeys";
import { githubService } from "@/features/container";
import { RepoQueryParams, PullRequestQueryParams } from "./github.types";

export const useGithubProfile = (username: string) => {
  return useQuery({
    queryKey: githubKeys.profile(username),
    queryFn: () => githubService.getUserProfile(username),
    placeholderData: keepPreviousData,
    enabled: Boolean(username),
    staleTime: 1000 * 60 * 2,
  });
};

export const useGithubRepos = (
  username: string,
  params?: RepoQueryParams,
) => {
  return useQuery({
    queryKey: githubKeys.repos(username),
    queryFn: () => githubService.getUserRepos(username, params),
    placeholderData: keepPreviousData,
    enabled: Boolean(username),
    staleTime: 1000 * 60 * 5,
  });
};

export const useGithubRepoPulls = (
  username: string,
  repo: string,
  params?: PullRequestQueryParams,
) => {
  return useQuery({
    queryKey: githubKeys.pulls(username, repo),
    queryFn: () => githubService.getRepoPullRequests(username, repo, params),
    placeholderData: keepPreviousData,
    enabled: Boolean(username) && Boolean(repo),
    staleTime: 1000 * 60 * 10, // closed PRs rarely change
  });
};

export const useGithubCommitActivity = (username: string, repo: string) => {
  return useQuery({
    queryKey: githubKeys.commitActivity(username, repo),
    queryFn: () => githubService.getRepoCommitActivity(username, repo),
    placeholderData: keepPreviousData,
    enabled: Boolean(username) && Boolean(repo),
    // GitHub computes stats async — 202 responses are handled by axios-client retry;
    // once cached, 15 min is safe since historical weeks don't change.
    staleTime: 1000 * 60 * 15,
    retry: 3,
    retryDelay: (attempt) => Math.min(2000 * 2 ** attempt, 10_000),
  });
};
