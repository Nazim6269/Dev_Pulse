import { Trophy } from "lucide-react";


import type { RecordCardModel } from "../../model/goals/goals-dashboard.types";
import { Badge } from "./shared/Badge";
import { DashboardCard } from "./shared/DashboardCard";
import { SectionHeader } from "./shared/SectionHeader";
import { RecordCard } from "./RecordCard";

export interface RecordsGridProps {
  items: RecordCardModel[];
  highlightLabel: string;
}

export function RecordsGrid({ items, highlightLabel }: RecordsGridProps) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Personal records"
        description="Your all-time bests"
        action={
          <Badge variant="warning" className="flex items-center gap-1.5 px-3 py-1 text-[11px]">
            <Trophy className="h-3 w-3" />
            {highlightLabel}
          </Badge>
        }
      />
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <RecordCard key={item.id} item={item} />
        ))}
      </div>
    </DashboardCard>
  );
}
