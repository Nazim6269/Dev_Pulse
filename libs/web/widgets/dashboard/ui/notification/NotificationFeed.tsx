import CustomScrollableContainer from "@/components/common/CustomScrollableContainer";

import type {
  NotificationGroupModel,
  UrgentNotificationModel,
} from "../../model/notifications/notification.types";
import { UrgentNotificationBanner, NotificationGroup, NotificationEmptyState } from "./";

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
