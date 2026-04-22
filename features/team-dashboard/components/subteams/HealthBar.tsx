import { ProgressBar } from "@/features/team-dashboard/components/shared/ProgressBar";
import type { ProgressSegment } from "@/features/team-dashboard/types/team.types";

export function HealthBar({ segments }: { segments: ProgressSegment[] }) {
  return <ProgressBar segments={segments} className="w-16" />;
}
