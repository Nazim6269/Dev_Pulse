import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const metricValueVariants = cva("font-semibold", {
  variants: {
    tone: {
      violet: "text-violet-600 dark:text-violet-400",
      emerald: "text-emerald-600 dark:text-emerald-400",
      amber: "text-amber-600 dark:text-amber-400",
      rose: "text-rose-600 dark:text-rose-400",
      blue: "text-blue-600 dark:text-blue-400",
      neutral: "text-foreground/80",
    },
    size: {
      sm: "text-[12px]",
      md: "text-[15px]",
      lg: "text-3xl tracking-tight",
    },
  },
  defaultVariants: {
    tone: "neutral",
    size: "md",
  },
});

export interface MetricValueProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof metricValueVariants> {}

export function MetricValue({
  className,
  tone,
  size,
  ...props
}: MetricValueProps) {
  return <p className={cn(metricValueVariants({ tone, size }), className)} {...props} />;
}
