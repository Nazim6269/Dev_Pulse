import type { RecentActivityModel } from "../../model/profile/profile.types";


import { ActivityItem } from "./ActivityItem";
import { DashboardCard } from "./shared/DashboardCard";
import { SectionHeader } from "./shared/SectionHeader";

export function RecentActivityFeed({ items }: { items: RecentActivityModel[] }) {
  const activityItems = items.map((item) => <ActivityItem key={item.id} item={item} />);

  return (
    <DashboardCard>
      <div className="mb-4">
        <SectionHeader title="Recent activity" />
      </div>
      <div className="flex flex-col">{activityItems}</div>
    </DashboardCard>
  );
}
