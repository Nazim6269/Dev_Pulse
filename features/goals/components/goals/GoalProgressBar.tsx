import { ProgressBar } from "@/features/goals/components/shared/ProgressBar";
import type { DashboardTone } from "@/features/goals/types/goals-dashboard.types";

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
