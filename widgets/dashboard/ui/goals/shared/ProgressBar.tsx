import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { DashboardTone, ProgressSegment } from "../../../model/goals/goals-dashboard.types";

const progressTrackVariants = cva("overflow-hidden rounded-full bg-muted/50", {
  variants: {
    size: {
      sm: "h-1",
      md: "h-1.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const toneClass: Record<DashboardTone, string> = {
  violet: "bg-violet-500/80",
  emerald: "bg-emerald-500/80",
  amber: "bg-amber-500/80",
  rose: "bg-rose-500/80",
  blue: "bg-blue-500/80",
  neutral: "bg-muted",
};

export interface ProgressBarProps extends VariantProps<typeof progressTrackVariants> {
  segments: ProgressSegment[];
  className?: string;
}

export function ProgressBar({ segments, size, className }: ProgressBarProps) {
  return (
    <div className={cn(progressTrackVariants({ size }), className)}>
      <div className="flex h-full gap-px">
        {segments.map((segment) => (
          <div
            key={segment.id}
            className={cn("h-full", toneClass[segment.tone])}
            style={{ width: segment.width }}
          />
        ))}
      </div>
    </div>
  );
}
