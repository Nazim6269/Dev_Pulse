import type { ProfileStatModel } from "@/features/profile/types/profile.types";
import { StatBox } from "@/features/profile/components/shared/StatBox";

export function StatItem({ item }: { item: ProfileStatModel }) {
  return <StatBox label={item.label} value={item.value} />;
}
