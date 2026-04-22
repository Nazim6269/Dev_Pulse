import { memo } from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { NotificationActions } from "@/features/notifications/components/feed/NotificationActions";
import { NotificationBody } from "@/features/notifications/components/feed/NotificationBody";
import { NotificationIcon } from "@/features/notifications/components/feed/NotificationIcon";
import { UnreadIndicatorDot } from "@/features/notifications/components/feed/UnreadIndicatorDot";
import type { NotificationFeedItemModel } from "@/features/notifications/types/notification.types";

const notificationItemVariants = cva(
  "group flex cursor-default items-start gap-3.5 rounded-2xl border p-4 transition-all duration-150 hover:border-white/[0.10]",
  {
    variants: {
      read: {
        true: "border-white/[0.04] bg-transparent hover:bg-white/[0.02]",
        false: "border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.05]",
      },
    },
  },
);

function NotificationItemComponent({ item }: { item: NotificationFeedItemModel }) {
  return (
    <div className={cn(notificationItemVariants({ read: item.read }))}>
      <div className="relative mt-0.5 shrink-0">
        <NotificationIcon type={item.type} />
        {!item.read ? <UnreadIndicatorDot /> : null}
      </div>
      <NotificationBody
        title={item.title}
        body={item.body}
        timeLabel={item.timeLabel}
        repo={item.repo}
        read={item.read}
      />
      <NotificationActions read={item.read} />
    </div>
  );
}

export const NotificationItem = memo(NotificationItemComponent);
