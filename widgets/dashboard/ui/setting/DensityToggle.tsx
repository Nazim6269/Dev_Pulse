import { memo } from "react";

import { ToggleSwitch } from "@/widgets/dashboard/ui/notification/shared/ToggleSwitch";

interface DensityToggleProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const DensityToggle = memo(function DensityToggle({
  checked,
  onCheckedChange,
}: DensityToggleProps) {
  return <ToggleSwitch enabled={checked} onChange={onCheckedChange} />;
});
