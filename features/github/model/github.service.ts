import { logger } from "@/features/logger";
import { GithubRepository } from "../api/github.repository";
import { parseError } from "@/features/api-errors";
import {
  GithubUserDto,
  GithubRepoDto,
  GithubUserProfile,
  GithubRepositoryModel,
  RepoQueryParams,
  GithubPullRequestDto,
  GithubPullRequest,
  PullRequestQueryParams,
} from "./github.types";

// ---------------------------------------------------------------------------
// Transformers (pure functions — no class coupling)
// ---------------------------------------------------------------------------

function transformUser(dto: GithubUserDto): GithubUserProfile {
  return {
    id: dto.id,
    login: dto.login,
    avatarUrl: dto.avatar_url,
    name: dto.name,
    bio: dto.bio,
    followers: dto.followers,
    following: dto.following,
    publicRepos: dto.public_repos,
    publicGists: dto.public_gists,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    location: dto.location,
    htmlUrl: dto.html_url,
  };
}

function transformRepo(dto: GithubRepoDto): GithubRepositoryModel {
  return {
    id: dto.id,
    name: dto.name,
    fullName: dto.full_name,
    description: dto.description,
    url: dto.html_url,
    stars: dto.stargazers_count,
    watchers: dto.watchers_count,
    forks: dto.forks_count,
    language: dto.language,
    updatedAt: dto.updated_at,
    pushedAt: dto.pushed_at,
    createdAt: dto.created_at,
  };
}

function transformPullRequest(dto: GithubPullRequestDto): GithubPullRequest {
  return {
    id: dto.id,
    number: dto.number,
    title: dto.title,
    url: dto.html_url,
    // merged_at being set means it was merged — derive a richer state
    state: dto.merged_at ? "merged" : dto.state,
    repo: dto.base.repo.full_name,
    branch: dto.head.ref,
    baseBranch: dto.base.ref,
    author: dto.user.login,
    authorAvatarUrl: dto.user.avatar_url,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    mergedAt: dto.merged_at,
    closedAt: dto.closed_at,
    isDraft: dto.draft,
    reviewComments: dto.review_comments,
    commits: dto.commits,
  };
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------

export class GithubService {
  constructor(private readonly repo: GithubRepository) {}

  async getUserProfile(username: string): Promise<GithubUserProfile> {
    try {
      const { data } = await this.repo.getUser<GithubUserDto>(username);
      return transformUser(data);
    } catch (error) {
      logger.error(String(error), "Error fetching user profile");
      throw parseError(error);
    }
  }

  async getUserRepos(
    username: string,
    params?: RepoQueryParams,
  ): Promise<GithubRepositoryModel[]> {
    try {
      const { data } = await this.repo.getUserRepos<GithubRepoDto[]>(
        username,
        params,
      );
      return data.map(transformRepo);
    } catch (error) {
      logger.error(String(error), "Error fetching user repos");
      throw parseError(error);
    }
  }

  async getRepoPullRequests(
    username: string,
    repo: string,
    params?: PullRequestQueryParams,
  ): Promise<GithubPullRequest[]> {
    try {
      const { data } = await this.repo.getRepoPullRequests<GithubPullRequestDto[]>(
        username,
        repo,
        params,
      );
      return data.map(transformPullRequest);
    } catch (error) {
      logger.error(String(error), `Error fetching PRs for ${username}/${repo}`);
      throw parseError(error);
    }
  }
}
