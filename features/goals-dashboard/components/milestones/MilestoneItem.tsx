import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { MilestoneUrgencyBadge } from "@/features/goals-dashboard/components/milestones/MilestoneUrgencyBadge";
import type { MilestoneItemModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

const milestoneItemVariants = cva(
  "flex cursor-default items-center gap-3 rounded-xl border bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.05]",
  {
    variants: {
      urgency: {
        low: "border-white/[0.08]",
        medium: "border-amber-400/30",
        high: "border-rose-400/30",
      },
    },
  },
);

export interface MilestoneItemProps
  extends VariantProps<typeof milestoneItemVariants> {
  item: MilestoneItemModel;
}

export function MilestoneItem({ item }: MilestoneItemProps) {
  return (
    <div className={cn(milestoneItemVariants({ urgency: item.urgency }))}>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12px] text-white/70">{item.label}</p>
        <p className="mt-0.5 text-[10px] text-white/30">{item.dateLabel}</p>
      </div>
      <MilestoneUrgencyBadge urgency={item.urgency} label={item.daysLeftLabel} />
    </div>
  );
}
