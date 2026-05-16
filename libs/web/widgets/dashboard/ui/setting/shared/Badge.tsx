import { cva, type VariantProps } from "class-variance-authority";
import { memo } from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium",
  {
    variants: {
      tone: {
        primary: "border-violet-400/20 bg-violet-400/15 text-violet-400",
        success: "border-emerald-400/20 bg-emerald-400/15 text-emerald-400",
        warning: "border-amber-400/20 bg-amber-400/15 text-amber-400",
        danger: "border-rose-400/25 bg-rose-400/15 text-rose-400",
        neutral: "border-border/40 bg-muted/40 text-muted-foreground/60",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  },
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  className?: string;
}

export const Badge = memo(function Badge({ children, className, tone }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)}>{children}</span>;
});

