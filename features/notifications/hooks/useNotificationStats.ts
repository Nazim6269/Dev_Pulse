"use client";

import { useMemo } from "react";

import { weeklyStats } from "@/features/notifications/data/notifications.data";
import { useNotifications } from "@/features/notifications/hooks/useNotifications";

export function useNotificationStats() {
  const { items } = useNotifications();

  const unreadCount = useMemo(
    () => items.filter((item) => !item.read).length,
    [items],
  );

  return {
    unreadCount,
    weeklyStats,
  };
}
