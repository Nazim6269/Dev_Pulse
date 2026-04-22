import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NotificationEmptyState() {
  return (
    <div className="flex flex-col items-center gap-3 py-8 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.04]">
        <Bell size={20} className="text-white/20" />
      </div>
      <p className="text-[12px] text-white/30">You&apos;re all caught up</p>
      <Button
        variant="ghost"
        size="sm"
        className="text-[11px] text-violet-400/60 hover:text-violet-400"
      >
        Load older notifications
      </Button>
    </div>
  );
}
