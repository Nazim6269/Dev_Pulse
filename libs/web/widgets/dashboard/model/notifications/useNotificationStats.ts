"use client";

import { useMemo } from "react";

import { weeklyStats } from "@/pages/dashboard/notifications/data/notifications.data";
import { useNotifications } from "./useNotifications";

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
