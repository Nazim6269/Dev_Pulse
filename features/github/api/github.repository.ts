import { IHttpClient } from "@/features/http-clients";

export class GithubRepository {
  constructor(private readonly http: IHttpClient) {}

  getUser(username: string) {
    return this.http.get(`https://api.github.com/users/${username}`);
  }
}
