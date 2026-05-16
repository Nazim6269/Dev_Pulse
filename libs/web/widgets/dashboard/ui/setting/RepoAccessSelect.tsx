import { memo } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RepoAccessValue, SelectOption } from "../../model/settings/settings.types";



interface RepoAccessSelectProps {
  onValueChange: (value: RepoAccessValue) => void;
  options: SelectOption<RepoAccessValue>[];
  value: RepoAccessValue;
}

export const RepoAccessSelect = memo(function RepoAccessSelect({
  onValueChange,
  options,
  value,
}: RepoAccessSelectProps) {
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

