import { DashboardCard } from "@/features/goals-dashboard/components/shared/DashboardCard";
import { SectionHeader } from "@/features/goals-dashboard/components/shared/SectionHeader";
import { AchievementItem } from "@/features/goals-dashboard/components/achievements/AchievementItem";
import type { AchievementItemModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

export function AchievementFeed({ items }: { items: AchievementItemModel[] }) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Achievement history"
        description="Past goal completions"
      />
      <div className="mt-5 flex flex-col divide-y divide-white/[0.04]">
        {items.map((item) => (
          <AchievementItem key={item.id} item={item} />
        ))}
      </div>
    </DashboardCard>
  );
}
