import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { MatrixCellModel } from "@/widgets/dashboard";

const matrixCellVariants = cva(
  "mx-auto flex h-8 w-8 items-center justify-center rounded-lg text-[9px]",
  {
    variants: {
      intensity: {
        0: "bg-muted/50 text-muted-foreground/30",
        1: "bg-violet-500/10 text-violet-700/60 dark:text-violet-300/60",
        2: "bg-violet-500/20 text-violet-700/80 dark:text-violet-300/80",
        3: "bg-violet-500/40 text-violet-700 dark:text-violet-200",
        4: "bg-violet-500/70 text-white",
        5: "bg-violet-500 text-white",
      },
    },
  },
);

export function MatrixCell({ item }: { item: MatrixCellModel }) {
  return <div className={cn(matrixCellVariants({ intensity: item.intensity }))}>{item.label}</div>;
}
