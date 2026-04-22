import { ToggleSwitch } from "@/features/notifications/components/shared/ToggleSwitch";
import type { QuickSetting } from "@/features/notifications/types/notification.types";

export function QuickSettingsPanel({ items }: { items: QuickSetting[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <span className="text-[11px] text-white/45">{item.label}</span>
          <ToggleSwitch enabled={item.enabled} />
        </div>
      ))}
    </div>
  );
}
