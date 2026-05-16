import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { PullRequestStatus } from "@/types/pullRequest.types";

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full border font-medium capitalize transition-colors",
  {
    variants: {
      status: {
        open: "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-300",
        closed: "border-slate-500/20 bg-slate-500/10 text-slate-600 dark:text-slate-300",
        merged: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm",
      },
      variant: {
        primary: "",
        outline: "bg-transparent",
        ghost: "border-transparent bg-muted/50 text-muted-foreground",
      },
    },
    defaultVariants: {
      status: "open",
      size: "md",
      variant: "primary",
    },
    compoundVariants: [
      {
        status: "open",
        variant: "outline",
        className: "text-amber-600 dark:text-amber-300",
      },
      {
        status: "closed",
        variant: "outline",
        className: "text-slate-600 dark:text-slate-300",
      },
      {
        status: "merged",
        variant: "outline",
        className: "text-emerald-600 dark:text-emerald-300",
      },
    ],
  },
);

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {
  status: PullRequestStatus;
}

export function StatusBadge({
  className,
  status,
  size,
  variant,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={cn(statusBadgeVariants({ status, size, variant }), className)}
      {...props}
    >
      {status}
    </span>
  );
}

export { statusBadgeVariants };
