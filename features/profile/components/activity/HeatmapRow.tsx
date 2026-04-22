import type { HeatmapRowModel } from "@/features/profile/types/profile.types";

import { HeatmapCell } from "./HeatmapCell";

export function HeatmapRow({ row }: { row: HeatmapRowModel }) {
  const cells = row.cells.map((cell) => (
    <HeatmapCell key={cell.id} intensity={cell.intensity} />
  ));

  return <div className="flex gap-[3px]">{cells}</div>;
}
