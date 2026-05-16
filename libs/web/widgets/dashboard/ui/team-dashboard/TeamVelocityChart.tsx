import { VelocityBar } from "@/widgets/dashboard";
import { VelocitySummary } from "@/widgets/dashboard";
import type {
  VelocityBarModel,
  VelocitySummaryItem,
} from "@/widgets/dashboard";
import { DashboardCard } from "./shared/DashboardCard";
import { SectionHeader } from "./shared/SectionHeader";

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
