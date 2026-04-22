import { ChannelFilterItem } from "@/features/notifications/components/filters/ChannelFilterItem";
import type { ChannelFilterData } from "@/features/notifications/types/notification.types";

export function ChannelFilterList({ items }: { items: ChannelFilterData[] }) {
  return (
    <div className="mt-auto border-t border-white/[0.05] px-3 pt-4">
      <p className="mb-2 text-[10px] uppercase tracking-widest text-white/20">Channels</p>
      {items.map((item) => (
        <ChannelFilterItem key={item.id} item={item} />
      ))}
    </div>
  );
}
