import { DashboardCard } from "@/features/goals-dashboard/components/shared/DashboardCard";
import { StatusIndicator } from "@/features/goals-dashboard/components/shared/StatusIndicator";
import { ProgressRing } from "@/features/goals-dashboard/components/overview/ProgressRing";
import { ProgressStatsGrid } from "@/features/goals-dashboard/components/overview/ProgressStatsGrid";
import type {
  ProgressRingModel,
  ProgressStatItem,
} from "@/features/goals-dashboard/types/goals-dashboard.types";

export interface MonthlyProgressCardProps {
  monthLabel: string;
  ring: ProgressRingModel;
  stats: ProgressStatItem[];
}

export function MonthlyProgressCard({
  monthLabel,
  ring,
  stats,
}: MonthlyProgressCardProps) {
  return (
    <DashboardCard>
      <div className="flex flex-col items-center gap-4">
        <div>
          <p className="text-center text-[14px] font-medium text-white/90">
            Monthly progress
          </p>
          <p className="mt-0.5 text-center text-[11px] text-white/30">{monthLabel}</p>
        </div>

        <ProgressRing model={ring} />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <StatusIndicator tone="violet" />
            <span className="text-[11px] text-white/45">Completed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <StatusIndicator tone="amber" />
            <span className="text-[11px] text-white/45">In progress</span>
          </div>
        </div>

        <ProgressStatsGrid items={stats} />
      </div>
    </DashboardCard>
  );
}
