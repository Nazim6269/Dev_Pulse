import type { ComponentType } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { ProfileTone } from "@/features/profile/types/profile.types";

const iconWrapperVariants = cva("flex items-center justify-center rounded-xl", {
  variants: {
    tone: {
      violet: "bg-violet-500/15 text-violet-400",
      emerald: "bg-emerald-500/15 text-emerald-400",
      amber: "bg-amber-500/15 text-amber-400",
      rose: "bg-rose-500/15 text-rose-400",
      blue: "bg-blue-500/15 text-blue-400",
      neutral: "bg-muted/40 text-muted-foreground/50",
    },
    size: {
      sm: "h-7 w-7",
      md: "h-8 w-8",
      lg: "h-9 w-9",
    },
  },
  defaultVariants: {
    tone: "neutral",
    size: "md",
  },
});

interface IconWrapperProps
  extends VariantProps<typeof iconWrapperVariants> {
  icon: ComponentType<{ className?: string; size?: number }>;
  className?: string;
  tone?: ProfileTone;
}

export function IconWrapper({
  icon: Icon,
  className,
  size,
  tone,
}: IconWrapperProps) {
  const iconSize = size === "sm" ? 13 : size === "lg" ? 16 : 14;

  return (
    <div className={cn(iconWrapperVariants({ size, tone }), className)}>
      <Icon size={iconSize} />
    </div>
  );
}
