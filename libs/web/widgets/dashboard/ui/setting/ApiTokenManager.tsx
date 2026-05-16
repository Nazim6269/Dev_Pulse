import { Key } from "lucide-react";
import { memo } from "react";

import { Button } from "@/components/ui/button";

interface ApiTokenManagerProps {
  count: number;
}

export const ApiTokenManager = memo(function ApiTokenManager({ count }: ApiTokenManagerProps) {
  return (
    <Button className="h-8 border border-border/40 bg-muted/40 text-[11px] text-muted-foreground/60 hover:bg-muted/80 hover:text-foreground/80" size="sm">
      <Key className="mr-1.5 h-3 w-3" /> Manage tokens ({count})
    </Button>
  );
});

