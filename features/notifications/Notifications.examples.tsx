import { NotificationItem } from "@/features/notifications/components/feed/NotificationItem";
import { NotificationGroup } from "@/features/notifications/components/feed/NotificationGroup";
import { FilterSidebar } from "@/features/notifications/components/sidebar/FilterSidebar";
import { NotificationStatsPanel } from "@/features/notifications/components/stats/NotificationStatsPanel";

export function NotificationItemExample() {
  return (
    <NotificationItem
      item={{
        id: "1",
        title: "Review requested on your PR",
        body: "Tasmia Nur requested your review on feat: add PR cycle time chart",
        repo: "devpulse/web",
        timeLabel: "2 min ago",
        read: false,
        type: "review_req",
        tone: "amber",
      }}
    />
  );
}

export function NotificationGroupExample() {
  return (
    <NotificationGroup
      group={{
        label: "Today",
        items: [
          {
            id: "1",
            title: "Review requested on your PR",
            body: "Requested your review",
            timeLabel: "2 min ago",
            read: false,
            type: "review_req",
            tone: "amber",
          },
        ],
      }}
    />
  );
}

export function FilterSidebarExample() {
  return (
    <FilterSidebar
      tabs={[
        {
          id: "all",
          label: "All",
          active: true,
          countLabel: "12",
          badgeVariant: "count",
        },
      ]}
      channels={[{ id: "in-app", label: "In-app", tone: "violet" }]}
      onFilterChange={() => undefined}
    />
  );
}

export function StatsPanelExample() {
  return (
    <NotificationStatsPanel
      weeklyStats={[{ label: "Reviews requested", count: 6, tone: "amber" }]}
      activityBars={[
        { id: "Mon", label: "Mon", height: "40%" },
        { id: "Tue", label: "Tue", height: "80%" },
      ]}
      quickSettings={[{ id: "push", label: "Push notifications", enabled: true }]}
    />
  );
}
