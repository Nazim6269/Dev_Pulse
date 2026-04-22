"use client";

import { CommitTypeDistribution } from "@/features/commits-dashboard/components/charts/CommitTypeDistribution";
import { DailyCommitChart } from "@/features/commits-dashboard/components/charts/DailyCommitChart";
import { TimeOfDayHeatmap } from "@/features/commits-dashboard/components/charts/TimeOfDayHeatmap";
import { RecentCommitList } from "@/features/commits-dashboard/components/commits/RecentCommitList";
import { RepoCommitList } from "@/features/commits-dashboard/components/repos/RepoCommitList";
import { DashboardGrid } from "@/features/commits-dashboard/components/shared/DashboardGrid";
import { DashboardSection } from "@/features/commits-dashboard/components/shared/DashboardSection";
import { StatsGrid } from "@/features/commits-dashboard/components/stats/StatsGrid";
import { useCommitCharts } from "@/features/commits-dashboard/hooks/useCommitCharts";
import { useCommitStats } from "@/features/commits-dashboard/hooks/useCommitStats";

export function CommitsDashboardFeature() {
  const { stats, activitySummary } = useCommitStats();
  const {
    dailyCommitVolume,
    commitDistribution,
    recentCommitItems,
    timeOfDayRows,
    peakActivity,
    repoItems,
  } = useCommitCharts();

  return (
    <div className="flex min-h-full overflow-hidden bg-background font-sans text-foreground transition-colors duration-300">
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-5">
          <DashboardGrid>
            <StatsGrid items={stats} />

            <DashboardSection className="md:col-span-8">
              <DailyCommitChart
                bars={dailyCommitVolume.bars}
                trendLabel={dailyCommitVolume.trendLabel}
              />
            </DashboardSection>

            <DashboardSection className="md:col-span-4">
              <CommitTypeDistribution
                items={commitDistribution.items}
                activeRepos={activitySummary.activeRepos}
                activeBranches={activitySummary.activeBranches}
              />
            </DashboardSection>

            <DashboardSection className="md:col-span-7">
              <RecentCommitList items={recentCommitItems} />
            </DashboardSection>

            <DashboardSection className="md:col-span-5">
              <TimeOfDayHeatmap rows={timeOfDayRows} peakActivity={peakActivity} />
            </DashboardSection>

            <DashboardSection>
              <RepoCommitList items={repoItems} />
            </DashboardSection>
          </DashboardGrid>
        </main>
      </div>
    </div>
  );
}
