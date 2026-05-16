import type { HeatmapRowModel } from "@/widgets/dashboard/model/profile/profile.types";
import { HeatmapCell } from "@/widgets/dashboard/ui/profile/HeatmapCell";

export function HeatmapRow({ row }: { row: HeatmapRowModel }) {
  const cells = row.cells.map((cell) => (
    <HeatmapCell key={cell.id} intensity={cell.intensity} />
  ));

  return <div className="flex gap-[3px]">{cells}</div>;
}
