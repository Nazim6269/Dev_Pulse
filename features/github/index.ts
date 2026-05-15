// ---------------------------------------------------------------------------
// GitHub Feature — Public API
// Only import from this file outside the feature boundary.
// ---------------------------------------------------------------------------

// Types
export type {
  GithubUserProfile,
  GithubRepositoryModel,
  GithubUserDto,
  GithubRepoDto,
  RepoQueryParams,
  GithubPullRequestDto,
  GithubPullRequest,
  PullRequestState,
  PullRequestQueryParams,
} from "./model/github.types";

// Query keys (useful for manual cache operations)
export { githubKeys } from "./model/github.querykeys";

// React Query hooks (primary consumer surface)
export { useGithubProfile, useGithubRepos, useGithubRepoPulls } from "./model/github.hooks";

// Service & Repository (for DI / container wiring — do NOT use directly in UI)
export { GithubService } from "./model/github.service";
export { GithubRepository } from "./api/github.repository";
