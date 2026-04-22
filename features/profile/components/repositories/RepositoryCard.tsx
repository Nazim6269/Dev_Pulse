import { memo } from "react";
import { cva } from "class-variance-authority";

import type { RepositoryModel } from "@/features/profile/types/profile.types";

import { RepositoryMeta } from "./RepositoryMeta";

const repositoryCardVariants = cva(
  "group cursor-default rounded-xl border p-4 transition-all",
  {
    variants: {
      hover: {
        default: "border-white/[0.05] bg-white/[0.03] hover:border-white/[0.10] hover:bg-white/[0.05]",
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
      <p className="mb-3 text-[11px] leading-relaxed text-white/35">{repository.description}</p>
      <RepositoryMeta repository={repository} />
    </div>
  );
}

export const RepositoryCard = memo(RepositoryCardComponent);
