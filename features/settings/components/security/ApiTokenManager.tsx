import { Key } from "lucide-react";
import { memo } from "react";

import { Button } from "@/components/ui/button";

interface ApiTokenManagerProps {
  count: number;
}

export const ApiTokenManager = memo(function ApiTokenManager({ count }: ApiTokenManagerProps) {
  return (
    <Button className="h-8 border border-white/[0.10] bg-white/[0.05] text-[11px] text-white/60 hover:bg-white/[0.10] hover:text-white/80" size="sm">
      <Key className="mr-1.5 h-3 w-3" /> Manage tokens ({count})
    </Button>
  );
});

