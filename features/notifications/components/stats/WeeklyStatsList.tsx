import { cn } from "@/lib/utils";
import type { WeeklyStat } from "@/features/notifications/types/notification.types";

const toneClass = {
  amber: "text-amber-400",
  violet: "text-violet-400",
  emerald: "text-emerald-400",
  rose: "text-rose-400",
  blue: "text-blue-400",
  neutral: "text-white/45",
} as const;

export function WeeklyStatsList({ items }: { items: WeeklyStat[] }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <div key={item.label} className="flex items-center justify-between">
          <span className="text-[11px] text-white/40">{item.label}</span>
          <span className={cn("text-[13px] font-semibold", toneClass[item.tone])}>
            {item.count}
          </span>
        </div>
      ))}
    </div>
  );
}
