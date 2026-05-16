import type { ProfileKPIModel } from "../../model/profile/profile.types";
import { DashboardCard } from "./shared/DashboardCard";
import { KPIItem } from "./KPIItem";

interface MonthlyKPICardProps {
  items: ProfileKPIModel[];
}

export function MonthlyKPICard({ items }: MonthlyKPICardProps) {
  const kpiItems = items.map((item) => <KPIItem key={item.id} item={item} />);

  return (
    <DashboardCard>
      <p className="mb-4 text-[11px] uppercase tracking-widest text-muted-foreground/40">This month</p>
      <div className="flex flex-col gap-3">{kpiItems}</div>
    </DashboardCard>
  );
}
