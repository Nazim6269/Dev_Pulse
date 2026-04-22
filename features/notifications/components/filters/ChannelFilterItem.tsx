import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { ChannelFilterData } from "@/features/notifications/types/notification.types";

const toneDot = {
  violet: "bg-violet-400",
  amber: "bg-amber-400",
  emerald: "bg-emerald-400",
  rose: "bg-rose-400",
  blue: "bg-blue-400",
  neutral: "bg-white/25",
} as const;

const channelItemVariants = cva(
  "w-full py-1.5 text-[11px] text-white/35 transition-colors hover:text-white/55 flex items-center gap-2",
);

export function ChannelFilterItem({ item }: { item: ChannelFilterData }) {
  return (
    <button className={cn(channelItemVariants())}>
      <span className={cn("h-1.5 w-1.5 rounded-full", toneDot[item.tone])} />
      {item.label}
    </button>
  );
}
