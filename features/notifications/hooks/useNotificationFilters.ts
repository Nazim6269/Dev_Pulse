"use client";

import { startTransition, useCallback, useMemo, useState } from "react";

import {
  channelFilters,
  notificationFilterTabs,
} from "@/features/notifications/data/notifications.data";
import { useNotifications } from "@/features/notifications/hooks/useNotifications";
import type {
  NotificationFeedItemModel,
  NotificationFilter,
  NotificationFilterTabModel,
} from "@/features/notifications/types/notification.types";

function matchesFilter(
  item: NotificationFeedItemModel,
  filter: NotificationFilter,
) {
  switch (filter) {
    case "unread":
      return !item.read;
    case "reviews":
      return item.type === "review_req" || item.type === "review_done";
    case "prs":
      return item.type === "merge";
    case "goals":
      return item.type === "goal" || item.type === "milestone";
    case "team":
      return item.type === "team" || item.type === "mention";
    default:
      return true;
  }
}

export function useNotificationFilters() {
  const { items } = useNotifications();
  const [activeFilter, setActiveFilter] = useState<NotificationFilter>("all");

  const unreadCount = useMemo(
    () => items.filter((item) => !item.read).length,
    [items],
  );

  const filteredItems = useMemo(
    () => items.filter((item) => matchesFilter(item, activeFilter)),
    [activeFilter, items],
  );

  const tabs = useMemo<NotificationFilterTabModel[]>(
    () =>
      notificationFilterTabs.map((tab) => ({
        id: tab.id,
        label: tab.label,
        active: tab.id === activeFilter,
        countLabel:
          tab.id === "all"
            ? String(items.length)
            : tab.id === "unread"
              ? String(unreadCount)
              : undefined,
        badgeVariant: tab.id === "unread" ? "unread" : "count",
      })),
    [activeFilter, items.length, unreadCount],
  );

  const setFilter = useCallback((filter: NotificationFilter) => {
    startTransition(() => {
      setActiveFilter(filter);
    });
  }, []);

  return {
    activeFilter,
    unreadCount,
    items: filteredItems,
    tabs,
    channels: channelFilters,
    setFilter,
  };
}
