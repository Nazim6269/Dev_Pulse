import { HealthBar, type SubTeamCardModel } from "@/widgets/dashboard";
import { DashboardCard } from "./shared/DashboardCard";
import { MetricValue } from "../goals/shared";

export function SubTeamCard({ item }: { item: SubTeamCardModel }) {
  return (
    <DashboardCard
      variant="subtle"
      className="transition-all hover:border-border/80 hover:bg-muted/10 shadow-sm"
      contentClassName="p-4"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`h-6 w-1.5 rounded-full bg-gradient-to-b ${item.gradient}`}
          />
          <p className="text-[13px] font-semibold text-foreground/90">
            {item.name}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HealthBar
            segments={[
              {
                id: `${item.id}-health`,
                width: `${item.healthValue}%`,
                tone: "emerald",
              },
            ]}
          />
          <span className="text-[11px] text-muted-foreground/60 font-medium">
            {item.healthLabel}
          </span>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {item.memberChips.map((member) => (
          <div
            key={`${item.id}-${member}`}
            className="flex h-6 items-center rounded-full bg-muted px-2.5 text-[10px] text-muted-foreground font-medium"
          >
            {member}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-border-muted pt-3">
        <div>
          <MetricValue tone="neutral" size="sm">
            {item.commits}
          </MetricValue>
          <p className="text-[9px] text-muted-foreground/50 uppercase font-bold tracking-tighter">
            commits
          </p>
        </div>
        <div>
          <MetricValue tone="neutral" size="sm">
            {item.prs}
          </MetricValue>
          <p className="text-[9px] text-muted-foreground/50 uppercase font-bold tracking-tighter">
            PRs
          </p>
        </div>
        <div>
          <MetricValue tone="neutral" size="sm">
            {item.reviews}
          </MetricValue>
          <p className="text-[9px] text-muted-foreground/50 uppercase font-bold tracking-tighter">
            reviews
          </p>
        </div>
      </div>
    </DashboardCard>
  );
}
