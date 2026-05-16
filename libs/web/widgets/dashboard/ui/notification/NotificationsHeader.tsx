"use client";

import { Bell, BellOff, CheckCheck, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "./shared/Badge";

export function NotificationsHeader({ unreadCount }: { unreadCount: number }) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-4 border-b border-border/40 bg-primaryColor px-6">
      <div className="flex items-center gap-3">
        <Bell size={15} className="text-muted-foreground/70" />
        <span className="text-[13px] font-medium text-foreground/90">
          Notifications
        </span>
        {unreadCount > 0 ? (
          <Badge variant="unread">{unreadCount} new</Badge>
        ) : null}
      </div>

      <div className="flex-1" />

      <Button
        variant="ghost"
        size="sm"
        className="h-8 gap-1.5 text-[11px] text-muted-foreground/60 hover:text-foreground/80"
      >
        <CheckCheck size={13} /> Mark all read
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 gap-1.5 text-[11px] text-muted-foreground/60 hover:text-foreground/80"
      >
        <BellOff size={13} /> Mute all
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 gap-1.5 text-[11px] text-muted-foreground/60 hover:text-foreground/80"
      >
        <Filter size={13} /> Filter
      </Button>
    </header>
  );
}
