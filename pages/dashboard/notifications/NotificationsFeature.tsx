"use client";

import {
  useNotificationActivity,
  useNotificationFilters,
  useNotificationGroups,
  useNotificationStats,
  NotificationFeed,
  NotificationStatsPanel,
} from "@/widgets/dashboard";
import {
  FilterSidebar,
  NotificationsHeader,
} from "@/widgets/dashboard/ui/notification";

export function NotificationsFeature() {
  const { unreadCount, tabs, channels, setFilter, items } =
    useNotificationFilters();
  const { groups, urgentNotification } = useNotificationGroups(items);
  const { weeklyStats } = useNotificationStats();
  const { bars, quickSettings } = useNotificationActivity();

  return (
    <div className="flex h-screen overflow-hidden bg-primaryColor font-sans text-foreground">
      <div className="flex flex-1 flex-col overflow-hidden">
        <NotificationsHeader unreadCount={unreadCount} />

        <div className="flex flex-1 overflow-hidden">
          <FilterSidebar
            tabs={tabs}
            channels={channels}
            onFilterChange={setFilter}
          />
          <NotificationFeed
            groups={groups}
            urgentNotification={urgentNotification}
          />
          <NotificationStatsPanel
            weeklyStats={weeklyStats}
            activityBars={bars}
            quickSettings={quickSettings}
          />
        </div>
      </div>
    </div>
  );
}
