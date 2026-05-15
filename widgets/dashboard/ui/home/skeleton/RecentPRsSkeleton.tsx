"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function RecentPRsSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 shadow-sm h-110 animate-pulse">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-3 w-14" />
      </div>
      <div className="flex flex-col divide-y divide-border-muted">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="py-3 flex items-start gap-3">
            <Skeleton className="mt-0.5 w-7 h-7 rounded-lg shrink-0" />
            <div className="flex-1 min-w-0 space-y-2">
              <Skeleton className="h-3 w-[80%]" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <Skeleton className="h-5 w-12 rounded-full shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
