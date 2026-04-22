import { Badge } from "@/features/commits-dashboard/components/shared/Badge";
import { DashboardCard } from "@/features/commits-dashboard/components/shared/DashboardCard";
import { SectionHeader } from "@/features/commits-dashboard/components/shared/SectionHeader";
import type { DailyCommitBarModel } from "@/features/commits-dashboard/types/commit.types";

export function DailyCommitChart({
  bars,
  trendLabel,
}: {
  bars: DailyCommitBarModel[];
  trendLabel: string;
}) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Daily commit volume"
        description="Commits per day this month"
        action={<Badge variant="success">{trendLabel}</Badge>}
      />
      <div className="mt-5 flex h-36 items-end gap-1">
        {bars.map((bar) => (
          <div key={bar.id} className="flex flex-1 flex-col items-center gap-1">
            <div
              className={bar.isEmpty ? "w-full rounded-t-sm bg-muted/30" : "w-full rounded-t-sm bg-emerald-500/60"}
              style={{ height: bar.height }}
            />
            {bar.tickLabel ? (
              <span className="text-[9px] text-muted-foreground/40">{bar.tickLabel}</span>
            ) : (
              <span className="h-3" />
            )}
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
