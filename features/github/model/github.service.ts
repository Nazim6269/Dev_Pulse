import { logger } from "@/features/logger";
import { GithubRepository } from "../api/github.repository";
import { parseError } from "@/features/api-errors";

function transformUser(user: any) {
  return {
    id: user.id,
    login: user.login,
    avatarUrl: user.avatar_url,
    name: user.name,
    bio: user.bio,
    followers: user.followers,
    following: user.following,
    publicRepos: user.public_repos,
    publicGists: user.public_gists,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
    location: user.location,
    htmlUrl: user.html_url,
  };
}

export class GithubService {
  constructor(private readonly repo: GithubRepository) {}

  async getUserProfile(username: string) {
    try {
      const { data: dto } = await this.repo.getUser(username);
      return transformUser(dto);
    } catch (error) {
      logger.error(String(error), "Error fetching user profile");
      throw parseError(error);
    }
  }
}
