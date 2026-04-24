import { memo } from "react";
import { cva } from "class-variance-authority";

import type { RecentActivityModel } from "../../model/profile/profile.types";

import { ActivityContent } from "./ActivityContent";
import { ActivityIcon } from "./ActivityIcon";
import { ActivityMeta } from "./ActivityMeta";

const activityItemVariants = cva(
  "group flex cursor-default items-start gap-3 border-b border-border/30 py-3 last:border-0",
  {
    variants: {
      type: {
        merge: "",
        review: "",
        commit: "",
        star: "",
        pr: "",
      },
    },
  },
);

function ActivityItemComponent({ item }: { item: RecentActivityModel }) {
  return (
    <div className={activityItemVariants({ type: item.type })}>
      <ActivityIcon item={item} />
      <ActivityContent item={item} />
      <ActivityMeta timeAgo={item.timeAgo} />
    </div>
  );
}

export const ActivityItem = memo(ActivityItemComponent);
