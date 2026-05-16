import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const statusIndicatorVariants = cva(
  "inline-block rounded-full border-2 border-[#111114]",
  {
    variants: {
      status: {
        online: "bg-emerald-400",
        away: "bg-amber-400",
        offline: "bg-white/20",
      },
      size: {
        sm: "h-2.5 w-2.5",
        md: "h-3 w-3",
      },
    },
    defaultVariants: {
      status: "offline",
      size: "md",
    },
  },
);

export interface StatusIndicatorProps
  extends VariantProps<typeof statusIndicatorVariants> {
  className?: string;
}

export function StatusIndicator({
  className,
  status,
  size,
}: StatusIndicatorProps) {
  return <span className={cn(statusIndicatorVariants({ status, size }), className)} />;
}
