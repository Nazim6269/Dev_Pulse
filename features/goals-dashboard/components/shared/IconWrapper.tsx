import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const iconWrapperVariants = cva(
  "flex items-center justify-center rounded-xl",
  {
    variants: {
      tone: {
        violet: "bg-violet-400/15 text-violet-400",
        emerald: "bg-emerald-400/15 text-emerald-400",
        amber: "bg-amber-400/15 text-amber-400",
        rose: "bg-rose-400/15 text-rose-400",
        blue: "bg-blue-400/15 text-blue-400",
        neutral: "bg-white/[0.06] text-white/25",
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
