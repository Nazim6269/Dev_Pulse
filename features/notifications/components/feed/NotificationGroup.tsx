import { NotificationItem } from "@/features/notifications/components/feed/NotificationItem";
import type { NotificationGroupModel } from "@/features/notifications/types/notification.types";

export function NotificationGroup({ group }: { group: NotificationGroupModel }) {
  return (
    <div className="mb-6">
      <p className="mb-3 px-1 text-[10px] uppercase tracking-widest text-white/25">
        {group.label}
      </p>
      <div className="flex flex-col gap-1">
        {group.items.map((item) => (
          <NotificationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
