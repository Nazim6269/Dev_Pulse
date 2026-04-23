import { memo } from "react";

import { GoalIcon } from "@/features/goals/components/goals/GoalIcon";
import { GoalProgressBar } from "@/features/goals/components/goals/GoalProgressBar";
import { GoalStatusBadge } from "@/features/goals/components/goals/GoalStatusBadge";
import type { GoalItemModel } from "@/features/goals/types/goals-dashboard.types";

function GoalItemComponent({ item }: { item: GoalItemModel }) {
  return (
    <div className="group flex cursor-default items-center gap-4 rounded-xl p-3 transition-all hover:bg-muted/50 border border-transparent hover:border-border/50">
      <GoalIcon state={item.state} />

      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center gap-2">
          <span
            className={
              item.state === "done"
                ? "truncate text-[12px] text-muted-foreground/40 line-through font-medium"
                : "truncate text-[12px] text-foreground/80 font-semibold"
            }
          >
            {item.label}
          </span>
          <span className="shrink-0 rounded-md bg-muted px-1.5 py-0.5 text-[9px] text-muted-foreground/60 font-bold uppercase tracking-tighter">
            {item.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <GoalProgressBar width={item.progressWidth} tone={item.tone} />
          <span
            className={
              item.tone === "neutral"
                ? "shrink-0 text-[10px] text-muted-foreground/50 font-bold"
                : item.tone === "emerald"
                  ? "shrink-0 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold"
                  : item.tone === "amber"
                    ? "shrink-0 text-[10px] text-amber-600 dark:text-amber-400 font-bold"
                    : "shrink-0 text-[10px] text-rose-600 dark:text-rose-400 font-bold"
            }
          >
            {item.progressLabel}
          </span>
        </div>
      </div>

      <GoalStatusBadge state={item.state} />

      {item.daysLeftLabel ? (
        <span className="shrink-0 text-[10px] text-muted-foreground/30 font-medium">{item.daysLeftLabel}</span>
      ) : null}
    </div>
  );
}

export const GoalItem = memo(GoalItemComponent);
