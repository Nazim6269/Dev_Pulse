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
    violet: "border-violet-400/20 bg-violet-400/10 text-violet-200",
    amber: "border-amber-400/20 bg-amber-400/10 text-amber-200",
    slate: "border-slate-400/20 bg-slate-400/10 text-slate-200",
    emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  } as const;

  return (
    <Card className="rounded-2xl border-white/6 bg-[#111114] shadow-none">
      <CardContent className="p-5">
        <span
          className={`inline-flex rounded-full border px-2 py-1 text-xs ${toneClass[tone]}`}
        >
          {label}
        </span>
        <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
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
    <div className="min-h-screen bg-primaryColor px-4 py-6 text-white md:px-6">
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

          <Card className="rounded-3xl border-white/6 bg-[#111114] shadow-none">
            <CardHeader>
              <CardTitle className="text-base text-white">Status Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {statusBreakdown.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3"
                >
                  <StatusBadge status={item.status} size="sm" variant="outline" />
                  <span className="text-lg font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
