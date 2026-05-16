import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { Reviewer } from "@/types/pullRequest.types";

const avatarVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-[#111114] bg-violet-500/15 font-medium text-violet-200",
  {
    variants: {
      size: {
        sm: "h-6 w-6 text-[10px]",
        md: "h-7 w-7 text-xs",
        lg: "h-8 w-8 text-sm",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface ReviewerAvatarsProps
  extends VariantProps<typeof avatarVariants> {
  reviewers: Reviewer[];
  maxVisible?: number;
  emptyLabel?: string;
  className?: string;
}

export function ReviewerAvatars({
  reviewers,
  size,
  maxVisible = 3,
  emptyLabel = "No reviewers",
  className,
}: ReviewerAvatarsProps) {
  if (reviewers.length === 0) {
    return <span className="text-xs text-white/35">{emptyLabel}</span>;
  }

  const visibleReviewers = reviewers.slice(0, maxVisible);
  const hiddenCount = reviewers.length - visibleReviewers.length;

  return (
    <div className={cn("flex items-center", className)} aria-label="Reviewers">
      <div className="flex -space-x-2">
        {visibleReviewers.map((reviewer) => (
          <span
            key={reviewer.id}
            title={reviewer.name}
            aria-label={reviewer.name}
            className={cn(avatarVariants({ size }))}
          >
            {reviewer.initials}
          </span>
        ))}
      </div>
      {hiddenCount > 0 ? (
        <span className="ml-3 text-xs text-white/45">+{hiddenCount} more</span>
      ) : null}
    </div>
  );
}
