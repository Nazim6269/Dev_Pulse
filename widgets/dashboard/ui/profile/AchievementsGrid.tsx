import { Star } from "lucide-react";

import type { AchievementModel } from "../../model/profile/profile.types";
import { DashboardCard } from "./shared/DashboardCard";
import { SectionHeader } from "./shared/SectionHeader";
import { Badge } from "../notification/shared/Badge";
import { AchievementCard } from "./AchievementCard";

interface AchievementsGridProps {
  items: AchievementModel[];
  earnedLabel: string;
}

export function AchievementsGrid({
  items,
  earnedLabel,
}: AchievementsGridProps) {
  const achievementCards = items.map((item) => (
    <AchievementCard key={item.id} item={item} />
  ));

  return (
    <DashboardCard>
      <div className="mb-4">
        <SectionHeader
          title="Achievements"
          action={
            <Badge variant="count" className="gap-1">
              <Star size={9} />
              {earnedLabel}
            </Badge>
          }
        />
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {achievementCards}
      </div>
    </DashboardCard>
  );
}
