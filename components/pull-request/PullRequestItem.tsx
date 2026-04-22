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
  xs: "text-emerald-600 dark:text-emerald-300",
  sm: "text-sky-600 dark:text-sky-300",
  md: "text-amber-600 dark:text-amber-300",
  lg: "text-rose-600 dark:text-rose-300",
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
    <article className="grid gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:bg-muted/50 md:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)_auto_auto_auto_auto] md:items-center shadow-sm">
      <div className="flex min-w-0 items-start gap-3">
        <div
          className={cn(
            "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
            pullRequest.status === "merged"
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : pullRequest.status === "open"
                ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                : "bg-slate-500/10 text-slate-600 dark:text-slate-400",
          )}
        >
          <GitPullRequest className="size-4" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {pullRequest.title}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="font-mono bg-muted px-1.5 py-0.5 rounded text-[10px]">{pullRequest.repository}</span>
            <span className="opacity-70">{pullRequest.branchName}</span>
            <span className="opacity-70">Updated {pullRequest.updatedAt}</span>
          </div>
        </div>
      </div>

      <ReviewerAvatars reviewers={pullRequest.reviewers} />

      <StatusBadge status={pullRequest.status} size="sm" />

      <span className={cn("text-[11px] font-bold uppercase tracking-wider", sizeTone[pullRequest.size])}>
        {pullRequest.size}
      </span>

      <div className="text-sm text-muted-foreground font-medium">
        <span className="sr-only">Review count</span>
        {pullRequest.reviewCount} reviews
      </div>

      <div className="flex items-center justify-between gap-3 md:justify-end">
        <span className="font-mono text-xs text-muted-foreground/80">{pullRequest.cycleTime}</span>
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
