import { memo } from "react";

import { Badge } from "@/widgets/dashboard/ui/notification/shared/Badge";
import type { SettingsTone } from "@/widgets/dashboard/model/settings/settings.types";

interface GithubStatusBadgeProps {
  label: string;
  tone: SettingsTone;
}

export const GithubStatusBadge = memo(function GithubStatusBadge({
  label,
  tone,
}: GithubStatusBadgeProps) {
  return (
    <Badge variant={tone === "danger" ? "warning" : tone}>
      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </Badge>
  );
});
