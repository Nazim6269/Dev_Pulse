import { IHttpClient } from "@/features/http-clients";
import { RepoQueryParams } from "../model/github.types";

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
}
