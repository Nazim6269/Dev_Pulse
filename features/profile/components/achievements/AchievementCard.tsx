import { memo } from "react";

import { IconWrapper } from "@/features/profile/components/shared/IconWrapper";
import type { AchievementModel } from "@/features/profile/types/profile.types";

function AchievementCardComponent({ item }: { item: AchievementModel }) {
  return (
    <div className="group flex cursor-default flex-col gap-2.5 rounded-xl border border-white/[0.05] bg-white/[0.03] p-3.5 transition-all hover:border-white/[0.10]">
      <IconWrapper icon={item.icon} tone={item.tone} size="lg" />
      <div>
        <p className="text-[12px] font-medium text-white/80 transition-colors group-hover:text-white">
          {item.label}
        </p>
        <p className="mt-0.5 text-[10px] text-white/35">{item.description}</p>
      </div>
    </div>
  );
}

export const AchievementCard = memo(AchievementCardComponent);
