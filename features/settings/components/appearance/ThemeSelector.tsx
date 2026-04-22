import { cva } from "class-variance-authority";
import { memo } from "react";

import type { ThemeOptionId } from "@/features/settings/types/settings.types";
import { cn } from "@/lib/utils";

const themeButtonVariants = cva(
  "rounded-lg border px-3 py-1.5 text-[11px] capitalize transition-all",
  {
    variants: {
      active: {
        true: "border-violet-500/40 bg-violet-500/20 text-violet-400",
        false: "border-white/[0.08] bg-white/[0.04] text-white/35 hover:text-white/60",
      },
    },
  },
);

interface ThemeSelectorProps {
  options: Array<{ label: string; selected: boolean; value: ThemeOptionId }>;
  onSelect: (value: ThemeOptionId) => void;
}

export const ThemeSelector = memo(function ThemeSelector({
  onSelect,
  options,
}: ThemeSelectorProps) {
  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          className={cn(themeButtonVariants({ active: option.selected }))}
          onClick={() => onSelect(option.value)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
});

