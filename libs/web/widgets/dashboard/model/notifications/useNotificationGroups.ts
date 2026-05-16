"use client";

import { useMemo } from "react";


import type {
  NotificationFeedItemModel,
  NotificationGroupModel,
} from "@/widgets/dashboard/model/notifications/notification.types";

function getGroupLabel(timeLabel: string) {
  if (timeLabel.includes("min") || timeLabel.includes("hr")) {
    return "Today";
  }
  if (timeLabel === "1 day ago") {
    return "Yesterday";
  }
  return "This week";
}

export function useNotificationGroups(items: NotificationFeedItemModel[]) {
  const groups = useMemo<NotificationGroupModel[]>(() => {
    const orderedLabels = ["Today", "Yesterday", "This week"];
    const grouped = items.reduce<Record<string, typeof items>>((accumulator, item) => {
      const label = getGroupLabel(item.timeLabel);
      accumulator[label] = [...(accumulator[label] ?? []), item];
      return accumulator;
    }, {});

    return orderedLabels
      .map((label) => ({
        label,
        items: grouped[label] ?? [],
      }))
      .filter((group) => group.items.length > 0);
  }, [items]);

  const urgentNotification = useMemo(() => {
    const urgentItem = items.find((item) => item.type === "review_req" && !item.read);
    if (!urgentItem) {
      return null;
    }

    return {
      id: urgentItem.id,
      title: `Review requested · ${urgentItem.timeLabel}`,
      body: urgentItem.body,
      actionLabel: "Review",
    };
  }, [items]);

  return {
    groups,
    urgentNotification,
  };
}
