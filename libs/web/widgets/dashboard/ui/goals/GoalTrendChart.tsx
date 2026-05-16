import type { TrendBarModel, TrendSummaryItem } from "../../model/goals/goals-dashboard.types";
import { TrendBar } from "./TrendBar";
import { TrendSummary } from "./TrendSummary";
import { Badge } from "./shared/Badge";
import { DashboardCard } from "./shared/DashboardCard";
import { SectionHeader } from "./shared/SectionHeader";

interface GoalTrendChartProps {
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
