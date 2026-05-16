import { cva } from "class-variance-authority";
import type { ActivityIntensity } from "../../model/profile/profile.types";

const heatmapCellVariants = cva(
  "h-[10px] flex-1 cursor-default rounded-[2px] transition-colors hover:ring-1 hover:ring-orangeColor/40",
  {
    variants: {
      intensity: {
        0: "bg-muted/40",
        1: "bg-orangeColor/20",
        2: "bg-orangeColor/40",
        3: "bg-orangeColor/60",
        4: "bg-orangeColor/80",
        5: "bg-orangeColor",
      },
    },
  },
);

export function HeatmapCell({ intensity }: { intensity: ActivityIntensity }) {
  return <div className={heatmapCellVariants({ intensity })} />;
}
