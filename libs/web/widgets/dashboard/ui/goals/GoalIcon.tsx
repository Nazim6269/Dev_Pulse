import { AlertCircle, Check, Target } from "lucide-react";

import type { GoalState } from "../../model/goals/goals-dashboard.types";
import { IconWrapper } from "./shared/IconWrapper";

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
