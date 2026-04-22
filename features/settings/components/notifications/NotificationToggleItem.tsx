import { memo } from "react";

import { FieldRow } from "@/features/settings/components/shared/FieldRow";
import { ToggleSwitch } from "@/features/settings/components/shared/ToggleSwitch";

interface NotificationToggleItemProps {
  description: string;
  enabled: boolean;
  label: string;
  onToggle: (enabled: boolean) => void;
}

export const NotificationToggleItem = memo(function NotificationToggleItem({
  description,
  enabled,
  label,
  onToggle,
}: NotificationToggleItemProps) {
  return (
    <FieldRow description={description} label={label}>
      <ToggleSwitch checked={enabled} onCheckedChange={onToggle} />
    </FieldRow>
  );
});

