import { memo } from "react";
import { Zap } from "lucide-react";

import { AvatarBadge } from "@/features/team-dashboard/components/shared/AvatarBadge";
import { DashboardCard } from "@/features/team-dashboard/components/shared/DashboardCard";
import { MetricValue } from "@/features/team-dashboard/components/shared/MetricValue";
import { StatusDot } from "@/features/team-dashboard/components/shared/StatusDot";
import type { TeamMemberCardModel } from "@/features/team-dashboard/types/team.types";

function TeamMemberCardComponent({ item }: { item: TeamMemberCardModel }) {
  return (
    <DashboardCard
      variant="subtle"
      className="group transition-all hover:border-border/80 hover:bg-muted/10 shadow-sm"
      contentClassName="p-4"
    >
      <div className="mb-3 flex items-start justify-between">
        <div className="relative">
          <AvatarBadge initials={item.initials} gradient={item.gradient} />
          <StatusDot status={item.status} />
        </div>
        <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[9px] text-muted-foreground font-medium">
          {item.role}
        </span>
      </div>

      <p className="text-[13px] font-semibold text-foreground/90 transition-colors group-hover:text-foreground">
        {item.name}
      </p>
      <p className="mb-3 text-[11px] text-muted-foreground/60">{item.handle}</p>

      <div className="grid grid-cols-3 gap-1.5 text-center">
        <div className="rounded-lg bg-muted/30 p-1.5">
          <MetricValue size="sm" tone="violet">
            {item.commits}
          </MetricValue>
          <p className="text-[9px] text-muted-foreground/50 uppercase font-bold tracking-tighter">commits</p>
        </div>
        <div className="rounded-lg bg-muted/30 p-1.5">
          <MetricValue size="sm" tone="emerald">
            {item.prs}
          </MetricValue>
          <p className="text-[9px] text-muted-foreground/50 uppercase font-bold tracking-tighter">PRs</p>
        </div>
        <div className="rounded-lg bg-muted/30 p-1.5">
          <MetricValue size="sm" tone="amber">
            {item.reviews}
          </MetricValue>
          <p className="text-[9px] text-muted-foreground/50 uppercase font-bold tracking-tighter">reviews</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 border-t border-border-muted pt-2.5">
        <Zap className="h-3 w-3 text-orange-500" />
        <span className="text-[10px] text-muted-foreground font-medium">{item.streak}d streak</span>
      </div>
    </DashboardCard>
  );
}

export const TeamMemberCard = memo(TeamMemberCardComponent);
