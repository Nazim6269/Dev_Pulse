import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { githubKeys } from "./github.querykeys";
import { githubService } from "@/features/container";

export const useGithubProfile = (username: string) => {
  return useQuery({
    queryKey: githubKeys.profile(username),
    queryFn: () => githubService.getUserProfile(username),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 2,
  });
};
