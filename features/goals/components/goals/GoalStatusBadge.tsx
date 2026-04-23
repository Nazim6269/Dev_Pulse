import { cva, type VariantProps } from "class-variance-authority";

import type { GoalState } from "@/features/goals/types/goals-dashboard.types";
import { cn } from "@/lib/utils";

const goalStatusBadgeVariants = cva(
  "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-tight shadow-sm",
  {
    variants: {
      state: {
        done: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        active: "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400",
        "at-risk": "border-rose-500/20 bg-rose-500/10 text-rose-600 dark:text-rose-400",
        pending: "border-border bg-muted text-muted-foreground/60",
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
