import { DashboardCard } from "@/features/goals-dashboard/components/shared/DashboardCard";
import { SectionHeader } from "@/features/goals-dashboard/components/shared/SectionHeader";
import { MilestoneItem } from "@/features/goals-dashboard/components/milestones/MilestoneItem";
import type { MilestoneItemModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

export function MilestoneList({ items }: { items: MilestoneItemModel[] }) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Upcoming milestones"
        description="Next 30 days"
      />
      <div className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <MilestoneItem key={item.id} item={item} />
        ))}
      </div>
    </DashboardCard>
  );
}
