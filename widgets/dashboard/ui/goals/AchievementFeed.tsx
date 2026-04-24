import { memo } from "react";

import { AchievementItem } from "./AchievementItem";
import type { AchievementItemModel } from "../../model/goals/goals-dashboard.types";
import { DashboardCard } from "./shared/DashboardCard";
import { SectionHeader } from "./shared/SectionHeader";

export const AchievementFeed = memo(function AchievementFeed({ items }: { items: AchievementItemModel[] }) {
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
});
