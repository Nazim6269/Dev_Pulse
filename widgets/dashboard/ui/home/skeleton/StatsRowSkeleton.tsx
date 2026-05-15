"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function StatsRowSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-card border border-border rounded-2xl p-4 flex flex-col gap-3 shadow-sm animate-pulse h-[116px]"
        >
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-8 rounded-lg" />
          </div>
          <div className="flex items-end gap-2">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-3 w-16 mb-1.5" />
          </div>
          <div className="flex items-center gap-1.5 mt-auto">
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}
