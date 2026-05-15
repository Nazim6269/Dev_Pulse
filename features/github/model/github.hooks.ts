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
