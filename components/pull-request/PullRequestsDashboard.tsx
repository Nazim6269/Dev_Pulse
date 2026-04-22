"use client";

import { useMemo } from "react";

import { PullRequestHeader } from "@/components/pull-request/PullRequestHeader";
import { PullRequestList } from "@/components/pull-request/PullRequestList";
import { StatusBadge } from "@/components/pull-request/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePullRequests } from "@/hooks/usePullRequests";

function SummaryCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "violet" | "amber" | "slate" | "emerald";
}) {
  const toneClass = {
    violet: "border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-200",
    amber: "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-200",
    slate: "border-slate-500/20 bg-slate-500/10 text-slate-600 dark:text-slate-200",
    emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-200",
  } as const;

  return (
    <Card className="rounded-2xl border-border bg-card shadow-sm transition-all duration-200">
      <CardContent className="p-5">
        <span
          className={`inline-flex rounded-full border px-2 py-1 text-xs font-medium ${toneClass[tone]}`}
        >
          {label}
        </span>
        <p className="mt-4 text-3xl font-semibold text-foreground tracking-tight">{value}</p>
      </CardContent>
    </Card>
  );
}

export function PullRequestsDashboard() {
  const {
    items,
    filters,
    summary,
    isLoading,
    error,
    setQuery,
    setStatus,
    refresh,
    updateStatus,
  } = usePullRequests();

  const statusBreakdown = useMemo(
    () => [
      { label: "Open", value: summary.open, status: "open" as const },
      { label: "Closed", value: summary.closed, status: "closed" as const },
      { label: "Merged", value: summary.merged, status: "merged" as const },
    ],
    [summary.closed, summary.merged, summary.open],
  );

  return (
    <div className="min-h-full bg-background px-4 py-6 text-foreground md:px-6 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <PullRequestHeader
          title="Pull Requests"
          description="Composable pull request management designed for dashboards, repo views, and team-level review workflows."
          totalCount={summary.total}
          query={filters.query}
          selectedStatus={filters.status}
          onQueryChange={setQuery}
          onStatusChange={setStatus}
          onHeaderAction={(value) => {
            if (value === "refresh") {
              void refresh();
            }
          }}
        />

        <section className="grid gap-4 md:grid-cols-4">
          <SummaryCard label="Total" value={summary.total} tone="violet" />
          <SummaryCard label="Open" value={summary.open} tone="amber" />
          <SummaryCard label="Closed" value={summary.closed} tone="slate" />
          <SummaryCard label="Merged" value={summary.merged} tone="emerald" />
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,2.5fr)_minmax(320px,1fr)]">
          <div className="space-y-4">
            <PullRequestList
              items={items}
              isLoading={isLoading}
              error={error}
              onRetry={() => void refresh()}
              onStatusChange={(id, status) => void updateStatus(id, status)}
            />
          </div>

          <Card className="rounded-3xl border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="text-base text-foreground font-semibold">Status Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {statusBreakdown.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-border bg-muted/30 px-4 py-3"
                >
                  <StatusBadge status={item.status} size="sm" variant="outline" />
                  <span className="text-lg font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
