"use client";

import { useMemo } from "react";

import type {
  MatrixLegendItem,
  MatrixRowModel,
} from "./team.types";
import { collaborationMatrix } from "@/pages/dashboard/team-dashboard/data/team-dashboard.data";

function getIntensity(value: number): 0 | 1 | 2 | 3 | 4 | 5 {
  if (value <= 0) return 0;
  if (value <= 1) return 1;
  if (value <= 3) return 2;
  if (value <= 5) return 3;
  if (value <= 7) return 4;
  return 5;
}

export function useCollaborationMatrix() {
  const rows = useMemo<MatrixRowModel[]>(
    () =>
      collaborationMatrix.labels.map((rowLabel, rowIndex) => ({
        id: rowLabel,
        label: rowLabel,
        cells: collaborationMatrix.values[rowIndex].map((value, columnIndex) => {
          const isSamePerson = rowIndex === columnIndex;
          return {
            id: `${rowLabel}-${columnIndex}`,
            value: isSamePerson ? null : value,
            label: isSamePerson ? "-" : String(value),
            intensity: isSamePerson ? 0 : getIntensity(value),
          };
        }),
      })),
    [],
  );

  const legend = useMemo<MatrixLegendItem[]>(
    () => [
      { id: "level-1", intensity: 1 },
      { id: "level-2", intensity: 2 },
      { id: "level-3", intensity: 3 },
      { id: "level-4", intensity: 4 },
      { id: "level-5", intensity: 5 },
    ],
    [],
  );

  return {
    labels: collaborationMatrix.labels,
    rows,
    legend,
  };
}
