import { cva, type VariantProps } from "class-variance-authority";
import { memo } from "react";

import { cn } from "@/lib/utils";

const toggleVariants = cva("relative h-4 w-8 rounded-full transition-colors", {
  variants: {
    enabled: {
      true: "bg-violet-500",
      false: "bg-border/60",
    },
  },
});

const knobVariants = cva(
  "absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all",
  {
    variants: {
      enabled: {
        true: "left-[18px]",
        false: "left-0.5",
      },
    },
  },
);

export interface ToggleSwitchProps extends VariantProps<typeof toggleVariants> {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export const ToggleSwitch = memo(function ToggleSwitch({
  enabled,
  onChange,
}: ToggleSwitchProps) {
  return (
    <div className={cn(toggleVariants({ enabled }))} onClick={() => onChange(!enabled)}>
      <span className={cn(knobVariants({ enabled }))} />
    </div>
  );
});
