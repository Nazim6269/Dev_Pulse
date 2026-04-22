"use client";

import { CollaborationMatrix } from "@/features/team-dashboard/components/collaboration/CollaborationMatrix";
import { TeamMembersGrid } from "@/features/team-dashboard/components/members/TeamMembersGrid";
import { DashboardGrid } from "@/features/team-dashboard/components/shared/DashboardGrid";
import { DashboardSection } from "@/features/team-dashboard/components/shared/DashboardSection";
import { TeamStatsGrid } from "@/features/team-dashboard/components/stats/TeamStatsGrid";
import { SubTeamGrid } from "@/features/team-dashboard/components/subteams/SubTeamGrid";
import { TeamVelocityChart } from "@/features/team-dashboard/components/velocity/TeamVelocityChart";
import { useCollaborationMatrix } from "@/features/team-dashboard/hooks/useCollaborationMatrix";
import { useSubTeams } from "@/features/team-dashboard/hooks/useSubTeams";
import { useTeamMembers } from "@/features/team-dashboard/hooks/useTeamMembers";
import { useTeamStats } from "@/features/team-dashboard/hooks/useTeamStats";
import { useTeamVelocity } from "@/features/team-dashboard/hooks/useTeamVelocity";

export function TeamDashboardFeature() {
  const { stats } = useTeamStats();
  const { items: memberItems, sortKey, setSort } = useTeamMembers();
  const { bars, summary } = useTeamVelocity();
  const { labels, rows, legend } = useCollaborationMatrix();
  const { items: subTeamItems } = useSubTeams();

  return (
    <div className="flex min-h-screen overflow-hidden bg-primaryColor font-sans text-white">
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-5">
          <DashboardGrid>
            <TeamStatsGrid items={stats} />

            <DashboardSection>
              <TeamMembersGrid
                items={memberItems}
                sortKey={sortKey}
                onSortChange={setSort}
              />
            </DashboardSection>

            <DashboardSection className="md:col-span-5">
              <TeamVelocityChart bars={bars} summary={summary} />
            </DashboardSection>

            <DashboardSection className="md:col-span-7">
              <CollaborationMatrix labels={labels} rows={rows} legend={legend} />
            </DashboardSection>

            <DashboardSection>
              <SubTeamGrid items={subTeamItems} />
            </DashboardSection>
          </DashboardGrid>
        </main>
      </div>
    </div>
  );
}
