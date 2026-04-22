import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import { memo } from "react";

import { cn } from "@/lib/utils";

const iconWrapperVariants = cva("flex items-center justify-center rounded-xl", {
  variants: {
    tone: {
      primary: "bg-violet-400/15 text-violet-400",
      success: "bg-emerald-400/15 text-emerald-400",
      warning: "bg-amber-400/15 text-amber-400",
      danger: "bg-rose-400/15 text-rose-400",
      neutral: "bg-white/[0.08] text-white/60",
    },
    size: {
      md: "h-10 w-10",
      sm: "h-8 w-8",
    },
  },
  defaultVariants: {
    tone: "neutral",
    size: "md",
  },
});

interface IconWrapperProps extends VariantProps<typeof iconWrapperVariants> {
  className?: string;
  icon: LucideIcon;
}

export const IconWrapper = memo(function IconWrapper({
  className,
  icon: Icon,
  size,
  tone,
}: IconWrapperProps) {
  return (
    <div className={cn(iconWrapperVariants({ size, tone }), className)}>
      <Icon className="h-4 w-4" />
    </div>
  );
});

