import type { ProfileStatModel } from "../../model/profile/profile.types";
import { StatBox } from "./shared/StatBox";

export function StatItem({ item }: { item: ProfileStatModel }) {
  return <StatBox label={item.label} value={item.value} />;
}
