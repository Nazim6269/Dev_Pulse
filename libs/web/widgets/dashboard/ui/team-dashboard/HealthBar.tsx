import type { ProgressSegment } from "@/widgets/dashboard";
import { ProgressBar } from "../goals/shared/ProgressBar";

export function HealthBar({ segments }: { segments: ProgressSegment[] }) {
  return <ProgressBar segments={segments} className="w-16" />;
}
