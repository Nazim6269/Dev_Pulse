"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileCardSkeleton() {
  return (
    <div className="h-full bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 shadow-sm animate-pulse">
      {/* Top section */}
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <Skeleton className="w-14 h-14 rounded-full" />

          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-muted border-2 border-card" />
        </div>

        <div className="flex-1 min-w-0 space-y-2">
          <Skeleton className="h-4 w-32" />

          <Skeleton className="h-3 w-20" />

          <div className="flex items-center gap-3 mt-2">
            <Skeleton className="h-5 w-12 rounded-full" />

            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-[90%]" />
        <Skeleton className="h-3 w-[70%]" />
      </div>

      {/* Link */}
      <div className="flex items-center gap-2">
        <Skeleton className="w-4 h-4 rounded" />
        <Skeleton className="h-3 w-28" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-muted/50 rounded-xl p-2.5 flex flex-col items-center gap-2"
          >
            <Skeleton className="h-5 w-10" />

            <Skeleton className="h-3 w-14" />
          </div>
        ))}
      </div>

      {/* Top languages */}
      <div>
        <Skeleton className="h-3 w-24 mb-3" />

        <div className="flex flex-wrap gap-1.5">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-muted/30 border border-border rounded-lg px-2.5 py-1"
            >
              <Skeleton className="w-2 h-2 rounded-full" />

              <Skeleton className="h-3 w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
