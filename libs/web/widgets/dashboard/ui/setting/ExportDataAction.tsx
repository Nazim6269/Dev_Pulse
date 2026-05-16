import { memo } from "react";

import { Button } from "@/components/ui/button";

export const ExportDataAction = memo(function ExportDataAction() {
  return (
    <Button className="h-8 border-border/40 text-[11px] text-muted-foreground/50 hover:bg-muted/50 hover:text-foreground/80" size="sm" variant="outline">
      Export
    </Button>
  );
});

