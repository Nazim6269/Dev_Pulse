import { DashboardCard } from "@/features/goals/components/shared/DashboardCard";
import { SectionHeader } from "@/features/goals/components/shared/SectionHeader";
import { CategoryItem } from "@/features/goals/components/categories/CategoryItem";
import type { CategoryItemModel } from "@/features/goals/types/goals-dashboard.types";

export interface CategoryGridProps {
  items: CategoryItemModel[];
  topCategory: string;
}

export function CategoryGrid({ items, topCategory }: CategoryGridProps) {
  return (
    <DashboardCard className="h-full">
      <SectionHeader title="By category" description="Goal types this month" />
      <div className="mt-5 flex h-full flex-col gap-4">
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <CategoryItem key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-auto border-t border-white/[0.05] pt-3">
          <p className="text-[11px] text-white/40">
            Most productive category: <span className="text-violet-400">{topCategory}</span>
          </p>
        </div>
      </div>
    </DashboardCard>
  );
}
