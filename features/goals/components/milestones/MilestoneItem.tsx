import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { MilestoneUrgencyBadge } from "@/features/goals/components/milestones/MilestoneUrgencyBadge";
import type { MilestoneItemModel } from "@/features/goals/types/goals-dashboard.types";

const milestoneItemVariants = cva(
  "flex cursor-default items-center gap-3 rounded-xl border bg-card/50 p-3 transition-all hover:bg-muted/50",
  {
    variants: {
      urgency: {
        low: "border-border",
        medium: "border-amber-500/20 bg-amber-500/5",
        high: "border-rose-500/20 bg-rose-500/5",
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
        <p className="truncate text-[12px] text-foreground/80 font-semibold">{item.label}</p>
        <p className="mt-0.5 text-[10px] text-muted-foreground/40 font-bold uppercase tracking-tight">{item.dateLabel}</p>
      </div>
      <MilestoneUrgencyBadge urgency={item.urgency} label={item.daysLeftLabel} />
    </div>
  );
}
