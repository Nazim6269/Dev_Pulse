import { memo } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium",
  {
    variants: {
      variant: {
        role: "border-violet-500/25 bg-violet-500/15 text-violet-400",
        success: "border-emerald-500/25 bg-emerald-500/15 text-emerald-400",
        highlight: "border-amber-500/25 bg-amber-500/15 text-amber-400",
        neutral: "border-border/40 bg-muted/40 text-muted-foreground/60",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  className?: string;
}

export const Badge = memo(function Badge({
  children,
  className,
  variant,
}: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)}>{children}</span>;
});
