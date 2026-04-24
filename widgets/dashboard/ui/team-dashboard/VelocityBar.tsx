import type { VelocityBarModel } from "@/widgets/dashboard";

export function VelocityBar({ item }: { item: VelocityBarModel }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1">
      <div
        className="w-full rounded-t-md bg-violet-500/30 transition-all hover:bg-violet-500/60"
        style={{ height: item.height }}
      />
      <span className="text-[10px] text-muted-foreground/40">{item.label}</span>
    </div>
  );
}
