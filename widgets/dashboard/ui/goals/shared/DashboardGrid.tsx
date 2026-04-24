import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function DashboardGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto grid max-w-[1920px] grid-cols-12 gap-3.5", className)}>
      {children}
    </div>
  );
}
