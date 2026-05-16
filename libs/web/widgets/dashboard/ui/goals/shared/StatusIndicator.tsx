import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const statusIndicatorVariants = cva("inline-flex rounded-full", {
  variants: {
    tone: {
      violet: "bg-violet-400",
      emerald: "bg-emerald-400",
      amber: "bg-amber-400",
      rose: "bg-rose-400",
      blue: "bg-blue-400",
      neutral: "bg-white/25",
    },
    size: {
      sm: "h-2.5 w-2.5",
      md: "h-3 w-3",
    },
  },
  defaultVariants: {
    tone: "neutral",
    size: "sm",
  },
});

export interface StatusIndicatorProps
  extends VariantProps<typeof statusIndicatorVariants> {
  className?: string;
}

export function StatusIndicator({
  className,
  tone,
  size,
}: StatusIndicatorProps) {
  return <span className={cn(statusIndicatorVariants({ tone, size }), className)} />;
}
