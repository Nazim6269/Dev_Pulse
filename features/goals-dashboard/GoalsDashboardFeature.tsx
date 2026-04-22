"use client";

import { AchievementFeed } from "@/features/goals-dashboard/components/achievements/AchievementFeed";
import { CategoryGrid } from "@/features/goals-dashboard/components/categories/CategoryGrid";
import { GoalsList } from "@/features/goals-dashboard/components/goals/GoalsList";
import { MilestoneList } from "@/features/goals-dashboard/components/milestones/MilestoneList";
import { MonthlyProgressCard } from "@/features/goals-dashboard/components/overview/MonthlyProgressCard";
import { RecordsGrid } from "@/features/goals-dashboard/components/records/RecordsGrid";
import { DashboardGrid } from "@/features/goals-dashboard/components/shared/DashboardGrid";
import { DashboardSection } from "@/features/goals-dashboard/components/shared/DashboardSection";
import { GoalsHeader } from "@/features/goals-dashboard/components/shared/GoalsHeader";
import { GoalTrendChart } from "@/features/goals-dashboard/components/trends/GoalTrendChart";
import { useAchievements } from "@/features/goals-dashboard/hooks/useAchievements";
import { useCategories } from "@/features/goals-dashboard/hooks/useCategories";
import { useGoalFilters } from "@/features/goals-dashboard/hooks/useGoalFilters";
import { useGoalStats } from "@/features/goals-dashboard/hooks/useGoalStats";
import { useMilestones } from "@/features/goals-dashboard/hooks/useMilestones";
import { useRecords } from "@/features/goals-dashboard/hooks/useRecords";
import { useTrendData } from "@/features/goals-dashboard/hooks/useTrendData";

export function GoalsDashboardFeature() {
  const { selectedFilter, query, setQuery, setSelectedFilter, filteredGoals } =
    useGoalFilters();
  const { monthLabel, stats, progressRing, progressStats } = useGoalStats();
  const { bars, completedThisMonthLabel, summary } = useTrendData();
  const { items: categoryItems, topCategory } = useCategories();
  const { items: milestoneItems } = useMilestones();
  const { items: achievementItems } = useAchievements();
  const { items: recordItems, highlightLabel } = useRecords();

  return (
    <div className="flex min-h-full overflow-hidden bg-background font-sans text-foreground transition-colors duration-300">
      <div className="flex flex-1 flex-col overflow-hidden">
        <GoalsHeader
          selectedFilter={selectedFilter}
          query={query}
          onFilterChange={setSelectedFilter}
          onQueryChange={setQuery}
        />

        <main className="flex-1 overflow-y-auto p-5">
          <DashboardGrid>
            <DashboardSection className="md:col-span-4">
              <MonthlyProgressCard
                monthLabel={monthLabel}
                ring={progressRing}
                stats={progressStats}
              />
            </DashboardSection>

            <DashboardSection className="md:col-span-8">
              <GoalsList items={filteredGoals} stats={stats} />
            </DashboardSection>

            <DashboardSection className="md:col-span-7">
              <GoalTrendChart
                bars={bars}
                completedThisMonthLabel={completedThisMonthLabel}
                summary={summary}
              />
            </DashboardSection>

            <DashboardSection className="md:col-span-5">
              <CategoryGrid items={categoryItems} topCategory={topCategory} />
            </DashboardSection>

            <DashboardSection className="md:col-span-5">
              <MilestoneList items={milestoneItems} />
            </DashboardSection>

            <DashboardSection className="md:col-span-7">
              <AchievementFeed items={achievementItems} />
            </DashboardSection>

            <DashboardSection>
              <RecordsGrid items={recordItems} highlightLabel={highlightLabel} />
            </DashboardSection>
          </DashboardGrid>
        </main>
      </div>
    </div>
  );
}
