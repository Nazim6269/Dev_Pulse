import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/features/commits-dashboard/components/shared/Badge";
import { DashboardCard } from "@/features/commits-dashboard/components/shared/DashboardCard";
import { cn } from "@/lib/utils";
import type { ProgressTone } from "@/features/commits-dashboard/types/commit.types";

const statCardVariants = cva("", {
  variants: {
    tone: {
      emerald: "",
      violet: "",
      amber: "",
      blue: "",
      rose: "",
      neutral: "",
    },
    size: {
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    tone: "neutral",
    size: "md",
  },
});

const toneClass: Record<ProgressTone, string> = {
  emerald: "bg-emerald-500/10 text-emerald-300",
  violet: "bg-violet-500/10 text-violet-300",
  amber: "bg-amber-500/10 text-amber-300",
  blue: "bg-blue-500/10 text-blue-300",
  rose: "bg-rose-500/10 text-rose-300",
  neutral: "bg-white/10 text-white/70",
};

type StatTone = Extract<ProgressTone, "emerald" | "violet" | "amber" | "blue" | "rose" | "neutral">;

export interface StatCardProps extends VariantProps<typeof statCardVariants> {
  icon: LucideIcon;
  label: string;
  value: string;
  sublabel: string;
  badge: string;
}

export function StatCard({
  icon: Icon,
  label,
  value,
  sublabel,
  badge,
  tone = "neutral",
}: StatCardProps) {
  const selectedTone = tone as StatTone;

  return (
    <DashboardCard className={cn(statCardVariants({ tone }))}>
      <div className="mb-4 flex items-start justify-between">
        <div
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-xl",
            toneClass[selectedTone],
          )}
        >
          <Icon className="size-4" />
        </div>
        <Badge
          variant={
            selectedTone === "emerald"
              ? "success"
              : selectedTone === "amber"
                ? "warning"
                : "info"
          }
        >
          {badge}
        </Badge>
      </div>
      <p className="text-3xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-1 text-[12px] text-white/45">{label}</p>
      <p className="mt-0.5 text-[10px] text-white/25">{sublabel}</p>
    </DashboardCard>
  );
}
