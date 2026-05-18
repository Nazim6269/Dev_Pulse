import { IHttpClient } from "@/features/http-clients";
import { RepoQueryParams, PullRequestQueryParams } from "../model/github.types";

export class GithubRepository {
  constructor(private readonly http: IHttpClient) {}

  getUser<T = unknown>(username: string) {
    return this.http.get<T>(`https://api.github.com/users/${username}`);
  }

  getUserRepos<T = unknown>(username: string, params: RepoQueryParams = {}) {
    return this.http.get<T>(`https://api.github.com/users/${username}/repos`, {
      params: {
        per_page: 100,
        sort: "updated",
        ...params,
      },
    });
  }

  getRepoPullRequests<T = unknown>(
    username: string,
    repo: string,
    params: PullRequestQueryParams = {},
  ) {
    return this.http.get<T>(
      `https://api.github.com/repos/${username}/${repo}/pulls`,
      {
        params: {
          state: "closed",
          per_page: 30,
          ...params,
        },
      },
    );
  }

  async getRepoCommitActivity<T = unknown>(username: string, repo: string) {
    console.log(username,"username");
    const data= await this.http.get<T>(
      `https://api.github.com/repos/${username}/${repo}/stats/commit_activity`,
    );
    console.log(data,"data from repo");
    return data;
  }

  getPullRequestReviews<T = unknown>(username: string, repo: string, pullNumber: number) {
    return this.http.get<T>(
      `https://api.github.com/repos/${username}/${repo}/pulls/${pullNumber}/reviews`,
      {
        params: {
          per_page: 100,
        },
      }
    );
  }

  getPullRequestFiles<T = unknown>(username: string, repo: string, pullNumber: number) {
    return this.http.get<T>(
      `https://api.github.com/repos/${username}/${repo}/pulls/${pullNumber}/files`,
      {
        params: {
          per_page: 100,
        },
      }
    );
  }

  addRepoCollaborator<T = unknown>(username: string, repo: string, collaborator: string) {
    return this.http.put<T>(
      `https://api.github.com/repos/${username}/${repo}/collaborators/${collaborator}`,
      {}
    );
  }
}



