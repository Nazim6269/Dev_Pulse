import { ProgressBar } from "@/features/goals-dashboard/components/shared/ProgressBar";
import type { DashboardTone } from "@/features/goals-dashboard/types/goals-dashboard.types";

export function GoalProgressBar({
  width,
  tone,
}: {
  width: string;
  tone: DashboardTone;
}) {
  return (
    <ProgressBar
      segments={[{ id: `${tone}-${width}`, width, tone }]}
      className="flex-1"
    />
  );
}
