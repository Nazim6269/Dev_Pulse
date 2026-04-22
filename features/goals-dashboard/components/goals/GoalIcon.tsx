import { AlertCircle, Check, Target } from "lucide-react";

import { IconWrapper } from "@/features/goals-dashboard/components/shared/IconWrapper";
import type { GoalState } from "@/features/goals-dashboard/types/goals-dashboard.types";

const iconMap = {
  done: Check,
  "at-risk": AlertCircle,
  active: Target,
  pending: Target,
} as const;

const toneMap = {
  done: "emerald",
  "at-risk": "rose",
  active: "neutral",
  pending: "neutral",
} as const;

export function GoalIcon({ state }: { state: GoalState }) {
  return <IconWrapper icon={iconMap[state]} tone={toneMap[state]} size="md" />;
}
