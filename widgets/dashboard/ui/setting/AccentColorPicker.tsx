import { cva } from "class-variance-authority";
import { memo } from "react";

import type { AccentColorId } from "@/widgets/dashboard/model/settings/settings.types";
import { cn } from "@/lib/utils";

const accentButtonVariants = cva(
  "h-6 w-6 rounded-full ring-2 ring-offset-1 ring-offset-card transition-all",
  {
    variants: {
      active: {
        true: "ring-foreground/60",
        false: "ring-transparent hover:ring-foreground/30",
      },
    },
  },
);

interface AccentColorPickerProps {
  colors: Array<{
    selected: boolean;
    swatchClassName: string;
    value: AccentColorId;
  }>;
  onSelect: (value: AccentColorId) => void;
}

export const AccentColorPicker = memo(function AccentColorPicker({
  colors,
  onSelect,
}: AccentColorPickerProps) {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color.value}
          className={cn(
            accentButtonVariants({ active: color.selected }),
            color.swatchClassName,
          )}
          onClick={() => onSelect(color.value)}
          type="button"
        />
      ))}
    </div>
  );
});
