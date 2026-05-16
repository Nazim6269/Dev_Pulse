import { notificationTypeConfig } from "@/pages/dashboard/notifications/data/notifications.data";
import type { NotificationType } from "../../model/notifications/notification.types";
import { IconWrapper } from "./shared/IconWrapper";

export function NotificationIcon({ type }: { type: NotificationType }) {
  const config = notificationTypeConfig[type];
  return <IconWrapper icon={config.icon} tone={config.tone} />;
}
