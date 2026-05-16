import { memo } from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { NotificationFeedItemModel } from "../../model/notifications/notification.types";
import {
  NotificationIcon,
  UnreadIndicatorDot,
  NotificationBody,
  NotificationActions,
} from "./";

const notificationItemVariants = cva(
  "group flex cursor-default items-start gap-3.5 rounded-2xl border p-4 transition-all duration-150 hover:border-foreground/[0.10]",
  {
    variants: {
      read: {
        true: "border-border/40 bg-transparent hover:bg-muted/30",
        false: "border-border/60 bg-muted/50 hover:bg-muted/80",
      },
    },
  },
);

function NotificationItemComponent({
  item,
}: {
  item: NotificationFeedItemModel;
}) {
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
