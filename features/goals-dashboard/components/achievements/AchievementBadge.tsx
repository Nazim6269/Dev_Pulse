import { Star } from "lucide-react";

import { Badge } from "@/features/goals-dashboard/components/shared/Badge";
import type { BadgeVariant } from "@/features/goals-dashboard/types/goals-dashboard.types";

export function AchievementBadge({ variant }: { variant: BadgeVariant }) {
  return (
    <Badge
      variant={variant}
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full p-0"
    >
      <Star className="h-2.5 w-2.5" />
    </Badge>
  );
}
