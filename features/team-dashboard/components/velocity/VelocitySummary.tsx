import { MetricValue } from "@/features/team-dashboard/components/shared/MetricValue";
import type { VelocitySummaryItem } from "@/features/team-dashboard/types/team.types";

export function VelocitySummary({ items }: { items: VelocitySummaryItem[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 border-t border-border-muted pt-3">
      {items.map((item) => (
        <div key={item.id} className="text-center">
          <MetricValue tone={item.tone}>{item.value}</MetricValue>
          <p className="mt-0.5 text-[10px] text-muted-foreground/50">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
