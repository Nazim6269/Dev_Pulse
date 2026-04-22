import type { VelocityBarModel } from "@/features/team-dashboard/types/team.types";

export function VelocityBar({ item }: { item: VelocityBarModel }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1">
      <div
        className="w-full rounded-t-md bg-violet-500/30 transition-colors hover:bg-violet-500/50"
        style={{ height: item.height }}
      />
      <span className="text-[10px] text-white/25">{item.label}</span>
    </div>
  );
}
