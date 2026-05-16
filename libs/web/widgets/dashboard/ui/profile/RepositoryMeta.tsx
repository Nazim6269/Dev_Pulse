import { GitFork, Star } from "lucide-react";
import type { RepositoryModel } from "@/widgets/dashboard/model/profile/profile.types";

export function RepositoryMeta({ repository }: { repository: RepositoryModel }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground/50">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: repository.languageColor }}
        />
        {repository.language}
      </span>
      <span className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
        <Star size={9} />
        {repository.stars}
      </span>
      <span className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
        <GitFork size={9} />
        {repository.forks}
      </span>
      <span className="ml-auto text-[9px] text-muted-foreground/40">{repository.updated}</span>
    </div>
  );
}
