import { Button } from "@/components/ui/button";
import type { TeamMemberCardModel, TeamSortKey } from "@/widgets/dashboard";
import { TeamMemberCard } from "../team-dashboard/TeamMemberCard";
import { DashboardCard } from "./shared/DashboardCard";
import { SectionHeader } from "./shared/SectionHeader";

export interface TeamMembersGridProps {
  items: TeamMemberCardModel[];
  sortKey: TeamSortKey;
  onSortChange: (sortKey: TeamSortKey) => void;
}

export function TeamMembersGrid({
  items,
  sortKey,
  onSortChange,
}: TeamMembersGridProps) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Team members"
        description="Activity this month"
        action={
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-9 rounded-xl border-white/[0.06] bg-white/[0.04] px-3 text-[11px] text-white/35 hover:bg-white/[0.06] hover:text-white/60"
              onClick={() => onSortChange("commits")}
              aria-pressed={sortKey === "commits"}
            >
              Sort by commits
            </Button>
            <Button
              variant="outline"
              className="h-9 rounded-xl border-white/[0.06] bg-white/[0.04] px-3 text-[11px] text-white/35 hover:bg-white/[0.06] hover:text-white/60"
              onClick={() => onSortChange("reviews")}
              aria-pressed={sortKey === "reviews"}
            >
              Sort by reviews
            </Button>
          </div>
        }
      />
      <div className="mt-5">
        {items.length === 0 ? (
          <p className="text-sm text-white/40">No team members available.</p>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <TeamMemberCard key={item.handle} item={item} />
            ))}
          </div>
        )}
      </div>
    </DashboardCard>
  );
}
