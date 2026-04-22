import { memo } from "react";

import { AchievementBadge } from "@/features/goals-dashboard/components/achievements/AchievementBadge";
import type { AchievementItemModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

function AchievementItemComponent({ item }: { item: AchievementItemModel }) {
  return (
    <div className="group -mx-2 flex cursor-default items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-white/[0.02]">
      <AchievementBadge variant={item.badgeVariant} />
      <p className="flex-1 text-[12px] text-white/65 transition-colors group-hover:text-white/85">
        {item.label}
      </p>
      <span className="shrink-0 text-[10px] text-white/25">{item.dateLabel}</span>
    </div>
  );
}

export const AchievementItem = memo(AchievementItemComponent);
