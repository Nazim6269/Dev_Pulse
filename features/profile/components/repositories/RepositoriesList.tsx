import { Button } from "@/components/ui/button";
import { DashboardCard } from "@/features/profile/components/shared/DashboardCard";
import { SectionHeader } from "@/features/profile/components/shared/SectionHeader";
import type { RepositoryModel } from "@/features/profile/types/profile.types";

import { RepositoryCard } from "./RepositoryCard";

interface RepositoriesListProps {
  items: RepositoryModel[];
  totalLabel: string;
}

export function RepositoriesList({ items, totalLabel }: RepositoriesListProps) {
  const repositoryCards = items.map((item) => (
    <RepositoryCard key={item.id} repository={item} />
  ));

  return (
    <DashboardCard>
      <div className="mb-4">
        <SectionHeader
          title="Repositories"
          action={
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-[11px] text-violet-400/60 hover:text-violet-400"
            >
              {totalLabel}
            </Button>
          }
        />
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">{repositoryCards}</div>
    </DashboardCard>
  );
}
