import type {
  PullRequest,
  PullRequestQueryParams,
  PullRequestStatus,
} from "@/types/pullRequest.types";

export const MOCK_PULL_REQUESTS: PullRequest[] = [
  {
    id: "pr-101",
    title: "feat: add OAuth token refresh logic",
    repository: "devpulse/backend",
    branchName: "feature/oauth-refresh",
    status: "merged",
    size: "md",
    reviewCount: 3,
    cycleTime: "14h",
    updatedAt: "2h ago",
    reviewers: [
      { id: "r-1", name: "Nazim Uddin", initials: "NU" },
      { id: "r-2", name: "Lina Park", initials: "LP" },
      { id: "r-3", name: "Chris Hall", initials: "CH" },
    ],
  },
  {
    id: "pr-102",
    title: "fix: rate limiter edge case on burst",
    repository: "devpulse/api",
    branchName: "fix/rate-limit-burst",
    status: "merged",
    size: "sm",
    reviewCount: 2,
    cycleTime: "8h",
    updatedAt: "5h ago",
    reviewers: [
      { id: "r-4", name: "Sam Rao", initials: "SR" },
      { id: "r-5", name: "Ari Khan", initials: "AK" },
    ],
  },
  {
    id: "pr-103",
    title: "chore: upgrade Prisma to v5.8",
    repository: "devpulse/backend",
    branchName: "chore/prisma-5-8",
    status: "open",
    size: "xs",
    reviewCount: 1,
    cycleTime: "--",
    updatedAt: "1d ago",
    reviewers: [{ id: "r-6", name: "Mia Chen", initials: "MC" }],
  },
  {
    id: "pr-104",
    title: "feat: contribution heatmap component",
    repository: "devpulse/web",
    branchName: "feature/contribution-heatmap",
    status: "merged",
    size: "lg",
    reviewCount: 4,
    cycleTime: "26h",
    updatedAt: "3d ago",
    reviewers: [
      { id: "r-7", name: "Rafi Ahmed", initials: "RA" },
      { id: "r-8", name: "Dina Roy", initials: "DR" },
      { id: "r-9", name: "Leo Grant", initials: "LG" },
      { id: "r-10", name: "Tara Singh", initials: "TS" },
    ],
  },
  {
    id: "pr-105",
    title: "docs: update API auth examples",
    repository: "devpulse/docs",
    branchName: "docs/auth-examples",
    status: "open",
    size: "xs",
    reviewCount: 0,
    cycleTime: "--",
    updatedAt: "4h ago",
    reviewers: [],
  },
  {
    id: "pr-106",
    title: "refactor: extract GitHub service layer",
    repository: "devpulse/backend",
    branchName: "refactor/github-service",
    status: "closed",
    size: "md",
    reviewCount: 3,
    cycleTime: "18h",
    updatedAt: "6h ago",
    reviewers: [
      { id: "r-11", name: "Oli Bernard", initials: "OB" },
      { id: "r-12", name: "Rimsha Noor", initials: "RN" },
      { id: "r-13", name: "Alex Diaz", initials: "AD" },
    ],
  },
  {
    id: "pr-107",
    title: "fix: heatmap tooltip positioning",
    repository: "devpulse/web",
    branchName: "fix/heatmap-tooltip",
    status: "merged",
    size: "sm",
    reviewCount: 2,
    cycleTime: "6h",
    updatedAt: "8h ago",
    reviewers: [
      { id: "r-14", name: "Jaya Sen", initials: "JS" },
      { id: "r-15", name: "Nabil Hasan", initials: "NH" },
    ],
  },
];

let pullRequests = [...MOCK_PULL_REQUESTS];

function delay(ms = 180) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function matchesQuery(pr: PullRequest, query: string) {
  if (!query) {
    return true;
  }

  const normalizedQuery = query.trim().toLowerCase();
  return [pr.title, pr.repository, pr.branchName].some((value) =>
    value.toLowerCase().includes(normalizedQuery),
  );
}

export async function fetchPullRequests(
  params: PullRequestQueryParams = {},
): Promise<PullRequest[]> {
  await delay();

  const query = params.query ?? "";
  const status = params.status ?? "all";

  return pullRequests.filter((pr) => {
    const matchesStatus = status === "all" || pr.status === status;
    return matchesStatus && matchesQuery(pr, query);
  });
}

export async function updatePullRequestStatus(
  id: string,
  status: PullRequestStatus,
): Promise<PullRequest> {
  await delay(120);

  const nextPullRequests = pullRequests.map((pullRequest) =>
    pullRequest.id === id ? { ...pullRequest, status } : pullRequest,
  );
  const updatedPullRequest = nextPullRequests.find(
    (pullRequest) => pullRequest.id === id,
  );

  if (!updatedPullRequest) {
    throw new Error("Pull request not found.");
  }

  pullRequests = nextPullRequests;
  return updatedPullRequest;
}
