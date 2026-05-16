import type { RecentActivityModel } from "@/widgets/dashboard/model/profile/profile.types";

export function ActivityContent({ item }: { item: RecentActivityModel }) {
  return (
    <div className="min-w-0 flex-1">
      <p className="truncate text-[12px] text-muted-foreground/80 transition-colors group-hover:text-foreground/90">
        {item.text}
      </p>
      <span className="text-[10px] font-mono text-violet-400/50">{item.repository}</span>
    </div>
  );
}
