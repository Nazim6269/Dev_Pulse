import { cva, type VariantProps } from "class-variance-authority";

import { DashboardCard } from "@/features/goals-dashboard/components/shared/DashboardCard";
import { IconWrapper } from "@/features/goals-dashboard/components/shared/IconWrapper";
import { MetricValue } from "@/features/goals-dashboard/components/shared/MetricValue";
import { cn } from "@/lib/utils";
import type { DashboardTone, RecordCardModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

const recordCardVariants = cva("", {
  variants: {
    tone: {
      violet: "",
      emerald: "",
      amber: "",
      rose: "",
      blue: "",
      neutral: "",
    },
  },
});

const metricToneMap: Record<DashboardTone, DashboardTone> = {
  violet: "violet",
  emerald: "emerald",
  amber: "amber",
  rose: "rose",
  blue: "blue",
  neutral: "neutral",
};

export interface RecordCardProps
  extends VariantProps<typeof recordCardVariants> {
  item: RecordCardModel;
}

export function RecordCard({ item }: RecordCardProps) {
  return (
    <DashboardCard
      variant="subtle"
      className={cn(recordCardVariants({ tone: item.tone }), "transition-colors hover:border-white/[0.09]")}
      contentClassName="p-4"
    >
      <IconWrapper icon={item.icon} tone={item.tone} size="lg" className="mb-3" />
      <MetricValue size="lg" tone={metricToneMap[item.tone]} className="text-[22px]">
        {item.value}
      </MetricValue>
      <p className="mt-0.5 text-[12px] text-white/50">{item.label}</p>
      <p className="mt-0.5 text-[10px] text-white/25">{item.sublabel}</p>
    </DashboardCard>
  );
}
