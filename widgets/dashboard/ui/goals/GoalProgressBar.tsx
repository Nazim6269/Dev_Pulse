import { ProgressBar } from "./shared/ProgressBar";
import type { DashboardTone } from "../../model/goals/goals-dashboard.types";

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
