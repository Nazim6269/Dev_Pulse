import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { MatrixCellModel } from "@/features/team-dashboard/types/team.types";

const matrixCellVariants = cva(
  "mx-auto flex h-8 w-8 items-center justify-center rounded-lg text-[9px]",
  {
    variants: {
      intensity: {
        0: "bg-white/[0.04] text-white/15",
        1: "bg-violet-500/15 text-white/50",
        2: "bg-violet-500/30 text-white/60",
        3: "bg-violet-500/50 text-white/70",
        4: "bg-violet-500/70 text-white",
        5: "bg-violet-500 text-white",
      },
    },
  },
);

export function MatrixCell({ item }: { item: MatrixCellModel }) {
  return <div className={cn(matrixCellVariants({ intensity: item.intensity }))}>{item.label}</div>;
}
