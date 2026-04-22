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
      className="group transition-all hover:border-white/[0.10] hover:bg-white/[0.05]"
      contentClassName="p-4"
    >
      <div className="mb-3 flex items-start justify-between">
        <div className="relative">
          <AvatarBadge initials={item.initials} gradient={item.gradient} />
          <StatusDot status={item.status} />
        </div>
        <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-[9px] text-white/30">
          {item.role}
        </span>
      </div>

      <p className="text-[13px] font-medium text-white/85 transition-colors group-hover:text-white">
        {item.name}
      </p>
      <p className="mb-3 text-[11px] text-white/30">{item.handle}</p>

      <div className="grid grid-cols-3 gap-1.5 text-center">
        <div className="rounded-lg bg-white/[0.04] p-1.5">
          <MetricValue size="sm" tone="violet">
            {item.commits}
          </MetricValue>
          <p className="text-[9px] text-white/25">commits</p>
        </div>
        <div className="rounded-lg bg-white/[0.04] p-1.5">
          <MetricValue size="sm" tone="emerald">
            {item.prs}
          </MetricValue>
          <p className="text-[9px] text-white/25">PRs</p>
        </div>
        <div className="rounded-lg bg-white/[0.04] p-1.5">
          <MetricValue size="sm" tone="amber">
            {item.reviews}
          </MetricValue>
          <p className="text-[9px] text-white/25">reviews</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 border-t border-white/[0.05] pt-2.5">
        <Zap className="h-3 w-3 text-orange-400" />
        <span className="text-[10px] text-white/35">{item.streak}d streak</span>
      </div>
    </DashboardCard>
  );
}

export const TeamMemberCard = memo(TeamMemberCardComponent);
