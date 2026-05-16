import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { MatrixCellModel } from "@/widgets/dashboard";

const matrixCellVariants = cva(
  "mx-auto flex h-8 w-8 items-center justify-center rounded-lg text-[9px]",
  {
    variants: {
      intensity: {
        0: "bg-muted/50 text-muted-foreground/30",
        1: "bg-orangeColor/10 text-orangeColor/60",
        2: "bg-orangeColor/20 text-orangeColor/80",
        3: "bg-orangeColor/40 text-orangeColor",
        4: "bg-orangeColor/70 text-white",
        5: "bg-orangeColor text-white",
      },
    },
  },
);

export function MatrixCell({ item }: { item: MatrixCellModel }) {
  return <div className={cn(matrixCellVariants({ intensity: item.intensity }))}>{item.label}</div>;
}
