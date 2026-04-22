import { notificationTypeConfig } from "@/features/notifications/data/notifications.data";
import { IconWrapper } from "@/features/notifications/components/shared/IconWrapper";
import type { NotificationType } from "@/features/notifications/types/notification.types";

export function NotificationIcon({ type }: { type: NotificationType }) {
  const config = notificationTypeConfig[type];
  return <IconWrapper icon={config.icon} tone={config.tone} />;
}
