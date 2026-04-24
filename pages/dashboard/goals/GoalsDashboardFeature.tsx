"use client";

import {
  useGoalFilters,
  useGoalStats,
  useAchievements,
  useCategories,
  useMilestones,
  useRecords,
  useTrendData,
  MonthlyProgressCard,
  GoalTrendChart,
  CategoryGrid,
  MilestoneList,
  AchievementFeed,
  RecordsGrid,
} from "@/widgets/dashboard";
import {
  GoalsHeader,
  DashboardGrid,
  DashboardSection,
} from "@/widgets/dashboard/ui/goals/shared";
import { GoalsList } from "@/widgets/dashboard/ui/goals/GoalsList";

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
              <RecordsGrid
                items={recordItems}
                highlightLabel={highlightLabel}
              />
            </DashboardSection>
          </DashboardGrid>
        </main>
      </div>
    </div>
  );
}

export default function DefaultExport() { return null; }

