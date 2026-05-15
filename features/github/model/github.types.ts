export interface GithubUserDto {
  id: number;
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  created_at: string;
  updated_at: string;
  location: string | null;
  html_url: string;
}

export interface GithubRepoDto {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  pushed_at: string;
  created_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface GithubUserProfile {
  id: number;
  login: string;
  avatarUrl: string;
  name: string | null;
  bio: string | null;
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  createdAt: string;
  updatedAt: string;
  location: string | null;
  htmlUrl: string;
}

export interface GithubRepositoryModel {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  stars: number;
  watchers: number;
  forks: number;
  language: string | null;
  updatedAt: string;
  pushedAt: string;
  createdAt: string;
}

export interface RepoQueryParams {
  per_page?: number;
  sort?: "created" | "updated" | "pushed" | "full_name";
  direction?: "asc" | "desc";
}
