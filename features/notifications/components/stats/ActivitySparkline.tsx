import type { NotificationActivityBarModel } from "@/features/notifications/types/notification.types";

export function ActivitySparkline({
  items,
}: {
  items: NotificationActivityBarModel[];
}) {
  return (
    <>
      <div className="mb-2 flex h-14 items-end gap-1">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-1 rounded-t-sm bg-violet-500/30"
            style={{ height: item.height }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[9px] text-white/20">
        {items.map((item) => (
          <span key={item.id}>{item.label}</span>
        ))}
      </div>
    </>
  );
}
