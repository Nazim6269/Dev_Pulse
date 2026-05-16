import type { RecentCommitItemModel } from "@/entities/commit";
import { DashboardCard } from "@/shared/ui/dashboard/DashboardCard";
import { SectionHeader } from "@/shared/ui/dashboard/SectionHeader";
import { RecentCommitItem } from "@/widgets/dashboard/ui/commit/RecentCommitItem";

export function RecentCommitList({ items }: { items: RecentCommitItemModel[] }) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Recent commits"
        action={
          <button className="text-[11px] text-orangeColor/80 transition-colors hover:text-orangeColor">
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
