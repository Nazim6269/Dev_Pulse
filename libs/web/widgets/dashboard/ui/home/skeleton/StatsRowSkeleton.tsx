"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function StatsRowSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full min-h-[160px]">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-card border border-border rounded-2xl p-5 flex flex-col justify-between shadow-sm animate-pulse h-full min-h-[160px]"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="w-9 h-9 rounded-xl bg-muted" />
            <div className="w-12 h-5 rounded-full bg-muted" />
          </div>
          <div className="space-y-2">
            <div className="h-8 w-16 rounded-md bg-muted" />
            <div className="h-3 w-24 rounded-md bg-muted" />
            <div className="h-2 w-16 rounded-md bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}
