import { memo } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LanguageOptionId, SelectOption } from "@/widgets/dashboard/model/settings/settings.types";

interface LanguageSelectorProps {
  onValueChange: (value: LanguageOptionId) => void;
  options: SelectOption<LanguageOptionId>[];
  value: LanguageOptionId;
}

export const LanguageSelector = memo(function LanguageSelector({
  onValueChange,
  options,
  value,
}: LanguageSelectorProps) {
  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger className="h-8 w-36 border-border/40 bg-muted/30 text-[12px] text-foreground/70">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border-border bg-popover text-popover-foreground">
        {options.map((option) => (
          <SelectItem key={option.value} className="text-[12px]" value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});

