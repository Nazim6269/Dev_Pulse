import { Trash2 } from "lucide-react";
import { memo } from "react";

import { Button } from "@/components/ui/button";

export const DeleteAccountAction = memo(function DeleteAccountAction() {
  return (
    <Button className="h-8 border border-rose-500/30 bg-rose-500/20 text-[11px] text-rose-400 hover:bg-rose-500/30" size="sm">
      <Trash2 className="mr-1.5 h-3 w-3" /> Delete
    </Button>
  );
});

