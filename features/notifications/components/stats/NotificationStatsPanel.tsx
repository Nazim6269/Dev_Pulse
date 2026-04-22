import { ActivitySparkline } from "@/features/notifications/components/stats/ActivitySparkline";
import { QuickSettingsPanel } from "@/features/notifications/components/stats/QuickSettingsPanel";
import { WeeklyStatsList } from "@/features/notifications/components/stats/WeeklyStatsList";
import { SectionHeader } from "@/features/notifications/components/shared/SectionHeader";
import type {
  NotificationActivityBarModel,
  QuickSetting,
  WeeklyStat,
} from "@/features/notifications/types/notification.types";

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
    <aside className="flex w-60 shrink-0 flex-col gap-5 border-l border-white/[0.06] bg-[#0e0e11] px-4 py-5">
      <div>
        <SectionHeader title="This week" />
        <div className="mt-3">
          <WeeklyStatsList items={weeklyStats} />
        </div>
      </div>

      <div className="border-t border-white/[0.05] pt-4">
        <SectionHeader title="Activity" />
        <div className="mt-3">
          <ActivitySparkline items={activityBars} />
        </div>
      </div>

      <div className="border-t border-white/[0.05] pt-4">
        <SectionHeader title="Quick settings" />
        <div className="mt-3">
          <QuickSettingsPanel items={quickSettings} />
        </div>
      </div>
    </aside>
  );
}
