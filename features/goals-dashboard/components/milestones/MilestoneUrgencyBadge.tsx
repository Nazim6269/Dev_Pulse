import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { MilestoneUrgency } from "@/features/goals-dashboard/types/goals-dashboard.types";

const milestoneUrgencyBadgeVariants = cva(
  "shrink-0 text-[11px] font-medium",
  {
    variants: {
      urgency: {
        low: "text-white/50",
        medium: "text-amber-400",
        high: "text-rose-400",
      },
    },
  },
);

export interface MilestoneUrgencyBadgeProps
  extends VariantProps<typeof milestoneUrgencyBadgeVariants> {
  urgency: MilestoneUrgency;
  label: string;
}

export function MilestoneUrgencyBadge({
  urgency,
  label,
}: MilestoneUrgencyBadgeProps) {
  return <span className={cn(milestoneUrgencyBadgeVariants({ urgency }))}>{label}</span>;
}
