import { Star } from "lucide-react";


import type { BadgeVariant } from "../../model/goals/goals-dashboard.types";
import { Badge } from "./shared/Badge";

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
