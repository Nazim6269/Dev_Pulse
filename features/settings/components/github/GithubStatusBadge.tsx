import { memo } from "react";

import { Badge } from "@/features/settings/components/shared/Badge";
import type { SettingsTone } from "@/features/settings/types/settings.types";

interface GithubStatusBadgeProps {
  label: string;
  tone: SettingsTone;
}

export const GithubStatusBadge = memo(function GithubStatusBadge({
  label,
  tone,
}: GithubStatusBadgeProps) {
  return (
    <Badge tone={tone}>
      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </Badge>
  );
});

