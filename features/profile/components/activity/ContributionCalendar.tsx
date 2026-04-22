import { DashboardCard } from "@/features/profile/components/shared/DashboardCard";
import { SectionHeader } from "@/features/profile/components/shared/SectionHeader";
import type { ContributionActivityModel } from "@/features/profile/types/profile.types";

import { ActivityHeatmapGrid } from "./ActivityHeatmapGrid";
import { ActivityLegend } from "./ActivityLegend";
import { StreakStats } from "./StreakStats";

export function ContributionCalendar({ activity }: { activity: ContributionActivityModel }) {
  return (
    <DashboardCard>
      <div className="mb-4 flex items-center justify-between">
        <SectionHeader title={activity.heading} description={activity.summary} />
        <ActivityLegend items={activity.legend} />
      </div>
      <ActivityHeatmapGrid rows={activity.rows} />
      <StreakStats items={activity.streakStats} />
    </DashboardCard>
  );
}
