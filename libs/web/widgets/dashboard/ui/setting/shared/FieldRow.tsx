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
    <div className={cn("flex items-start justify-between gap-6 border-b border-border/40 py-4 last:border-0", className)}>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] text-foreground/80">{label}</p>
        {description ? <p className="mt-0.5 text-[11px] text-muted-foreground/60">{description}</p> : null}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
});

