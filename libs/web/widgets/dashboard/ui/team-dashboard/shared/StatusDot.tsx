import { TeamStatus } from "@/widgets/dashboard/model/team-dashboard/team.types";
import { StatusIndicator } from "./StatusIndicator";


export function StatusDot({ status }: { status: TeamStatus }) {
  return <StatusIndicator status={status} className="absolute -bottom-0.5 -right-0.5" />;
}
