import type { TeamStatus } from "@/features/team-dashboard/types/team.types";
import { StatusIndicator } from "@/features/team-dashboard/components/shared/StatusIndicator";

export function StatusDot({ status }: { status: TeamStatus }) {
  return <StatusIndicator status={status} className="absolute -bottom-0.5 -right-0.5" />;
}
