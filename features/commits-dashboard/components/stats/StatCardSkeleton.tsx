import { DashboardCard } from "@/features/commits-dashboard/components/shared/DashboardCard";

export function StatCardSkeleton() {
  return (
    <DashboardCard className="animate-pulse">
      <div className="mb-4 flex items-start justify-between">
        <div className="h-9 w-9 rounded-xl bg-white/10" />
        <div className="h-5 w-14 rounded-full bg-white/10" />
      </div>
      <div className="h-8 w-16 rounded bg-white/10" />
      <div className="mt-3 h-3 w-20 rounded bg-white/10" />
      <div className="mt-2 h-3 w-24 rounded bg-white/10" />
    </DashboardCard>
  );
}
