import { DashboardCard } from "./shared/DashboardCard";
import { StatusIndicator } from "./shared/StatusIndicator";

import type {
  ProgressRingModel,
  ProgressStatItem,
} from "../../model/goals/goals-dashboard.types";
import { ProgressRing } from "./ProgressRing";
import { ProgressStatsGrid } from "./ProgressStatsGrid";

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
          <p className="text-center text-[14px] font-bold text-foreground/90 uppercase tracking-tight">
            Monthly progress
          </p>
          <p className="mt-0.5 text-center text-[11px] text-muted-foreground/60 font-medium">{monthLabel}</p>
        </div>

        <ProgressRing model={ring} />

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <StatusIndicator tone="violet" className="shadow-sm shadow-violet-500/20" />
            <span className="text-[11px] text-muted-foreground/80 font-medium">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusIndicator tone="amber" className="shadow-sm shadow-amber-500/20" />
            <span className="text-[11px] text-muted-foreground/80 font-medium">In progress</span>
          </div>
        </div>

        <ProgressStatsGrid items={stats} />
      </div>
    </DashboardCard>
  );
}
