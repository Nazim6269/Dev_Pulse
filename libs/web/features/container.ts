import { AxiosHttpClient } from "./axios-client";
import { tokenStore } from "./token-store";
import { AuthRepository, AuthService } from "./auth";
import { UserService } from "./commits/user/user.service";
import { UserRepository } from "./commits/user/user.repository";
import { GithubRepository } from "./github/api/github.repository";
import { GithubService } from "./github/model/github.service";

let _authService: AuthService;

const httpClient = new AxiosHttpClient(tokenStore, () =>
  _authService.refreshToken(),
);

const authRepository = new AuthRepository(httpClient);
_authService = new AuthService(authRepository);
export const authService = _authService;

const userRepository = new UserRepository(httpClient);
export const userService = new UserService(userRepository);
const githubRepository = new GithubRepository(httpClient);
export const githubService = new GithubService(githubRepository);

export { httpClient };

export interface AppContainer {
  authService: AuthService;
  userService: UserService;
  githubService: GithubService;
}

export const container: AppContainer = {
  authService,
  userService,
  githubService,
};
