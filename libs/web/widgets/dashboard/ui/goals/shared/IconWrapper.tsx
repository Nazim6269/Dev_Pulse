import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const iconWrapperVariants = cva(
  "flex items-center justify-center rounded-xl transition-colors duration-200",
  {
    variants: {
      tone: {
        violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
        emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
        blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        neutral: "bg-muted text-muted-foreground/40",
      },
      size: {
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-9 w-9",
      },
    },
    defaultVariants: {
      tone: "neutral",
      size: "md",
    },
  },
);

export interface IconWrapperProps
  extends VariantProps<typeof iconWrapperVariants> {
  icon: LucideIcon;
  className?: string;
}

export function IconWrapper({
  icon: Icon,
  className,
  tone,
  size,
}: IconWrapperProps) {
  return (
    <div className={cn(iconWrapperVariants({ tone, size }), className)}>
      <Icon className="h-3.5 w-3.5" />
    </div>
  );
}
