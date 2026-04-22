import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function SectionHeader({ title, description, action }: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-[13px] font-medium text-white/90">{title}</p>
        {description ? <p className="mt-0.5 text-[11px] text-white/30">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
