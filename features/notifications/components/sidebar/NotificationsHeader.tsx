"use client";

import { Bell, BellOff, CheckCheck, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/features/notifications/components/shared/Badge";

export function NotificationsHeader({ unreadCount }: { unreadCount: number }) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-4 border-b border-white/[0.06] bg-primaryColor px-6">
      <div className="flex items-center gap-3">
        <Bell size={15} className="text-white/60" />
        <span className="text-[13px] font-medium text-white/90">Notifications</span>
        {unreadCount > 0 ? <Badge variant="unread">{unreadCount} new</Badge> : null}
      </div>

      <div className="flex-1" />

      <Button
        variant="ghost"
        size="sm"
        className="h-8 gap-1.5 text-[11px] text-white/40 hover:text-white/70"
      >
        <CheckCheck size={13} /> Mark all read
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 gap-1.5 text-[11px] text-white/40 hover:text-white/70"
      >
        <BellOff size={13} /> Mute all
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 gap-1.5 text-[11px] text-white/40 hover:text-white/70"
      >
        <Filter size={13} /> Filter
      </Button>
    </header>
  );
}
