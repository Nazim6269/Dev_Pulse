import { BellOff, CheckCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NotificationActions({ read }: { read: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
      {!read ? (
        <Button
          variant="ghost"
          size="sm"
          className="h-7 w-7 p-0 text-white/30 hover:text-white/70"
        >
          <CheckCheck size={13} />
        </Button>
      ) : null}
      <Button
        variant="ghost"
        size="sm"
        className="h-7 w-7 p-0 text-white/30 hover:text-white/70"
      >
        <BellOff size={13} />
      </Button>
    </div>
  );
}
