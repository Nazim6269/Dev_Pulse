"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function TopReposSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 shadow-sm h-110 animate-pulse">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-14" />
      </div>
      <div className="flex flex-col gap-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border-muted"
          >
            <div className="flex-1 min-w-0 space-y-2">
              <Skeleton className="h-3 w-36" />
              <Skeleton className="h-3 w-48" />
              <div className="flex items-center gap-3">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-10" />
                <Skeleton className="h-3 w-10" />
              </div>
            </div>
            <div className="flex items-end gap-0.5 h-8 shrink-0">
              {[1, 2, 3, 4, 5, 6, 7].map((j) => (
                <Skeleton key={j} className="w-1 rounded-t-[1px]" style={{ height: `${Math.random() * 60 + 20}%` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
