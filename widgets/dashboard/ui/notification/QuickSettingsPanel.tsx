import { ToggleSwitch } from "./shared/ToggleSwitch";
import type { QuickSetting } from "@/widgets/dashboard/model/notifications/notification.types";

export function QuickSettingsPanel({ items }: { items: QuickSetting[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground/60">{item.label}</span>
          <ToggleSwitch enabled={item.enabled} />
        </div>
      ))}
    </div>
  );
}
