import { Star } from "lucide-react";

import { Badge } from "@/features/profile/components/shared/Badge";
import { DashboardCard } from "@/features/profile/components/shared/DashboardCard";
import { SectionHeader } from "@/features/profile/components/shared/SectionHeader";
import type { AchievementModel } from "@/features/profile/types/profile.types";

import { AchievementCard } from "./AchievementCard";

interface AchievementsGridProps {
  items: AchievementModel[];
  earnedLabel: string;
}

export function AchievementsGrid({ items, earnedLabel }: AchievementsGridProps) {
  const achievementCards = items.map((item) => <AchievementCard key={item.id} item={item} />);

  return (
    <DashboardCard>
      <div className="mb-4">
        <SectionHeader
          title="Achievements"
          action={
            <Badge variant="highlight" className="gap-1">
              <Star size={9} />
              {earnedLabel}
            </Badge>
          }
        />
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">{achievementCards}</div>
    </DashboardCard>
  );
}
