import { GoalItem } from "@/features/goals/components/goals/GoalItem";
import { GoalTrendChart } from "@/features/goals/components/trends/GoalTrendChart";
import { CategoryGrid } from "@/features/goals/components/categories/CategoryGrid";
import { RecordCard } from "@/features/goals/components/records/RecordCard";
import { TrendingUp } from "lucide-react";

export function GoalItemExample() {
  return (
    <GoalItem
      item={{
        id: "goal-1",
        label: "Merge 20 PRs this month",
        category: "Shipping",
        progressLabel: "14 / 20",
        progressWidth: "70%",
        state: "active",
        tone: "amber",
        daysLeftLabel: "12d left",
      }}
    />
  );
}

export function TrendChartExample() {
  return (
    <GoalTrendChart
      bars={[
        { id: "W1", label: "W1", value: 1, height: "50%", isEmpty: false },
        { id: "W2", label: "W2", value: 0, height: "8%", isEmpty: true },
      ]}
      completedThisMonthLabel="6 this month"
      summary={[
        { id: "rate", label: "Completion rate", value: "75%", tone: "violet" },
      ]}
    />
  );
}

export function CategoryGridExample() {
  return (
    <CategoryGrid
      items={[
        {
          id: "quality",
          label: "Code quality",
          completedLabel: "3/3",
          tone: "violet",
          blocks: [
            { id: "1", filled: true, tone: "violet" },
            { id: "2", filled: true, tone: "violet" },
            { id: "3", filled: true, tone: "violet" },
          ],
        },
      ]}
      topCategory="Code quality (3 completed)"
    />
  );
}

export function RecordCardExample() {
  return (
    <RecordCard
      item={{
        id: "record",
        label: "Best single week",
        value: "72 commits",
        sublabel: "Week 6",
        icon: TrendingUp,
        tone: "violet",
      }}
    />
  );
}
