"use client";

import { memo, useMemo } from "react";
import { GitPullRequest } from "lucide-react";

import { ActionDropdown } from "@/components/pull-request/ActionDropdown";
import { ReviewerAvatars } from "@/components/pull-request/ReviewerAvatars";
import { StatusBadge } from "@/components/pull-request/StatusBadge";
import { cn } from "@/lib/utils";
import type {
  PullRequest,
  PullRequestAction,
  PullRequestStatus,
} from "@/types/pullRequest.types";

const STATUS_ACTION_MAP: Record<PullRequestStatus, PullRequestAction[]> = {
  open: [
    { label: "Mark as merged", value: "merged", variant: "primary" },
    { label: "Mark as closed", value: "closed", variant: "outline" },
  ],
  closed: [
    { label: "Reopen", value: "open", variant: "outline" },
    { label: "Mark as merged", value: "merged", variant: "primary" },
  ],
  merged: [
    { label: "Reopen", value: "open", variant: "outline" },
    { label: "Mark as closed", value: "closed", variant: "ghost" },
  ],
};

const sizeTone = {
  xs: "text-emerald-300",
  sm: "text-sky-300",
  md: "text-amber-300",
  lg: "text-rose-300",
} as const;

export interface PullRequestItemProps {
  pullRequest: PullRequest;
  onStatusChange?: (id: string, status: PullRequestStatus) => void | Promise<void>;
}

function PullRequestItemComponent({
  pullRequest,
  onStatusChange,
}: PullRequestItemProps) {
  const actions = useMemo(() => STATUS_ACTION_MAP[pullRequest.status], [pullRequest.status]);

  return (
    <article className="grid gap-4 rounded-2xl border border-white/6 bg-[#111114] p-4 transition-colors hover:bg-white/[0.03] md:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)_auto_auto_auto_auto] md:items-center">
      <div className="flex min-w-0 items-start gap-3">
        <div
          className={cn(
            "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
            pullRequest.status === "merged"
              ? "bg-emerald-500/10 text-emerald-300"
              : pullRequest.status === "open"
                ? "bg-amber-500/10 text-amber-300"
                : "bg-slate-500/10 text-slate-300",
          )}
        >
          <GitPullRequest className="size-4" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white/90">
            {pullRequest.title}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/40">
            <span className="font-mono">{pullRequest.repository}</span>
            <span>{pullRequest.branchName}</span>
            <span>Updated {pullRequest.updatedAt}</span>
          </div>
        </div>
      </div>

      <ReviewerAvatars reviewers={pullRequest.reviewers} />

      <StatusBadge status={pullRequest.status} size="sm" />

      <span className={cn("text-sm font-semibold uppercase", sizeTone[pullRequest.size])}>
        {pullRequest.size}
      </span>

      <div className="text-sm text-white/55">
        <span className="sr-only">Review count</span>
        {pullRequest.reviewCount} reviews
      </div>

      <div className="flex items-center justify-between gap-3 md:justify-end">
        <span className="font-mono text-sm text-white/50">{pullRequest.cycleTime}</span>
        <ActionDropdown
          label="Actions"
          size="sm"
          actions={actions}
          onActionSelect={(action) =>
            onStatusChange?.(pullRequest.id, action.value as PullRequestStatus)
          }
        />
      </div>
    </article>
  );
}

export const PullRequestItem = memo(PullRequestItemComponent);
