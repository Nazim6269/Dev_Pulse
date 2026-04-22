import { memo } from "react";

import { Button } from "@/components/ui/button";

export const ExportDataAction = memo(function ExportDataAction() {
  return (
    <Button className="h-8 border-white/[0.10] text-[11px] text-white/50 hover:bg-white/[0.06] hover:text-white/80" size="sm" variant="outline">
      Export
    </Button>
  );
});

