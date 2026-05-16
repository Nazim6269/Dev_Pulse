import { cva, type VariantProps } from "class-variance-authority";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const dashboardCardVariants = cva(
  "rounded-2xl border shadow-sm transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-border bg-card",
        elevated: "border-border bg-card shadow-md",
        subtle: "border-border/50 bg-muted/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

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
      <CardContent className={cn("p-5", contentClassName)}>{children}</CardContent>
    </Card>
  );
}
