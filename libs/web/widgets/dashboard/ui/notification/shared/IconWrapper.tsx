import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const iconWrapperVariants = cva(
  "flex items-center justify-center rounded-xl",
  {
    variants: {
      tone: {
        violet: "bg-violet-500/15 text-violet-400",
        amber: "bg-amber-500/15 text-amber-400",
        emerald: "bg-emerald-500/15 text-emerald-400",
        rose: "bg-rose-500/15 text-rose-400",
        blue: "bg-blue-500/15 text-blue-400",
        neutral: "bg-muted/40 text-muted-foreground/40",
      },
      size: {
        sm: "h-8 w-8",
        md: "h-9 w-9",
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
      <Icon size={16} />
    </div>
  );
}
