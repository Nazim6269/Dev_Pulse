import { StatCard } from "@/features/commits-dashboard/components/stats/StatCard";
import { Badge } from "@/features/commits-dashboard/components/shared/Badge";
import { ProgressBar } from "@/features/commits-dashboard/components/shared/ProgressBar";
import { GitCommitHorizontal } from "lucide-react";

export function StatCardExample() {
  return (
    <StatCard
      icon={GitCommitHorizontal}
      label="Total commits"
      value="318"
      sublabel="this month"
      badge="+8%"
      tone="emerald"
    />
  );
}

export function SharedComponentsExample() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Badge variant="success">Stable</Badge>
        <Badge variant="warning">Attention</Badge>
        <Badge variant="info">Insight</Badge>
      </div>
      <ProgressBar
        segments={[
          { id: "feat", width: "38%", tone: "violet" },
          { id: "fix", width: "26%", tone: "rose" },
          { id: "chore", width: "21%", tone: "neutral" },
          { id: "other", width: "15%", tone: "blue" },
        ]}
        size="md"
      />
    </div>
  );
}
