import { AlertTriangle } from "lucide-react";
import { memo } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/features/settings/components/shared/Badge";

interface TwoFactorStatusProps {
  label: string;
  onEnable: () => void;
  tone: "success" | "warning";
}

export const TwoFactorStatus = memo(function TwoFactorStatus({
  label,
  onEnable,
  tone,
}: TwoFactorStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <Badge tone={tone}>
        {tone === "warning" ? <AlertTriangle className="mr-1 h-2.5 w-2.5" /> : null}
        {label}
      </Badge>
      {tone === "warning" ? (
        <Button className="h-7 bg-violet-500/80 text-[11px] text-white hover:bg-violet-500" onClick={onEnable} size="sm">
          Enable
        </Button>
      ) : null}
    </div>
  );
});

