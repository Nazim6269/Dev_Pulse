import type { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function SectionHeader({
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50">{title}</p>
        {description ? (
          <p className="mt-1 text-[11px] text-muted-foreground/60">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
