import type { LucideIcon } from "lucide-react";

export type PullRequestStatus = "open" | "closed" | "merged";
export type PullRequestStatusFilter = PullRequestStatus | "all";
export type PullRequestSize = "xs" | "sm" | "md" | "lg";
export type PullRequestActionVariant = "primary" | "ghost" | "outline";

export interface Reviewer {
  id: string;
  name: string;
  initials: string;
}

export interface PullRequest {
  id: string;
  title: string;
  repository: string;
  branchName: string;
  status: PullRequestStatus;
  size: PullRequestSize;
  reviewCount: number;
  cycleTime: string;
  updatedAt: string;
  reviewers: Reviewer[];
}

export interface PullRequestAction {
  label: string;
  value: string;
  variant?: PullRequestActionVariant;
  disabled?: boolean;
}

export interface PullRequestFilterState {
  query: string;
  status: PullRequestStatusFilter;
}

export interface PullRequestQueryParams {
  query?: string;
  status?: PullRequestStatusFilter;
}

export interface PullRequestHeaderAction {
  label: string;
  value: string;
  icon?: LucideIcon;
  variant?: PullRequestActionVariant;
}
