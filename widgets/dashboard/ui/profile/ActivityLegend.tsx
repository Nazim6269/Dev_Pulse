import type { ActivityLegendItemModel } from "@/widgets/dashboard/model/profile/profile.types";

import { HeatmapCell } from "./HeatmapCell";

export function ActivityLegend({
  items,
}: {
  items: ActivityLegendItemModel[];
}) {
  const legendItems = items.map((item) => (
    <div key={item.id} className="w-2.5">
      <HeatmapCell intensity={item.intensity} />
    </div>
  ));

  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[10px] text-muted-foreground/40">Less</span>
      {legendItems}
      <span className="text-[10px] text-muted-foreground/40">More</span>
    </div>
  );
}
