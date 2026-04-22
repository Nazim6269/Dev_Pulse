import { memo } from "react";

import { AchievementBadge } from "@/features/goals-dashboard/components/achievements/AchievementBadge";
import type { AchievementItemModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

function AchievementItemComponent({ item }: { item: AchievementItemModel }) {
  return (
    <div className="group -mx-2 flex cursor-default items-center gap-3 rounded-lg px-2 py-2 transition-all hover:bg-muted/50">
      <AchievementBadge variant={item.badgeVariant} />
      <p className="flex-1 text-[12px] text-foreground/70 transition-colors group-hover:text-foreground">
        {item.label}
      </p>
      <span className="shrink-0 text-[10px] text-muted-foreground/30 font-medium">{item.dateLabel}</span>
    </div>
  );
}

export const AchievementItem = memo(AchievementItemComponent);
