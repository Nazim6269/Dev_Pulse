import { DashboardCard } from "@/features/team-dashboard/components/shared/DashboardCard";
import { SectionHeader } from "@/features/team-dashboard/components/shared/SectionHeader";
import { SubTeamCard } from "@/features/team-dashboard/components/subteams/SubTeamCard";
import type { SubTeamCardModel } from "@/features/team-dashboard/types/team.types";

export function SubTeamGrid({ items }: { items: SubTeamCardModel[] }) {
  return (
    <DashboardCard>
      <SectionHeader title="Sub-team breakdown" />
      <div className="mt-5">
        {items.length === 0 ? (
          <p className="text-sm text-white/40">No sub-team data available.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {items.map((item) => (
              <SubTeamCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </DashboardCard>
  );
}
