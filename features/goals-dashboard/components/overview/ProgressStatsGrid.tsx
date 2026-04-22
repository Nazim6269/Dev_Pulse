import { MetricValue } from "@/features/goals-dashboard/components/shared/MetricValue";
import type { ProgressStatItem } from "@/features/goals-dashboard/types/goals-dashboard.types";

export function ProgressStatsGrid({ items }: { items: ProgressStatItem[] }) {
  return (
    <div className="grid w-full grid-cols-3 gap-2">
      {items.map((item) => (
        <div key={item.id} className="rounded-xl bg-white/[0.04] p-3 text-center">
          <MetricValue size="md" tone={item.tone}>
            {item.value}
          </MetricValue>
          <p className="mt-0.5 text-[10px] text-white/30">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
