import {
  NotificationItem,
  NotificationGroup,
  NotificationStatsPanel,
} from "@/widgets/dashboard";
import { FilterSidebar } from "@/widgets/dashboard/ui/notification";

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
      quickSettings={[
        { id: "push", label: "Push notifications", enabled: true, onChange: () => { } },
        { id: "digest", label: "Email digest", enabled: false, onChange: () => { } },
        { id: "slack", label: "Slack alerts", enabled: false, onChange: () => { } },
      ]}
    />
  );
}

export default function DefaultExport() { return null; }

