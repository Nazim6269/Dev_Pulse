import { ProgressBar } from "@/features/commits/components/shared/ProgressBar";
import type { ProgressSegment } from "@/features/commits/types/commit.types";

export function RepoContributionBar({ segments }: { segments: ProgressSegment[] }) {
  return <ProgressBar segments={segments} size="md" className="flex-1" />;
}
