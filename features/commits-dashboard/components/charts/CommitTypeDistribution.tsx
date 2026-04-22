import { DashboardCard } from "@/features/commits-dashboard/components/shared/DashboardCard";
import { ProgressBar } from "@/features/commits-dashboard/components/shared/ProgressBar";
import { SectionHeader } from "@/features/commits-dashboard/components/shared/SectionHeader";
import type { CommitDistributionItemModel } from "@/features/commits-dashboard/types/commit.types";

export function CommitTypeDistribution({
  items,
  activeRepos,
  activeBranches,
}: {
  items: CommitDistributionItemModel[];
  activeRepos: number;
  activeBranches: number;
}) {
  return (
    <DashboardCard className="h-full">
      <SectionHeader
        title="Commit types"
        description="Conventional commits breakdown"
      />
      <div className="mt-5 flex h-full flex-col gap-4">
        <div className="flex flex-col gap-2.5">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <span className="w-16 font-mono text-[10px] text-white/50">{item.label}</span>
              <ProgressBar segments={item.segments} className="flex-1" />
              <span className="w-8 text-right text-[11px] text-white/45">{item.count}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/[0.04] p-3 text-center">
            <p className="text-[14px] font-semibold text-white/80">{activeRepos}</p>
            <p className="mt-0.5 text-[10px] text-white/30">Active repos</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-3 text-center">
            <p className="text-[14px] font-semibold text-white/80">{activeBranches}</p>
            <p className="mt-0.5 text-[10px] text-white/30">Active branches</p>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
