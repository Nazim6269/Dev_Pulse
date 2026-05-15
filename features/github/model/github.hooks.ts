import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { githubKeys } from "./github.querykeys";
import { githubService } from "@/features/container";
import { RepoQueryParams } from "./github.types";

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
