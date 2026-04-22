import { cva } from "class-variance-authority";
import { ChevronRight } from "lucide-react";
import { memo } from "react";

import type { SettingsNavSection } from "@/features/settings/types/settings.types";
import { cn } from "@/lib/utils";

const navItemVariants = cva(
  "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[12px] transition-all duration-150",
  {
    variants: {
      active: {
        true: "bg-violet-500/15 text-violet-400",
        false: "text-white/40 hover:bg-white/[0.05] hover:text-white/70",
      },
    },
  },
);

interface SettingsNavItemProps {
  item: SettingsNavSection & { isActive: boolean };
  onSelect: (id: SettingsNavSection["id"]) => void;
}

export const SettingsNavItem = memo(function SettingsNavItem({
  item,
  onSelect,
}: SettingsNavItemProps) {
  const Icon = item.icon;

  return (
    <button className={cn(navItemVariants({ active: item.isActive }))} onClick={() => onSelect(item.id)} type="button">
      <Icon className="h-4 w-4" />
      <span>{item.label}</span>
      {item.isActive ? <ChevronRight className="ml-auto h-3 w-3 opacity-50" /> : null}
    </button>
  );
});

