import type { ProfileBadgeData } from "../../model/profile/profile.types";
import { Badge } from "./shared/Badge";

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
