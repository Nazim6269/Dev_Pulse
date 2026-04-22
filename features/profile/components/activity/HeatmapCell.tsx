import { cva } from "class-variance-authority";

import type { ActivityIntensity } from "@/features/profile/types/profile.types";

const heatmapCellVariants = cva(
  "h-[10px] flex-1 cursor-default rounded-[2px] transition-colors hover:ring-1 hover:ring-violet-400/40",
  {
    variants: {
      intensity: {
        0: "bg-white/[0.05]",
        1: "bg-violet-500/20",
        2: "bg-violet-500/40",
        3: "bg-violet-500/60",
        4: "bg-violet-500/80",
        5: "bg-violet-500",
      },
    },
  },
);

export function HeatmapCell({ intensity }: { intensity: ActivityIntensity }) {
  return <div className={heatmapCellVariants({ intensity })} />;
}
