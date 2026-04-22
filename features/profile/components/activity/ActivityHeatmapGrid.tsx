import type { HeatmapRowModel } from "@/features/profile/types/profile.types";

import { HeatmapRow } from "./HeatmapRow";

export function ActivityHeatmapGrid({ rows }: { rows: HeatmapRowModel[] }) {
  const heatmapRows = rows.map((row) => <HeatmapRow key={row.id} row={row} />);

  return <div className="flex flex-col gap-[3px]">{heatmapRows}</div>;
}
