import { memo } from "react";

import { Badge } from "@/features/commits-dashboard/components/shared/Badge";
import type { RecentCommitItemModel } from "@/features/commits-dashboard/types/commit.types";

function RecentCommitItemComponent({ item }: { item: RecentCommitItemModel }) {
  return (
    <div className="group -mx-2 flex cursor-default items-start gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-white/[0.02]">
      <span className="mt-1 w-14 shrink-0 font-mono text-[9px] text-white/20">
        {item.hash}
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[12px] text-white/70 transition-colors group-hover:text-white/90">
          {item.message}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-mono text-[10px] text-white/30">{item.repository}</span>
          <span className="text-white/10">.</span>
          <span className="text-[10px] text-white/25">{item.timeAgo}</span>
        </div>
      </div>

      <Badge variant={item.badgeVariant} className="rounded-md px-1.5 py-0.5 font-mono text-[9px]">
        {item.type}
      </Badge>
    </div>
  );
}

export const RecentCommitItem = memo(RecentCommitItemComponent);
