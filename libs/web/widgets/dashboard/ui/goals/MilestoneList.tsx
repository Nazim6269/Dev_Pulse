import type { MilestoneItemModel } from "../../model/goals/goals-dashboard.types";
import { DashboardCard } from "./shared/DashboardCard";
import { SectionHeader } from "./shared/SectionHeader";
import { MilestoneItem } from "./MilestoneItem";

export function MilestoneList({ items }: { items: MilestoneItemModel[] }) {
  return (
    <DashboardCard>
      <SectionHeader title="Upcoming milestones" description="Next 30 days" />
      <div className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <MilestoneItem key={item.id} item={item} />
        ))}
      </div>
    </DashboardCard>
  );
}
