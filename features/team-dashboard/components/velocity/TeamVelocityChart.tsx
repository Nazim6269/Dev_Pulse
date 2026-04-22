import { DashboardCard } from "@/features/team-dashboard/components/shared/DashboardCard";
import { SectionHeader } from "@/features/team-dashboard/components/shared/SectionHeader";
import { VelocityBar } from "@/features/team-dashboard/components/velocity/VelocityBar";
import { VelocitySummary } from "@/features/team-dashboard/components/velocity/VelocitySummary";
import type {
  VelocityBarModel,
  VelocitySummaryItem,
} from "@/features/team-dashboard/types/team.types";

export function TeamVelocityChart({
  bars,
  summary,
}: {
  bars: VelocityBarModel[];
  summary: VelocitySummaryItem[];
}) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Team velocity"
        description="Weekly PR throughput"
      />
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex h-32 items-end gap-3">
          {bars.map((bar) => (
            <VelocityBar key={bar.id} item={bar} />
          ))}
        </div>
        <VelocitySummary items={summary} />
      </div>
    </DashboardCard>
  );
}
