import type { StatCardModel } from "@/entities/commit";
import { StatCard } from "@/widgets/dashboard/ui/commit/StatCard";

export function StatsGrid({ items }: { items: StatCardModel[] }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="col-span-12 md:col-span-3">
          <StatCard
            icon={item.icon}
            label={item.label}
            value={item.value}
            sublabel={item.sublabel}
            badge={item.badge}
            tone={item.tone}
          />
        </div>
      ))}
    </>
  );
}
