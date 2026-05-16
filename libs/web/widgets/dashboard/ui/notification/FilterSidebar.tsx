import type {
  ChannelFilterData,
  NotificationFilter,
  NotificationFilterTabModel,
} from "../../model/notifications/notification.types";
import { ChannelFilterList, FilterTabButton } from "./";

export interface FilterSidebarProps {
  tabs: NotificationFilterTabModel[];
  channels: ChannelFilterData[];
  onFilterChange: (filter: NotificationFilter) => void;
}

export function FilterSidebar({
  tabs,
  channels,
  onFilterChange,
}: FilterSidebarProps) {
  return (
    <aside className="flex w-44 shrink-0 flex-col gap-1 border-r border-border/40 bg-primaryColor px-3 py-5">
      <p className="mb-2 px-3 text-[10px] uppercase tracking-widest text-muted-foreground/50">
        Filter
      </p>
      {tabs.map((tab) => (
        <FilterTabButton
          key={tab.id}
          item={tab}
          onClick={() => onFilterChange(tab.id)}
        />
      ))}
      <ChannelFilterList items={channels} />
    </aside>
  );
}
