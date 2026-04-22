import type { TrendBarModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

export function TrendBar({ item }: { item: TrendBarModel }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1">
      <div
        className={
          item.isEmpty
            ? "w-full rounded-t-md bg-white/[0.04]"
            : "w-full rounded-t-md bg-violet-500/40 transition-colors hover:bg-violet-500/60"
        }
        style={{ height: item.height }}
      />
      <span className="text-[10px] text-white/25">{item.label}</span>
    </div>
  );
}
