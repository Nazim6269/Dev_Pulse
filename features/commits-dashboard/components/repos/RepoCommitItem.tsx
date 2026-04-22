import { memo } from "react";

import { RepoContributionBar } from "@/features/commits-dashboard/components/repos/RepoContributionBar";
import type { RepoCommitItemModel } from "@/features/commits-dashboard/types/commit.types";

function RepoCommitItemComponent({ item }: { item: RepoCommitItemModel }) {
  return (
    <div className="flex cursor-default items-center gap-4">
      <span className="w-36 shrink-0 truncate font-mono text-[12px] text-violet-400/80">
        {item.name}
      </span>
      <RepoContributionBar segments={item.segments} />
      <span className="w-8 text-right text-[12px] font-medium text-white/60">
        {item.commitCount}
      </span>
      <span className="w-8 text-right text-[10px] text-white/25">{item.shareLabel}</span>
    </div>
  );
}

export const RepoCommitItem = memo(RepoCommitItemComponent);
