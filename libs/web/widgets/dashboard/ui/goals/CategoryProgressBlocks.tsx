import { CategoryBlockModel } from "../../model/goals/goals-dashboard.types";

const toneClass = {
  violet: "bg-violet-500",
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
  blue: "bg-blue-500",
  neutral: "bg-muted",
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
            block.filled ? `h-4 w-4 rounded-sm ${toneClass[block.tone]}` : "h-4 w-4 rounded-sm bg-muted/50"
          }
        />
      ))}
    </div>
  );
}
