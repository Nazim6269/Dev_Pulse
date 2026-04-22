import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { ProgressSegment, ProgressTone } from "@/features/commits-dashboard/types/commit.types";

const progressTrackVariants = cva("overflow-hidden rounded-full bg-white/[0.06]", {
  variants: {
    size: {
      sm: "h-1.5",
      md: "h-4 rounded-lg",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const toneClass: Record<ProgressTone, string> = {
  violet: "bg-violet-400/70",
  rose: "bg-rose-400/70",
  amber: "bg-amber-400/70",
  blue: "bg-blue-400/50",
  emerald: "bg-emerald-400/70",
  neutral: "bg-white/15",
};

export interface ProgressBarProps
  extends VariantProps<typeof progressTrackVariants> {
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
