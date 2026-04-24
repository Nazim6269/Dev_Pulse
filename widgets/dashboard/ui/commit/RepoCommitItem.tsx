import { memo } from "react";

import type { RepoCommitItemModel } from "@/entities/commit";
import { RepoContributionBar } from "@/widgets/dashboard/ui/commit/RepoContributionBar";

function RepoCommitItemComponent({ item }: { item: RepoCommitItemModel }) {
  return (
    <div className="flex cursor-default items-center gap-4">
      <span className="w-36 shrink-0 truncate font-mono text-[12px] text-violet-500/80">
        {item.name}
      </span>
      <RepoContributionBar segments={item.segments} />
      <span className="w-8 text-right text-[12px] font-medium text-foreground/70">
        {item.commitCount}
      </span>
      <span className="w-8 text-right text-[10px] text-muted-foreground/40">
        {item.shareLabel}
      </span>
    </div>
  );
}

export const RepoCommitItem = memo(RepoCommitItemComponent);
