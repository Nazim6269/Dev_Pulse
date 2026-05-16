import type { ChannelFilterData } from "../../model/notifications/notification.types";
import { ChannelFilterItem } from "./ChannelFilterItem";

export function ChannelFilterList({ items }: { items: ChannelFilterData[] }) {
  return (
    <div className="mt-auto border-t border-border/40 px-3 pt-4">
      <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground/40">Channels</p>
      {items.map((item) => (
        <ChannelFilterItem key={item.id} item={item} />
      ))}
    </div>
  );
}
