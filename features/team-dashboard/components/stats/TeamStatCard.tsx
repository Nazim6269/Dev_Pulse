import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

import { DashboardCard } from "@/features/team-dashboard/components/shared/DashboardCard";
import { MetricValue } from "@/features/team-dashboard/components/shared/MetricValue";
import { cn } from "@/lib/utils";
import type { TeamTone } from "@/features/team-dashboard/types/team.types";

const statCardVariants = cva("", {
  variants: {
    tone: {
      violet: "",
      emerald: "",
      amber: "",
      blue: "",
      neutral: "",
    },
  },
  defaultVariants: {
    tone: "neutral",
  },
});

const toneStyles: Record<TeamTone, string> = {
  violet: "bg-violet-500/10 text-violet-400",
  emerald: "bg-emerald-500/10 text-emerald-400",
  amber: "bg-amber-500/10 text-amber-400",
  blue: "bg-blue-500/10 text-blue-400",
  neutral: "bg-white/10 text-white/60",
};

export interface TeamStatCardProps extends VariantProps<typeof statCardVariants> {
  icon: LucideIcon;
  value: string;
  label: string;
  sublabel: string;
  badge: string;
}

export function TeamStatCard({
  icon: Icon,
  value,
  label,
  sublabel,
  badge,
  tone = "neutral",
}: TeamStatCardProps) {
  const resolvedTone: TeamTone = tone ?? "neutral";

  return (
    <DashboardCard className={cn(statCardVariants({ tone: resolvedTone }))}>
      <div className="mb-4 flex items-start justify-between">
        <div
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-xl",
            toneStyles[resolvedTone],
          )}
        >
          <Icon className="size-4" />
        </div>
        <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/55">
          {badge}
        </span>
      </div>
      <MetricValue size="lg" tone={resolvedTone}>
        {value}
      </MetricValue>
      <p className="mt-1 text-[12px] text-white/45">{label}</p>
      <p className="mt-0.5 text-[10px] text-white/25">{sublabel}</p>
    </DashboardCard>
  );
}
