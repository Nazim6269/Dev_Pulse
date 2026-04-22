import { Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DashboardCard } from "@/features/notifications/components/shared/DashboardCard";
import type { UrgentNotificationModel } from "@/features/notifications/types/notification.types";

export function UrgentNotificationBanner({
  item,
}: {
  item: UrgentNotificationModel | null;
}) {
  if (!item) {
    return null;
  }

  return (
    <DashboardCard
      className="mb-5 border-amber-500/[0.18] bg-amber-500/[0.07]"
      contentClassName="flex items-start gap-3 p-4"
    >
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/15">
        <Clock size={14} className="text-amber-400" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-medium text-amber-400">{item.title}</p>
        <p className="mt-0.5 text-[12px] text-white/55">{item.body}</p>
      </div>
      <Button
        size="sm"
        className="h-7 shrink-0 border border-amber-500/30 bg-amber-500/20 text-[11px] text-amber-400 hover:bg-amber-500/30"
      >
        {item.actionLabel}
      </Button>
    </DashboardCard>
  );
}
