import type { LucideIcon } from "lucide-react";

export type NotificationType =
  | "merge"
  | "review_req"
  | "review_done"
  | "goal"
  | "team"
  | "mention"
  | "milestone";

export type NotificationFilter =
  | "all"
  | "unread"
  | "reviews"
  | "prs"
  | "goals"
  | "team";

export type NotificationChannel = "in-app" | "email" | "slack";
export type NotificationTone = "violet" | "amber" | "emerald" | "rose" | "blue" | "neutral";
export type BadgeVariant = "count" | "unread" | "status" | "warning" | "success" | "neutral";

export interface NotificationItemData {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  repo?: string;
  time: string;
  read: boolean;
  urgent?: boolean;
}

export interface NotificationFilterTab {
  id: NotificationFilter;
  label: string;
}

export interface ChannelFilterData {
  id: NotificationChannel;
  label: string;
  tone: NotificationTone;
}

export interface WeeklyStat {
  label: string;
  count: number;
  tone: NotificationTone;
}

export interface QuickSetting {
  id: string;
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export interface NotificationTypeConfig {
  icon: LucideIcon;
  tone: NotificationTone;
}

export interface NotificationGroupModel {
  label: string;
  items: NotificationFeedItemModel[];
}

export interface NotificationFeedItemModel {
  id: string;
  title: string;
  body: string;
  repo?: string;
  timeLabel: string;
  read: boolean;
  type: NotificationType;
  tone: NotificationTone;
}

export interface NotificationFilterTabModel {
  id: NotificationFilter;
  label: string;
  countLabel?: string;
  badgeVariant?: BadgeVariant;
  active: boolean;
}

export interface NotificationActivityBarModel {
  id: string;
  label: string;
  height: string;
}

export interface UrgentNotificationModel {
  id: string;
  title: string;
  body: string;
  actionLabel: string;
}
