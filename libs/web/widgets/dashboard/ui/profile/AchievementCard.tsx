import { memo } from "react";
import { AchievementModel } from "../../model/profile/profile.types";
import { IconWrapper } from "./shared/IconWrapper";



function AchievementCardComponent({ item }: { item: AchievementModel }) {
  return (
    <div className="group flex cursor-default flex-col gap-2.5 rounded-xl border border-border/30 bg-muted/30 p-3.5 transition-all hover:border-border/60">
      <IconWrapper icon={item.icon} tone={item.tone} size="lg" />
      <div>
        <p className="text-[12px] font-medium text-foreground/80 transition-colors group-hover:text-foreground">
          {item.label}
        </p>
        <p className="mt-0.5 text-[10px] text-muted-foreground/50">{item.description}</p>
      </div>
    </div>
  );
}

export const AchievementCard = memo(AchievementCardComponent);
