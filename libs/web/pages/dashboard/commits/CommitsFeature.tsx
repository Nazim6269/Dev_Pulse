"use client";

import { useCommitCharts, useCommitStats } from "@/entities/commit";
import { DashboardGrid, DashboardSection } from "@/shared/index";
import {
  CommitTypeDistribution,
  DailyCommitChart,
  TimeOfDayHeatmap,
  RecentCommitList,
  RepoCommitList,
  StatsGrid,
} from "@/widgets/dashboard";

export function CommitsFeature() {
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
    <div className="flex min-h-full overflow-hidden bg-primaryColor font-sans text-foreground transition-colors duration-300">
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
              <TimeOfDayHeatmap
                rows={timeOfDayRows}
                peakActivity={peakActivity}
              />
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

export default CommitsFeature;
