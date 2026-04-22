import type { ProfileStatModel } from "@/features/profile/types/profile.types";

import { StatItem } from "./StatItem";

interface ProfileStatsGridProps {
  items: ProfileStatModel[];
}

export function ProfileStatsGrid({ items }: ProfileStatsGridProps) {
  const statItems = items.map((item) => <StatItem key={item.id} item={item} />);

  return <div className="grid grid-cols-3 gap-2">{statItems}</div>;
}
