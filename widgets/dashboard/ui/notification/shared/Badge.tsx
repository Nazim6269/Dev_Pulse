import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-medium",
  {
    variants: {
      variant: {
        count: "border-violet-400/20 bg-violet-400/10 text-violet-400/70",
        unread: "border-rose-500/30 bg-rose-500/20 text-rose-400",
        status: "border-border/40 bg-muted/40 text-muted-foreground/60",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-400",
        success: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
        neutral: "border-border/40 bg-muted/40 text-muted-foreground/60",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
