"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function GoalTrackerSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 h-110 animate-pulse">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-8 w-8 rounded-xl" />
      </div>

      <div className="flex items-center gap-4">
        <Skeleton className="w-16 h-16 rounded-full shrink-0" />
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-3 w-28" />
        </div>
      </div>

      <div className="flex flex-col gap-2.5 mt-2 overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-3 rounded-full shrink-0" />
              <Skeleton className="h-3 w-36" />
            </div>
            <Skeleton className="ml-[21px] h-0.5 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
