import { memo } from "react";

import { Badge } from "@/features/commits-dashboard/components/shared/Badge";
import type { RecentCommitItemModel } from "@/features/commits-dashboard/types/commit.types";

function RecentCommitItemComponent({ item }: { item: RecentCommitItemModel }) {
  return (
    <div className="group -mx-2 flex cursor-default items-start gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-muted/50">
      <span className="mt-1 w-14 shrink-0 font-mono text-[9px] text-muted-foreground/30">
        {item.hash}
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[12px] text-foreground/80 transition-colors group-hover:text-foreground">
          {item.message}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-mono text-[10px] text-muted-foreground/50">{item.repository}</span>
          <span className="text-muted-foreground/20">.</span>
          <span className="text-[10px] text-muted-foreground/40">{item.timeAgo}</span>
        </div>
      </div>

      <Badge variant={item.badgeVariant} className="rounded-md px-1.5 py-0.5 font-mono text-[9px]">
        {item.type}
      </Badge>
    </div>
  );
}

export const RecentCommitItem = memo(RecentCommitItemComponent);
