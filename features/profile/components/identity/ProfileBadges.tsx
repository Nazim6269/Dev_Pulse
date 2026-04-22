import type { ProfileBadgeData } from "@/features/profile/types/profile.types";
import { Badge } from "@/features/profile/components/shared/Badge";

interface ProfileBadgesProps {
  items: ProfileBadgeData[];
}

export function ProfileBadges({ items }: ProfileBadgesProps) {
  const badgeItems = items.map((item) => (
    <Badge key={item.id} variant={item.variant}>
      {item.label}
    </Badge>
  ));

  return <div className="flex flex-wrap gap-1.5">{badgeItems}</div>;
}
