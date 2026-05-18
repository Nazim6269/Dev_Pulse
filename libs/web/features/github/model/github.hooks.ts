import { keepPreviousData, useQuery, useMutation } from "@tanstack/react-query";
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
    // GitHub computes stats async; keep retrying longer when the endpoint
    // returns 202 until stats are ready, but fail fast for ordinary errors.
    staleTime: 1000 * 60 * 15,
    retry: (failureCount, error) => {
      const status = (error as Error & { response?: { status: number } })?.response?.status;
      if (status === 202) {
        return failureCount < 8;
      }
      return failureCount < 3;
    },
    retryDelay: (attempt, error) => {
      const status = (error as Error & { response?: { status: number } })?.response?.status;
      if (status === 202) {
        return 2000;
      }
      return Math.min(2000 * 2 ** attempt, 10_000);
    },
  });
};

export const useGithubPullRequestReviews = (
  username: string,
  repo: string,
  pullNumber: number,
) => {
  return useQuery({
    queryKey: githubKeys.pullReviews(username, repo, pullNumber),
    queryFn: () => githubService.getPullRequestReviews(username, repo, pullNumber),
    placeholderData: keepPreviousData,
    enabled: Boolean(username) && Boolean(repo) && Boolean(pullNumber),
    staleTime: 1000 * 60 * 5,
  });
};

export const useGithubPullRequestFiles = (
  username: string,
  repo: string,
  pullNumber: number,
) => {
  return useQuery({
    queryKey: githubKeys.pullFiles(username, repo, pullNumber),
    queryFn: () => githubService.getPullRequestFiles(username, repo, pullNumber),
    placeholderData: keepPreviousData,
    enabled: Boolean(username) && Boolean(repo) && Boolean(pullNumber),
    staleTime: 1000 * 60 * 5,
  });
};

export const useAddGithubCollaborator = () => {
  return useMutation({
    mutationFn: ({ username, repo, collaborator }: { username: string, repo: string, collaborator: string }) =>
      githubService.addRepoCollaborator(username, repo, collaborator),
  });
};



