import type { LucideIcon } from "lucide-react";

export type TeamStatus = "online" | "away" | "offline";
export type TeamTone =
  | "violet"
  | "emerald"
  | "amber"
  | "blue"
  | "neutral";
export type TeamCardVariant = "default" | "subtle" | "elevated";
export type TeamBadgeVariant = "success" | "warning" | "info" | "neutral";
export type TeamSortKey = "commits" | "reviews";

export interface TeamMember {
  name: string;
  handle: string;
  initials: string;
  gradient: string;
  role: string;
  commits: number;
  prs: number;
  reviews: number;
  streak: number;
  status: TeamStatus;
}

export interface TeamVelocityPoint {
  label: string;
  value: number;
}

export interface TeamMatrixDefinition {
  labels: string[];
  values: number[][];
}

export interface SubTeam {
  name: string;
  gradient: string;
  members: string[];
  prs: number;
  reviews: number;
  commits: number;
  health: number;
}

export interface TeamDashboardSummary {
  velocityScore: string;
  velocityBadge: string;
  averageReviewTime: string;
  averageReviewDelta: string;
  reviewLgtmRate: string;
  teamGrowth: string;
}

export interface TeamStatCardModel {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  sublabel: string;
  badge: string;
  tone: TeamTone;
}

export type TeamMemberCardModel = TeamMember;

export interface VelocityBarModel {
  id: string;
  label: string;
  value: number;
  height: string;
}

export interface VelocitySummaryItem {
  id: string;
  label: string;
  value: string;
  tone: TeamTone;
}

export interface MatrixCellModel {
  id: string;
  value: number | null;
  label: string;
  intensity: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface MatrixRowModel {
  id: string;
  label: string;
  cells: MatrixCellModel[];
}

export interface MatrixLegendItem {
  id: string;
  intensity: 1 | 2 | 3 | 4 | 5;
}

export interface SubTeamCardModel {
  id: string;
  name: string;
  gradient: string;
  memberChips: string[];
  commits: number;
  prs: number;
  reviews: number;
  healthLabel: string;
  healthValue: number;
}

export interface ProgressSegment {
  id: string;
  width: string;
  tone: TeamTone;
}
