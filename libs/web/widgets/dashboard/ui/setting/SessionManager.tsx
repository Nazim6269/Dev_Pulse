import { memo } from "react";
import { Button } from "@/components/ui/button";

interface SessionManagerProps {
  count: number;
}

export const SessionManager = memo(function SessionManager({ count }: SessionManagerProps) {
  return (
    <Button className="h-8 text-[11px] text-muted-foreground/60 hover:text-foreground/80" size="sm" variant="ghost">
      View all ({count})
    </Button>
  );
});

