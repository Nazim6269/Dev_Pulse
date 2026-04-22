import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { PullRequestStatus } from "@/types/pullRequest.types";

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full border font-medium capitalize transition-colors",
  {
    variants: {
      status: {
        open: "border-amber-400/20 bg-amber-400/10 text-amber-300",
        closed: "border-slate-400/20 bg-slate-400/10 text-slate-300",
        merged: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm",
      },
      variant: {
        primary: "",
        outline: "bg-transparent",
        ghost: "border-transparent bg-white/5 text-white/70",
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
        className: "text-amber-300",
      },
      {
        status: "closed",
        variant: "outline",
        className: "text-slate-300",
      },
      {
        status: "merged",
        variant: "outline",
        className: "text-emerald-300",
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
