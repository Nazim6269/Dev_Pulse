import { memo } from "react";

import { cn } from "@/lib/utils";

interface FieldRowProps {
  children: React.ReactNode;
  className?: string;
  description?: string;
  label: string;
}

export const FieldRow = memo(function FieldRow({
  children,
  className,
  description,
  label,
}: FieldRowProps) {
  return (
    <div className={cn("flex items-start justify-between gap-6 border-b border-white/[0.05] py-4 last:border-0", className)}>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] text-white/70">{label}</p>
        {description ? <p className="mt-0.5 text-[11px] text-white/30">{description}</p> : null}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
});

