import { DashboardCard } from "./shared/DashboardCard";
import { SectionHeader } from "./shared/SectionHeader";
import { ActivityLegend } from "./ActivityLegend";
import { ActivityHeatmapGrid } from "./ActivityHeatmapGrid";
import type { ContributionActivityModel } from "../../model/profile/profile.types";
import { StreakStats } from "./StreakStats";

export function ContributionCalendar({
  activity,
}: {
  activity: ContributionActivityModel;
}) {
  return (
    <DashboardCard>
      <div className="mb-4 flex items-center justify-between">
        <SectionHeader
          title={activity.heading}
          description={activity.summary}
        />
        <ActivityLegend items={activity.legend} />
      </div>
      <ActivityHeatmapGrid rows={activity.rows} />
      <StreakStats items={activity.streakStats} />
    </DashboardCard>
  );
}
