import { IconWrapper } from "@/features/profile/components/shared/IconWrapper";
import type { RecentActivityModel } from "@/features/profile/types/profile.types";

export function ActivityIcon({ item }: { item: RecentActivityModel }) {
  return <IconWrapper icon={item.icon} tone={item.tone} size="sm" className="mt-0.5" />;
}
