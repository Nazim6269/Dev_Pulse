import { memo } from "react";

import { ToggleSwitch } from "@/features/settings/components/shared/ToggleSwitch";

interface DensityToggleProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const DensityToggle = memo(function DensityToggle({
  checked,
  onCheckedChange,
}: DensityToggleProps) {
  return <ToggleSwitch checked={checked} onCheckedChange={onCheckedChange} />;
});

