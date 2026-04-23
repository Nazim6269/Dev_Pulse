import { DashboardCard } from "@/features/goals/components/shared/DashboardCard";
import { SectionHeader } from "@/features/goals/components/shared/SectionHeader";
import { AchievementItem } from "@/features/goals/components/achievements/AchievementItem";
import type { AchievementItemModel } from "@/features/goals/types/goals-dashboard.types";

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
