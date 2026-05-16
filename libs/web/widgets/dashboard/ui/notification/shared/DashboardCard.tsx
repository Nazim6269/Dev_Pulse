import { cva, type VariantProps } from "class-variance-authority";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const dashboardCardVariants = cva("rounded-2xl border shadow-none", {
  variants: {
    variant: {
      default: "border-border/40 bg-card",
      subtle: "border-border/30 bg-muted/30",
      elevated: "border-border/60 bg-card shadow-sm",
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
