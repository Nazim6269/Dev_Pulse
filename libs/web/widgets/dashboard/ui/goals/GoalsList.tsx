import { Badge } from "@/widgets/dashboard/ui/goals/shared/Badge";
import { DashboardCard } from "@/widgets/dashboard/ui/goals/shared/DashboardCard";
import { SectionHeader } from "@/widgets/dashboard/ui/goals/shared/SectionHeader";
import { GoalItem } from "@/widgets/dashboard/ui/goals/GoalItem";
import {
  GoalItemModel,
  GoalStatsModel,
} from "../../model/goals/goals-dashboard.types";

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
