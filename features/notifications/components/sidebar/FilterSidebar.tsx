import { ChannelFilterList } from "@/features/notifications/components/filters/ChannelFilterList";
import { FilterTabButton } from "@/features/notifications/components/filters/FilterTabButton";
import type {
  ChannelFilterData,
  NotificationFilter,
  NotificationFilterTabModel,
} from "@/features/notifications/types/notification.types";

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
    <aside className="flex w-44 shrink-0 flex-col gap-1 border-r border-white/[0.06] bg-[#0e0e11] px-3 py-5">
      <p className="mb-2 px-3 text-[10px] uppercase tracking-widest text-white/25">Filter</p>
      {tabs.map((tab) => (
        <FilterTabButton key={tab.id} item={tab} onClick={() => onFilterChange(tab.id)} />
      ))}
      <ChannelFilterList items={channels} />
    </aside>
  );
}
