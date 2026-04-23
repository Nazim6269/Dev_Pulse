import { RepoCommitItem } from "@/features/commits/components/repos/RepoCommitItem";
import { DashboardCard } from "@/features/commits/components/shared/DashboardCard";
import { SectionHeader } from "@/features/commits/components/shared/SectionHeader";
import type { RepoCommitItemModel } from "@/features/commits/types/commit.types";

export function RepoCommitList({ items }: { items: RepoCommitItemModel[] }) {
  return (
    <DashboardCard>
      <SectionHeader
        title="Commits by repository"
        description="Volume and type distribution per repo"
      />
      <div className="mt-5">
        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground/60">No repository contribution data.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <RepoCommitItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </DashboardCard>
  );
}
