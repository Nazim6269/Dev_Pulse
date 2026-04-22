import { cva, type VariantProps } from "class-variance-authority";

import type { GoalState } from "@/features/goals-dashboard/types/goals-dashboard.types";
import { cn } from "@/lib/utils";

const goalStatusBadgeVariants = cva(
  "shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium",
  {
    variants: {
      state: {
        done: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
        active: "border-amber-400/20 bg-amber-400/10 text-amber-400",
        "at-risk": "border-rose-400/20 bg-rose-400/10 text-rose-400",
        pending: "border-white/[0.08] bg-white/[0.06] text-white/30",
      },
    },
  },
);

const stateLabelMap: Record<GoalState, string> = {
  done: "done",
  active: "in progress",
  "at-risk": "at risk",
  pending: "pending",
};

export interface GoalStatusBadgeProps
  extends VariantProps<typeof goalStatusBadgeVariants> {
  state: GoalState;
}

export function GoalStatusBadge({ state }: GoalStatusBadgeProps) {
  return (
    <span className={cn(goalStatusBadgeVariants({ state }))}>
      {stateLabelMap[state]}
    </span>
  );
}
