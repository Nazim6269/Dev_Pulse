import CustomScrollableContainer from "@/components/common/CustomScrollableContainer";
import { NotificationEmptyState } from "@/features/notifications/components/feed/NotificationEmptyState";
import { NotificationGroup } from "@/features/notifications/components/feed/NotificationGroup";
import { UrgentNotificationBanner } from "@/features/notifications/components/feed/UrgentNotificationBanner";
import type {
  NotificationGroupModel,
  UrgentNotificationModel,
} from "@/features/notifications/types/notification.types";

export interface NotificationFeedProps {
  groups: NotificationGroupModel[];
  urgentNotification: UrgentNotificationModel | null;
}

export function NotificationFeed({
  groups,
  urgentNotification,
}: NotificationFeedProps) {
  return (
    <CustomScrollableContainer className="flex-1">
      <div className="px-6 py-6">
        <UrgentNotificationBanner item={urgentNotification} />
        {groups.length > 0 ? (
          groups.map((group) => <NotificationGroup key={group.label} group={group} />)
        ) : (
          <NotificationEmptyState />
        )}
        {groups.length > 0 ? <NotificationEmptyState /> : null}
      </div>
    </CustomScrollableContainer>
  );
}
