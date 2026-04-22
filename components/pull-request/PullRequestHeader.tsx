"use client";

import { Download, Filter, RefreshCw } from "lucide-react";

import { ActionDropdown } from "@/components/pull-request/ActionDropdown";
import { Input } from "@/components/ui/input";
import type {
  PullRequestHeaderAction,
  PullRequestStatusFilter,
} from "@/types/pullRequest.types";

const STATUS_OPTIONS: { label: string; value: PullRequestStatusFilter }[] = [
  { label: "All statuses", value: "all" },
  { label: "Open", value: "open" },
  { label: "Closed", value: "closed" },
  { label: "Merged", value: "merged" },
];

const DEFAULT_HEADER_ACTIONS: PullRequestHeaderAction[] = [
  { label: "Filter presets", value: "filter", icon: Filter, variant: "outline" },
  { label: "Export list", value: "export", icon: Download, variant: "outline" },
  { label: "Refresh data", value: "refresh", icon: RefreshCw, variant: "ghost" },
];

export interface PullRequestHeaderProps {
  title: string;
  description?: string;
  totalCount: number;
  query: string;
  selectedStatus: PullRequestStatusFilter;
  onQueryChange: (query: string) => void;
  onStatusChange: (status: PullRequestStatusFilter) => void;
  onHeaderAction?: (value: string) => void;
  actions?: PullRequestHeaderAction[];
}

export function PullRequestHeader({
  title,
  description,
  totalCount,
  query,
  selectedStatus,
  onQueryChange,
  onStatusChange,
  onHeaderAction,
  actions = DEFAULT_HEADER_ACTIONS,
}: PullRequestHeaderProps) {
  return (
    <header className="flex flex-col gap-4 rounded-3xl border border-white/6 bg-[#111114] p-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <p className="mt-1 text-sm text-white/45">
            {description ?? "Monitor review flow, ownership, and PR status at a glance."}
          </p>
        </div>
        <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">
          {totalCount} results
        </span>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <Input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by title, repo, or branch"
          aria-label="Search pull requests"
          className="h-10 border-white/10 bg-white/5 text-white placeholder:text-white/35"
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <ActionDropdown
            label={STATUS_OPTIONS.find((option) => option.value === selectedStatus)?.label ?? "Status"}
            size="lg"
            actions={STATUS_OPTIONS.map((option) => ({
              label: option.label,
              value: option.value,
            }))}
            onActionSelect={(action) =>
              onStatusChange(action.value as PullRequestStatusFilter)
            }
            className="min-w-40"
          />

          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.value}
                type="button"
                onClick={() => onHeaderAction?.(action.value)}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {Icon ? <Icon className="size-4" /> : null}
                {action.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
