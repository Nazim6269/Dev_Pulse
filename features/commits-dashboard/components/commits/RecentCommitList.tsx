import { RecentCommitItem } from "@/features/commits-dashboard/components/commits/RecentCommitItem";
import { DashboardCard } from "@/features/commits-dashboard/components/shared/DashboardCard";
import { SectionHeader } from "@/features/commits-dashboard/components/shared/SectionHeader";
import type { RecentCommitItemModel } from "@/features/commits-dashboard/types/commit.types";

export function RecentCommitList({ items }: { items: RecentCommitItemModel[] }) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Recent commits"
        action={
          <button className="text-[11px] text-violet-500/80 transition-colors hover:text-violet-500">
            View all {"->"}
          </button>
        }
      />
      <div className="mt-5">
        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground/60">No commits available.</p>
        ) : (
          <div className="flex flex-col divide-y divide-border-muted">
            {items.map((item) => (
              <RecentCommitItem key={item.hash} item={item} />
            ))}
          </div>
        )}
      </div>
    </DashboardCard>
  );
}
