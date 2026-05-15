export const githubKeys = {
  all: ["github"] as const,
  user: (username: string) => [...githubKeys.all, username] as const,
  profile: (username: string) => [...githubKeys.user(username), "profile"] as const,
  repos: (username: string) => [...githubKeys.user(username), "repos"] as const,
  pulls: (username: string, repo: string) =>
    [...githubKeys.user(username), "pulls", repo] as const,
  commitActivity: (username: string, repo: string) =>
    [...githubKeys.user(username), "commit-activity", repo] as const,
};
