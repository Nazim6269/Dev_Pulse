import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { DashboardTone, ProgressSegment } from "@/features/goals-dashboard/types/goals-dashboard.types";

const progressTrackVariants = cva("overflow-hidden rounded-full bg-white/[0.06]", {
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
  violet: "bg-violet-400/80",
  emerald: "bg-emerald-400/80",
  amber: "bg-amber-400/80",
  rose: "bg-rose-400/80",
  blue: "bg-blue-400/80",
  neutral: "bg-white/20",
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
