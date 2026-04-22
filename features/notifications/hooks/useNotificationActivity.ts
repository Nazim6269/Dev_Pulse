"use client";

import { useMemo } from "react";

import { activitySparkline, quickSettings } from "@/features/notifications/data/notifications.data";
import type { NotificationActivityBarModel } from "@/features/notifications/types/notification.types";

export function useNotificationActivity() {
  const bars = useMemo<NotificationActivityBarModel[]>(() => {
    const maxValue = activitySparkline.reduce(
      (highest, item) => Math.max(highest, item.value),
      1,
    );

    return activitySparkline.map((item) => ({
      id: item.label,
      label: item.label,
      height: `${Math.round((item.value / maxValue) * 100)}%`,
    }));
  }, []);

  return {
    bars,
    quickSettings,
  };
}
