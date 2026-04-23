import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { ProgressSegment, ProgressTone } from "@/features/commits/types/commit.types";

const progressTrackVariants = cva("overflow-hidden rounded-full bg-muted/50", {
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
  violet: "bg-violet-500/70",
  rose: "bg-rose-500/70",
  amber: "bg-amber-500/70",
  blue: "bg-blue-500/50",
  emerald: "bg-emerald-500/70",
  neutral: "bg-muted",
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
