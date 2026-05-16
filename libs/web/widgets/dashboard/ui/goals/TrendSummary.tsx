import { MetricValue } from "./shared/MetricValue";
import type { TrendSummaryItem } from "../../model/goals/goals-dashboard.types";

export function TrendSummary({ items }: { items: TrendSummaryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 border-t border-white/[0.05] pt-2 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.id}>
          <p className="text-[11px] text-white/30">{item.label}</p>
          <MetricValue tone={item.tone}>{item.value}</MetricValue>
        </div>
      ))}
    </div>
  );
}
