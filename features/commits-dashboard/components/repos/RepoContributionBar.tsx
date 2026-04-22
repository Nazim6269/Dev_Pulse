import { ProgressBar } from "@/features/commits-dashboard/components/shared/ProgressBar";
import type { ProgressSegment } from "@/features/commits-dashboard/types/commit.types";

export function RepoContributionBar({ segments }: { segments: ProgressSegment[] }) {
  return <ProgressBar segments={segments} size="md" className="flex-1" />;
}
