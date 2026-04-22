import { Badge } from "@/features/goals-dashboard/components/shared/Badge";
import { DashboardCard } from "@/features/goals-dashboard/components/shared/DashboardCard";
import { SectionHeader } from "@/features/goals-dashboard/components/shared/SectionHeader";
import { TrendBar } from "@/features/goals-dashboard/components/trends/TrendBar";
import { TrendSummary } from "@/features/goals-dashboard/components/trends/TrendSummary";
import type {
  TrendBarModel,
  TrendSummaryItem,
} from "@/features/goals-dashboard/types/goals-dashboard.types";

export interface GoalTrendChartProps {
  bars: TrendBarModel[];
  completedThisMonthLabel: string;
  summary: TrendSummaryItem[];
}

export function GoalTrendChart({
  bars,
  completedThisMonthLabel,
  summary,
}: GoalTrendChartProps) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Goal completion trend"
        description="Goals completed per week"
        action={<Badge variant="info">{completedThisMonthLabel}</Badge>}
      />
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex h-28 items-end gap-3">
          {bars.map((bar) => (
            <TrendBar key={bar.id} item={bar} />
          ))}
        </div>
        <TrendSummary items={summary} />
      </div>
    </DashboardCard>
  );
}
