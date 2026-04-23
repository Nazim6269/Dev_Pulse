import { DashboardCard } from "@/features/goals/components/shared/DashboardCard";
import { Badge } from "@/features/goals/components/shared/Badge";
import { SectionHeader } from "@/features/goals/components/shared/SectionHeader";
import { GoalItem } from "@/features/goals/components/goals/GoalItem";
import type { GoalItemModel, GoalStatsModel } from "@/features/goals/types/goals-dashboard.types";

export interface GoalsListProps {
  items: GoalItemModel[];
  stats: GoalStatsModel;
}

export function GoalsList({ items, stats }: GoalsListProps) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Active goals"
        action={
          <div className="flex gap-2">
            <Badge variant="success">{stats.doneCount} done</Badge>
            <Badge variant="warning">{stats.activeCount} active</Badge>
            <Badge variant="neutral">{stats.pendingCount} pending</Badge>
          </div>
        }
      />
      <div className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <GoalItem key={item.id} item={item} />
        ))}
      </div>
    </DashboardCard>
  );
}
