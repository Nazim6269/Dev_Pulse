import { cva } from "class-variance-authority";

import type { StreakStatModel } from "@/widgets/dashboard/model/profile/profile.types";

const streakValueVariants = cva("font-medium", {
  variants: {
    tone: {
      amber: "text-amber-400",
      emerald: "text-emerald-400",
    },
  },
});

export function StreakStats({ items }: { items: StreakStatModel[] }) {
  const streakItems = items.map((item) => (
    <div key={item.id} className="flex items-center gap-2">
      <item.icon size={13} className={item.tone === "amber" ? "text-amber-400" : "text-emerald-400"} />
      <span className="text-[12px] text-muted-foreground/80">
        {item.label}: <span className={streakValueVariants({ tone: item.tone })}>{item.value}</span>
      </span>
    </div>
  ));

  return <div className="mt-4 flex items-center gap-4 border-t border-border/40 pt-4">{streakItems}</div>;
}
