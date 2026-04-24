import type { ProgressSegment } from "@/entities/commit";
import { ProgressBar } from "@/shared/ui/dashboard/ProgressBar";

export function RepoContributionBar({ segments }: { segments: ProgressSegment[] }) {
  return <ProgressBar segments={segments} size="md" className="flex-1" />;
}
