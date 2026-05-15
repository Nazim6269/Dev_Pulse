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

// ---------------------------------------------------------------------------
// Pull Requests
// ---------------------------------------------------------------------------

export interface GithubPullRequestDto {
  id: number;
  number: number;
  title: string;
  html_url: string;
  state: "open" | "closed";
  merged_at: string | null;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  user: {
    login: string;
    avatar_url: string;
  };
  head: {
    ref: string;
    repo: {
      name: string;
      full_name: string;
    } | null;
  };
  base: {
    ref: string;
    repo: {
      name: string;
      full_name: string;
    };
  };
  draft: boolean;
  body: string | null;
  comments: number;
  review_comments: number;
  commits: number;
  additions: number;
  deletions: number;
  changed_files: number;
  labels: Array<{ name: string; color: string }>;
}

export type PullRequestState = "merged" | "open" | "closed";

export interface GithubPullRequest {
  id: number;
  number: number;
  title: string;
  url: string;
  /** Derived: "merged" when merged_at is set, otherwise the API state */
  state: PullRequestState;
  repo: string;
  branch: string;
  baseBranch: string;
  author: string;
  authorAvatarUrl: string;
  createdAt: string;
  updatedAt: string;
  mergedAt: string | null;
  closedAt: string | null;
  isDraft: boolean;
  reviewComments: number;
  commits: number;
}

export interface PullRequestQueryParams {
  state?: "open" | "closed" | "all";
  per_page?: number;
  sort?: "created" | "updated" | "popularity" | "long-running";
  direction?: "asc" | "desc";
}

// ---------------------------------------------------------------------------
// Commit Activity
// GitHub returns 52 weeks of data, each with:
//   days[7]  — Sun=0 … Sat=6 commit counts
//   total    — sum of the week
//   week     — Unix timestamp of Sunday that starts the week
// ---------------------------------------------------------------------------

export interface CommitActivityWeekDto {
  days: [number, number, number, number, number, number, number];
  total: number;
  week: number; // Unix timestamp (seconds)
}

/** One week of commit activity — ready for the UI */
export interface CommitActivityWeek {
  /** ISO date string for the Sunday that starts this week */
  weekStart: string;
  /** Short label like "Jan W2" */
  label: string;
  /** Total commits in the week */
  total: number;
  /** Daily breakdown Sun–Sat */
  days: number[];
}

/** Derived summary computed from the full 52-week dataset */
export interface CommitActivitySummary {
  weeks: CommitActivityWeek[];
  totalCommits: number;
  bestWeek: CommitActivityWeek | null;
  /** Percentage change vs the previous equal-length period (last N vs prior N) */
  trendPercent: number | null;
}
