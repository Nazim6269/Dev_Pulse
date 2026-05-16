import { ActivitySparkline,QuickSettingsPanel ,WeeklyStatsList} from "./";
import type {
  NotificationActivityBarModel,
  QuickSetting,
  WeeklyStat,
} from "@/widgets/dashboard/model/notifications/notification.types";
import { SectionHeader } from "./shared/SectionHeader";

export interface NotificationStatsPanelProps {
  weeklyStats: WeeklyStat[];
  activityBars: NotificationActivityBarModel[];
  quickSettings: QuickSetting[];
}

export function NotificationStatsPanel({
  weeklyStats,
  activityBars,
  quickSettings,
}: NotificationStatsPanelProps) {
  return (
    <aside className="flex w-60 shrink-0 flex-col gap-5 border-l border-border/40 bg-primaryColor px-4 py-5">
      <div>
        <SectionHeader title="This week" />
        <div className="mt-3">
          <WeeklyStatsList items={weeklyStats} />
        </div>
      </div>

      <div className="border-t border-border/40 pt-4">
        <SectionHeader title="Activity" />
        <div className="mt-3">
          <ActivitySparkline items={activityBars} />
        </div>
      </div>

      <div className="border-t border-border/40 pt-4">
        <SectionHeader title="Quick settings" />
        <div className="mt-3">
          <QuickSettingsPanel items={quickSettings} />
        </div>
      </div>
    </aside>
  );
}
