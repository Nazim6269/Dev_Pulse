import { cva, type VariantProps } from "class-variance-authority";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const dashboardCardVariants = cva("rounded-2xl border shadow-none", {
  variants: {
    variant: {
      default: "border-white/6 bg-[#111114]",
      subtle: "border-white/[0.05] bg-white/[0.03]",
      elevated: "border-white/10 bg-[#141419]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface DashboardCardProps
  extends React.ComponentProps<typeof Card>,
    VariantProps<typeof dashboardCardVariants> {
  contentClassName?: string;
}

export function DashboardCard({
  className,
  variant,
  children,
  contentClassName,
  ...props
}: DashboardCardProps) {
  return (
    <Card className={cn(dashboardCardVariants({ variant }), className)} {...props}>
      <CardContent className={cn("p-4", contentClassName)}>{children}</CardContent>
    </Card>
  );
}
