"use client";

import { AchievementFeed } from "@/features/goals/components/achievements/AchievementFeed";
import { CategoryGrid } from "@/features/goals/components/categories/CategoryGrid";
import { GoalsList } from "@/features/goals/components/goals/GoalsList";
import { MilestoneList } from "@/features/goals/components/milestones/MilestoneList";
import { MonthlyProgressCard } from "@/features/goals/components/overview/MonthlyProgressCard";
import { RecordsGrid } from "@/features/goals/components/records/RecordsGrid";
import { DashboardGrid } from "@/features/goals/components/shared/DashboardGrid";
import { DashboardSection } from "@/features/goals/components/shared/DashboardSection";
import { GoalsHeader } from "@/features/goals/components/shared/GoalsHeader";
import { GoalTrendChart } from "@/features/goals/components/trends/GoalTrendChart";
import { useAchievements } from "@/features/goals/hooks/useAchievements";
import { useCategories } from "@/features/goals/hooks/useCategories";
import { useGoalFilters } from "@/features/goals/hooks/useGoalFilters";
import { useGoalStats } from "@/features/goals/hooks/useGoalStats";
import { useMilestones } from "@/features/goals/hooks/useMilestones";
import { useRecords } from "@/features/goals/hooks/useRecords";
import { useTrendData } from "@/features/goals/hooks/useTrendData";

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
