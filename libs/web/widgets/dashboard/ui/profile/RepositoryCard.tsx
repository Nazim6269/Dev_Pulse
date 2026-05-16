import { memo } from "react";
import { cva } from "class-variance-authority";
import type { RepositoryModel } from "../../model/profile/profile.types";
import { RepositoryMeta } from "./RepositoryMeta";

const repositoryCardVariants = cva(
  "group cursor-default rounded-xl border p-4 transition-all",
  {
    variants: {
      hover: {
        default: "border-border/30 bg-muted/30 hover:border-border/60 hover:bg-muted/50",
      },
    },
    defaultVariants: {
      hover: "default",
    },
  },
);

function RepositoryCardComponent({ repository }: { repository: RepositoryModel }) {
  return (
    <div className={repositoryCardVariants()}>
      <div className="mb-1.5 flex items-start justify-between">
        <p className="truncate text-[12px] font-medium text-violet-400">{repository.name}</p>
      </div>
      <p className="mb-3 text-[11px] leading-relaxed text-muted-foreground/60">{repository.description}</p>
      <RepositoryMeta repository={repository} />
    </div>
  );
}

export const RepositoryCard = memo(RepositoryCardComponent);
