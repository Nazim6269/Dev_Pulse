import { memo } from "react";

import { ToggleSwitch } from "@/widgets/dashboard/ui/notification/shared/ToggleSwitch";
import { FieldRow } from "./shared/FieldRow";

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
      <ToggleSwitch enabled={enabled} onChange={onToggle} />
    </FieldRow>
  );
});
