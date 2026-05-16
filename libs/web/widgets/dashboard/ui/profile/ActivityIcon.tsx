import { IconWrapper } from "./shared/IconWrapper";
import type { RecentActivityModel } from "../../model/profile/profile.types";

export function ActivityIcon({ item }: { item: RecentActivityModel }) {
  return <IconWrapper icon={item.icon} tone={item.tone} size="sm" className="mt-0.5" />;
}
