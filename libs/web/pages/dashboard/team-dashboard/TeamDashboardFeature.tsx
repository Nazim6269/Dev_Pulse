"use client";

import { DashboardGrid, DashboardSection } from "@/shared";
import {
  useCollaborationMatrix,
  useSubTeams,
  useTeamMembers,
  useTeamStats,
  useTeamVelocity,
  TeamStatsGrid,
  TeamMembersGrid,
  TeamVelocityChart,
  CollaborationMatrix,
  SubTeamGrid,
} from "@/widgets/dashboard";

export function TeamDashboardFeature() {
  const { stats } = useTeamStats();
  const { items: memberItems, sortKey, setSort } = useTeamMembers();
  const { bars, summary } = useTeamVelocity();
  const { labels, rows, legend } = useCollaborationMatrix();
  const { items: subTeamItems } = useSubTeams();

  return (
    <div className="flex min-h-full overflow-hidden bg-background font-sans text-foreground transition-colors duration-300">
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
              <CollaborationMatrix
                labels={labels}
                rows={rows}
                legend={legend}
              />
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

export default function DefaultExport() { return null; }

