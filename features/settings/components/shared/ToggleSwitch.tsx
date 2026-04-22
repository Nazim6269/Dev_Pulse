import { cva } from "class-variance-authority";
import { memo } from "react";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const switchVariants = cva(
  "data-[state=checked]:bg-violet-500 data-[state=unchecked]:bg-white/[0.10]",
);

interface ToggleSwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const ToggleSwitch = memo(function ToggleSwitch({
  checked,
  onCheckedChange,
}: ToggleSwitchProps) {
  return (
    <Switch
      checked={checked}
      className={cn(switchVariants())}
      onCheckedChange={onCheckedChange}
    />
  );
});

