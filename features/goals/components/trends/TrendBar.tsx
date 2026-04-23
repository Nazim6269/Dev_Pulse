import type { TrendBarModel } from "@/features/goals/types/goals-dashboard.types";

export function TrendBar({ item }: { item: TrendBarModel }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1">
      <div
        className={
          item.isEmpty
            ? "w-full rounded-t-md bg-muted/50"
            : "w-full rounded-t-md bg-violet-500/40 transition-all hover:bg-violet-500/60 shadow-sm"
        }
        style={{ height: item.height }}
      />
      <span className="text-[10px] text-muted-foreground/30 font-bold uppercase tracking-tight">{item.label}</span>
    </div>
  );
}
