"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function PRCycleCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-5 h-full shadow-sm animate-pulse">
      <div>
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-3 w-40 mt-1" />
      </div>

      {/* Big number */}
      <div className="flex items-end gap-2">
        <Skeleton className="h-12 w-16 rounded-md" />
        <Skeleton className="h-4 w-12 mb-1.5" />
      </div>

      {/* Progress phases */}
      <div className="flex flex-col gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-8" />
            </div>
            <Skeleton className="h-1 w-full rounded-full" />
          </div>
        ))}
      </div>

      {/* Comparison */}
      <div className="mt-auto grid grid-cols-2 gap-3">
        {[1, 2].map((i) => (
          <div key={i} className="bg-muted/50 rounded-xl p-3 flex flex-col items-center">
            <Skeleton className="h-4 w-10 mb-1" />
            <Skeleton className="h-3 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
