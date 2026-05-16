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
    <div className="flex flex-row items-start justify-between gap-4">
      <div>
        <h2 className="text-[14px] font-medium text-white/90">{title}</h2>
        {description ? (
          <p className="mt-0.5 text-[11px] text-white/30">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
