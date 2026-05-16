import type { CommitDistributionItemModel } from "@/entities/commit";
import { DashboardCard } from "@/shared/ui/dashboard/DashboardCard";
import { ProgressBar } from "@/shared/ui/dashboard/ProgressBar";
import { SectionHeader } from "@/shared/ui/dashboard/SectionHeader";

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
              <span className="w-16 font-mono text-[10px] text-muted-foreground/60">{item.label}</span>
              <ProgressBar segments={item.segments} className="flex-1" />
              <span className="w-8 text-right text-[11px] text-muted-foreground">{item.count}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-muted/50 p-3 text-center">
            <p className="text-[14px] font-semibold text-foreground/80">{activeRepos}</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground/50">Active repos</p>
          </div>
          <div className="rounded-xl bg-muted/50 p-3 text-center">
            <p className="text-[14px] font-semibold text-foreground/80">{activeBranches}</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground/50">Active branches</p>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
