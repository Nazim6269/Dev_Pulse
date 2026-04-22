import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const dashboardCardVariants = cva("rounded-2xl border shadow-none", {
  variants: {
    variant: {
      default: "border-white/[0.06] bg-[#111114]",
      subtle: "border-white/[0.05] bg-white/[0.03]",
      elevated: "border-white/10 bg-[#141419]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface DashboardCardProps
  extends ComponentProps<typeof Card>,
    VariantProps<typeof dashboardCardVariants> {
  contentClassName?: string;
}

export function DashboardCard({
  children,
  className,
  contentClassName,
  variant,
  ...props
}: DashboardCardProps) {
  return (
    <Card className={cn(dashboardCardVariants({ variant }), className)} {...props}>
      <CardContent className={cn("p-5", contentClassName)}>{children}</CardContent>
    </Card>
  );
}
