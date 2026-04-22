import { StatusIndicator } from "@/features/goals-dashboard/components/shared/StatusIndicator";
import { CategoryProgressBlocks } from "@/features/goals-dashboard/components/categories/CategoryProgressBlocks";
import type { CategoryItemModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

export function CategoryItem({ item }: { item: CategoryItemModel }) {
  return (
    <div className="flex items-center gap-3">
      <StatusIndicator tone={item.tone} />
      <span className="flex-1 text-[12px] text-foreground/70 font-medium">{item.label}</span>
      <CategoryProgressBlocks blocks={item.blocks} />
      <span className="w-8 text-right text-[11px] text-muted-foreground/40 font-bold">
        {item.completedLabel}
      </span>
    </div>
  );
}
