import type { CategoryBlockModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

const toneClass = {
  violet: "bg-violet-400 opacity-80",
  emerald: "bg-emerald-400 opacity-80",
  amber: "bg-amber-400 opacity-80",
  rose: "bg-rose-400 opacity-80",
  blue: "bg-blue-400 opacity-80",
  neutral: "bg-white/30 opacity-80",
} as const;

export function CategoryProgressBlocks({
  blocks,
}: {
  blocks: CategoryBlockModel[];
}) {
  return (
    <div className="flex gap-1">
      {blocks.map((block) => (
        <div
          key={block.id}
          className={
            block.filled ? `h-4 w-4 rounded-sm ${toneClass[block.tone]}` : "h-4 w-4 rounded-sm bg-white/[0.06]"
          }
        />
      ))}
    </div>
  );
}
