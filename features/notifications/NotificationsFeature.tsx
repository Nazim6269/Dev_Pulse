"use client";

import { NotificationFeed } from "@/features/notifications/components/feed/NotificationFeed";
import { FilterSidebar } from "@/features/notifications/components/sidebar/FilterSidebar";
import { NotificationsHeader } from "@/features/notifications/components/sidebar/NotificationsHeader";
import { NotificationStatsPanel } from "@/features/notifications/components/stats/NotificationStatsPanel";
import { useNotificationActivity } from "@/features/notifications/hooks/useNotificationActivity";
import { useNotificationFilters } from "@/features/notifications/hooks/useNotificationFilters";
import { useNotificationGroups } from "@/features/notifications/hooks/useNotificationGroups";
import { useNotificationStats } from "@/features/notifications/hooks/useNotificationStats";

export function NotificationsFeature() {
  const { unreadCount, tabs, channels, setFilter, items } = useNotificationFilters();
  const { groups, urgentNotification } = useNotificationGroups(items);
  const { weeklyStats } = useNotificationStats();
  const { bars, quickSettings } = useNotificationActivity();

  return (
    <div className="flex h-screen overflow-hidden bg-primaryColor font-sans text-white">
      <div className="flex flex-1 flex-col overflow-hidden">
        <NotificationsHeader unreadCount={unreadCount} />

        <div className="flex flex-1 overflow-hidden">
          <FilterSidebar tabs={tabs} channels={channels} onFilterChange={setFilter} />
          <NotificationFeed groups={groups} urgentNotification={urgentNotification} />
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
