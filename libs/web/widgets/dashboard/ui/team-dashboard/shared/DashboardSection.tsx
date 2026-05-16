import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function DashboardSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={cn("col-span-12", className)}>{children}</section>;
}
