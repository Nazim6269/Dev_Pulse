import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium",
  {
    variants: {
      variant: {
        success: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
        warning: "border-amber-400/20 bg-amber-400/10 text-amber-400",
        danger: "border-rose-400/20 bg-rose-400/10 text-rose-400",
        info: "border-violet-400/20 bg-violet-400/10 text-violet-400",
        neutral: "border-white/[0.08] bg-white/[0.06] text-white/35",
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
