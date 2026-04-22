import { memo } from "react";

import { GoalIcon } from "@/features/goals-dashboard/components/goals/GoalIcon";
import { GoalProgressBar } from "@/features/goals-dashboard/components/goals/GoalProgressBar";
import { GoalStatusBadge } from "@/features/goals-dashboard/components/goals/GoalStatusBadge";
import type { GoalItemModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

function GoalItemComponent({ item }: { item: GoalItemModel }) {
  return (
    <div className="group flex cursor-default items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/[0.03]">
      <GoalIcon state={item.state} />

      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center gap-2">
          <span
            className={
              item.state === "done"
                ? "truncate text-[12px] text-white/40 line-through"
                : "truncate text-[12px] text-white/75"
            }
          >
            {item.label}
          </span>
          <span className="shrink-0 rounded-md bg-white/[0.04] px-1.5 py-0.5 text-[9px] text-white/25">
            {item.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <GoalProgressBar width={item.progressWidth} tone={item.tone} />
          <span
            className={
              item.tone === "neutral"
                ? "shrink-0 text-[10px] text-white/35"
                : item.tone === "emerald"
                  ? "shrink-0 text-[10px] text-emerald-400"
                  : item.tone === "amber"
                    ? "shrink-0 text-[10px] text-amber-400"
                    : "shrink-0 text-[10px] text-rose-400"
            }
          >
            {item.progressLabel}
          </span>
        </div>
      </div>

      <GoalStatusBadge state={item.state} />

      {item.daysLeftLabel ? (
        <span className="shrink-0 text-[10px] text-white/25">{item.daysLeftLabel}</span>
      ) : null}
    </div>
  );
}

export const GoalItem = memo(GoalItemComponent);
