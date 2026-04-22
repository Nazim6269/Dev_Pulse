import { DashboardCard } from "@/features/commits-dashboard/components/shared/DashboardCard";
import { SectionHeader } from "@/features/commits-dashboard/components/shared/SectionHeader";
import type { TimeOfDayRowModel } from "@/features/commits-dashboard/types/commit.types";

export function TimeOfDayHeatmap({
  rows,
  peakActivity,
}: {
  rows: TimeOfDayRowModel[];
  peakActivity: string;
}) {
  return (
    <DashboardCard className="h-full">
      <SectionHeader
        title="When you commit"
        description="Hour-of-day distribution"
      />
      <div className="mt-5 flex h-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          {rows.map((row) => (
            <div key={row.id} className="flex items-center gap-3">
              <span className="w-20 shrink-0 text-[10px] text-white/30">{row.label}</span>
              <div className="flex flex-1 gap-1">
                {row.cells.map((cell) => (
                  <div
                    key={cell.id}
                    className="h-5 flex-1 rounded-sm bg-violet-500/60"
                    style={{ opacity: cell.opacity }}
                  />
                ))}
              </div>
              <span className="w-4 text-right text-[10px] text-white/30">{row.total}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 border-t border-white/[0.05] pt-3">
          <div className="h-2 w-2 rounded-full bg-violet-500" />
          <p className="text-[11px] text-white/40">
            Peak activity: <span className="text-white/70">{peakActivity}</span>
          </p>
        </div>
      </div>
    </DashboardCard>
  );
}
