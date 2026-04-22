import { MatrixCell } from "@/features/team-dashboard/components/collaboration/MatrixCell";
import type { MatrixLegendItem } from "@/features/team-dashboard/types/team.types";

export function MatrixLegend({ items }: { items: MatrixLegendItem[] }) {
  return (
    <div className="flex items-center gap-2 text-[10px] text-white/30">
      <span>Low</span>
      <div className="flex gap-1">
        {items.map((item) => (
          <MatrixCell
            key={item.id}
            item={{
              id: item.id,
              value: item.intensity,
              label: "",
              intensity: item.intensity,
            }}
          />
        ))}
      </div>
      <span>High</span>
    </div>
  );
}
