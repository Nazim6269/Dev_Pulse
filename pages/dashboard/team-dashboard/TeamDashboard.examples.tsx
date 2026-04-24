import { Users } from "lucide-react";
import {
  TeamStatCard,
  TeamMemberCard,
  TeamVelocityChart,
  CollaborationMatrix,
} from "@/widgets/dashboard";

export function TeamStatCardExample() {
  return (
    <TeamStatCard
      icon={Users}
      value="8"
      label="Team members"
      sublabel="across 3 sub-teams"
      badge="+1 this month"
      tone="violet"
    />
  );
}

export function TeamMemberCardExample() {
  return (
    <TeamMemberCard
      item={{
        name: "Rafiq Ahsan",
        handle: "@rafiq",
        initials: "RA",
        gradient: "from-amber-400 to-orange-500",
        role: "Frontend Lead",
        commits: 89,
        prs: 14,
        reviews: 22,
        streak: 24,
        status: "online",
      }}
    />
  );
}

export function TeamVelocityChartExample() {
  return (
    <TeamVelocityChart
      bars={[
        { id: "W1", label: "W1", value: 6, height: "40%" },
        { id: "W2", label: "W2", value: 9, height: "64%" },
      ]}
      summary={[
        { id: "avg", label: "PRs/week avg", value: "8.5", tone: "violet" },
        { id: "merge", label: "Merge rate", value: "91%", tone: "emerald" },
        { id: "cycle", label: "Avg cycle", value: "21h", tone: "amber" },
      ]}
    />
  );
}

export function CollaborationMatrixExample() {
  return (
    <CollaborationMatrix
      labels={["RA", "TN"]}
      rows={[
        {
          id: "RA",
          label: "RA",
          cells: [
            { id: "ra-ra", value: null, label: "-", intensity: 0 },
            { id: "ra-tn", value: 8, label: "8", intensity: 5 },
          ],
        },
        {
          id: "TN",
          label: "TN",
          cells: [
            { id: "tn-ra", value: 6, label: "6", intensity: 4 },
            { id: "tn-tn", value: null, label: "-", intensity: 0 },
          ],
        },
      ]}
      legend={[
        { id: "l1", intensity: 1 },
        { id: "l2", intensity: 2 },
        { id: "l3", intensity: 3 },
        { id: "l4", intensity: 4 },
        { id: "l5", intensity: 5 },
      ]}
    />
  );
}

export default function DefaultExport() { return null; }

