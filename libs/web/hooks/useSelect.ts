// hooks/useSelect.ts
import { useMemo, useState } from "react";
import { SelectOption } from "@/components/common/GenericDropDown";

export function useSelect(options: SelectOption[]) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOptions = useMemo(() => {
    if (!searchQuery) return options;
    return options.filter((opt: SelectOption) =>
      opt.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [options, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredOptions,
  };
}
