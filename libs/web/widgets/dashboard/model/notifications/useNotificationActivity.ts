"use client";

import { useMemo } from "react";

import type { NotificationActivityBarModel } from "./notification.types";
import { activitySparkline, quickSettings } from "@/pages/dashboard/notifications/data/notifications.data";

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
