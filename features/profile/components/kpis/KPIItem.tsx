import { cva } from "class-variance-authority";

import { IconWrapper } from "@/features/profile/components/shared/IconWrapper";
import type { ProfileKPIModel } from "@/features/profile/types/profile.types";

const valueToneClasses = cva("text-[14px] font-semibold", {
  variants: {
    tone: {
      violet: "text-violet-400",
      emerald: "text-emerald-400",
      amber: "text-amber-400",
      rose: "text-rose-400",
      blue: "text-blue-400",
      neutral: "text-white/70",
    },
  },
});

export function KPIItem({ item }: { item: ProfileKPIModel }) {
  return (
    <div className="flex items-center gap-3">
      <IconWrapper icon={item.icon} tone={item.tone} />
      <span className="flex-1 text-[12px] text-white/50">{item.label}</span>
      <span className={valueToneClasses({ tone: item.tone })}>{item.value}</span>
    </div>
  );
}
