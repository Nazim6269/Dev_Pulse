"use client";

import { useMemo } from "react";

import {
  notificationTypeConfig,
  notificationsData,
} from "@/pages/dashboard/notifications/data/notifications.data";
import type { NotificationFeedItemModel } from "@/widgets/dashboard/model/notifications/notification.types";

export function useNotifications() {
  const items = useMemo<NotificationFeedItemModel[]>(
    () =>
      notificationsData.map((notification) => ({
        id: notification.id,
        title: notification.title,
        body: notification.body,
        repo: notification.repo,
        timeLabel: notification.time,
        read: notification.read,
        type: notification.type,
        tone: notificationTypeConfig[notification.type].tone,
      })),
    [],
  );

  return { items };
}
