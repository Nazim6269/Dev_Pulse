"use client";

import { Download, Filter, RefreshCw, Search } from "lucide-react";

import { ActionDropdown } from "@/widgets/dashboard/ui/pull-request/ActionDropdown";
import { Input } from "@/components/ui/input";
import type {
  PullRequestHeaderAction,
  PullRequestStatusFilter,
} from "@/types/pullRequest.types";
import { GenericSearch } from "@/components/common/search/GenericSearch";
import { MOCK_PULL_REQUESTS } from "@/services/pullRequest.service";

const searchPR = (query: string) => {
  const res = MOCK_PULL_REQUESTS.filter((pr) =>
    pr.title.toLowerCase().includes(query.toLowerCase()),
  );

  return res;
};

const STATUS_OPTIONS: { label: string; value: PullRequestStatusFilter }[] = [
  { label: "All statuses", value: "all" },
  { label: "Open", value: "open" },
  { label: "Closed", value: "closed" },
  { label: "Merged", value: "merged" },
];

const DEFAULT_HEADER_ACTIONS: PullRequestHeaderAction[] = [
  {
    label: "Filter presets",
    value: "filter",
    icon: Filter,
    variant: "outline",
  },
  { label: "Export list", value: "export", icon: Download, variant: "outline" },
  {
    label: "Refresh data",
    value: "refresh",
    icon: RefreshCw,
    variant: "ghost",
  },
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
    <header className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 shadow-sm">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {description ??
              "Monitor review flow, ownership, and PR status at a glance."}
          </p>
        </div>
        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-600 dark:text-violet-200 font-medium">
          {totalCount} results
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <GenericSearch
          placeholder="Search by title, repo, or branch"
          value={query}
          onChange={onQueryChange}
          onSelect={(items) => console.log(items)}
          debounceMs={300}
          minChars={1}
          onSearch={searchPR}
          size="md"
          // renderResult={(pr,q)=> <p>{pr.title} {q}</p>}
        />

        <div className="col-span-1 flex gap-3 sm:col-span-2 lg:col-span-2">
          <ActionDropdown
            label={
              STATUS_OPTIONS.find((option) => option.value === selectedStatus)
                ?.label ?? "Status"
            }
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
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-muted/50 px-4 text-sm text-foreground/80 transition-all hover:bg-muted hover:text-foreground active:scale-95"
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
