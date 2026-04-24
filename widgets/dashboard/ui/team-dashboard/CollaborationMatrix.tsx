import type { MatrixLegendItem, MatrixRowModel } from "@/widgets/dashboard";
import { DashboardCard } from "./shared/DashboardCard";
import { SectionHeader } from "./shared/SectionHeader";
import { MatrixCell } from "./MatrixCell";
import { MatrixLegend } from "./MatrixLegend";

export interface CollaborationMatrixProps {
  labels: string[];
  rows: MatrixRowModel[];
  legend: MatrixLegendItem[];
}

export function CollaborationMatrix({
  labels,
  rows,
  legend,
}: CollaborationMatrixProps) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Collaboration matrix"
        description="Who reviews whose PRs"
      />
      <div className="mt-5 space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[10px]">
            <thead>
              <tr>
                <td className="p-1.5 text-muted-foreground/20" />
                {labels.map((label) => (
                  <td
                    key={label}
                    className="p-1.5 text-center font-medium text-muted-foreground/50"
                  >
                    {label}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td className="p-1.5 font-medium text-muted-foreground/50">
                    {row.label}
                  </td>
                  {row.cells.map((cell) => (
                    <td key={cell.id} className="p-1">
                      <MatrixCell item={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <MatrixLegend items={legend} />
      </div>
    </DashboardCard>
  );
}
