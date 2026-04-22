import { DashboardCard } from "@/features/team-dashboard/components/shared/DashboardCard";
import { HealthBar } from "@/features/team-dashboard/components/subteams/HealthBar";
import { MetricValue } from "@/features/team-dashboard/components/shared/MetricValue";
import type { SubTeamCardModel } from "@/features/team-dashboard/types/team.types";

export function SubTeamCard({ item }: { item: SubTeamCardModel }) {
  return (
    <DashboardCard
      variant="subtle"
      className="transition-colors hover:border-white/[0.09]"
      contentClassName="p-4"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`h-6 w-2 rounded-full bg-gradient-to-b ${item.gradient}`} />
          <p className="text-[13px] font-medium text-white/85">{item.name}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <HealthBar
            segments={[
              {
                id: `${item.id}-health`,
                width: `${item.healthValue}%`,
                tone: "emerald",
              },
            ]}
          />
          <span className="text-[11px] text-white/40">{item.healthLabel}</span>
        </div>
      </div>

      <div className="mb-3 flex gap-1.5">
        {item.memberChips.map((member) => (
          <div
            key={`${item.id}-${member}`}
            className="flex h-6 items-center rounded-full bg-white/[0.06] px-2 text-[10px] text-white/40"
          >
            {member}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-3">
        <div>
          <MetricValue tone="neutral">{item.commits}</MetricValue>
          <p className="text-[9px] text-white/25">commits</p>
        </div>
        <div>
          <MetricValue tone="neutral">{item.prs}</MetricValue>
          <p className="text-[9px] text-white/25">PRs</p>
        </div>
        <div>
          <MetricValue tone="neutral">{item.reviews}</MetricValue>
          <p className="text-[9px] text-white/25">reviews</p>
        </div>
      </div>
    </DashboardCard>
  );
}
