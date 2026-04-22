import { memo } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SelectOption, SyncIntervalValue } from "@/features/settings/types/settings.types";

interface SyncIntervalSelectProps {
  onValueChange: (value: SyncIntervalValue) => void;
  options: SelectOption<SyncIntervalValue>[];
  value: SyncIntervalValue;
}

export const SyncIntervalSelect = memo(function SyncIntervalSelect({
  onValueChange,
  options,
  value,
}: SyncIntervalSelectProps) {
  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger className="h-8 w-36 border-white/[0.08] bg-white/[0.04] text-[12px] text-white/70">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border-white/[0.08] bg-[#1a1a1e] text-white/80">
        {options.map((option) => (
          <SelectItem key={option.value} className="text-[12px]" value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});

