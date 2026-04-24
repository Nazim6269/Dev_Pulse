import { TeamStatCard } from "@/widgets/dashboard";
import type { TeamStatCardModel } from "@/widgets/dashboard";

export function TeamStatsGrid({ items }: { items: TeamStatCardModel[] }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="col-span-12 md:col-span-3">
          <TeamStatCard
            icon={item.icon}
            value={item.value}
            label={item.label}
            sublabel={item.sublabel}
            badge={item.badge}
            tone={item.tone}
          />
        </div>
      ))}
    </>
  );
}
