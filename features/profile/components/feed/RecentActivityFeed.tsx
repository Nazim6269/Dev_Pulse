import { DashboardCard } from "@/features/profile/components/shared/DashboardCard";
import { SectionHeader } from "@/features/profile/components/shared/SectionHeader";
import type { RecentActivityModel } from "@/features/profile/types/profile.types";

import { ActivityItem } from "./ActivityItem";

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
