"use client";

import { ChevronDown, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusIndicator } from "@/features/goals-dashboard/components/shared/StatusIndicator";
import type { GoalFilter } from "@/features/goals-dashboard/types/goals-dashboard.types";

const filters: { id: GoalFilter; label: string }[] = [
  { id: "this-month", label: "This month" },
  { id: "this-quarter", label: "This quarter" },
  { id: "all-time", label: "All time" },
];

export interface GoalsHeaderProps {
  selectedFilter: GoalFilter;
  query: string;
  onFilterChange: (filter: GoalFilter) => void;
  onQueryChange: (query: string) => void;
}

export function GoalsHeader({
  selectedFilter,
  query,
  onFilterChange,
  onQueryChange,
}: GoalsHeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-4 border-b border-white/[0.06] bg-primaryColor px-6">
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-medium tracking-tight text-white/90">Goals</span>
        <ChevronDown className="h-3 w-3 text-white/30" />
      </div>

      <div className="flex-1" />

      <div className="hidden items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.04] p-1 md:flex">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            size="sm"
            variant="ghost"
            onClick={() => onFilterChange(filter.id)}
            className={
              selectedFilter === filter.id
                ? "h-7 rounded-lg bg-violet-500/20 px-3 text-[11px] text-violet-400 hover:bg-violet-500/20 hover:text-violet-400"
                : "h-7 rounded-lg px-3 text-[11px] text-white/35 hover:bg-transparent hover:text-white/60"
            }
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <Button className="h-9 rounded-xl border border-violet-500/20 bg-violet-500/10 px-3 text-[12px] text-violet-400 hover:bg-violet-500/15">
        <Plus className="mr-1.5 h-3.5 w-3.5" />
        New goal
      </Button>

      <div className="relative hidden w-44 md:block">
        <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
        <Input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search goals..."
          className="h-9 rounded-xl border-white/[0.07] bg-white/[0.05] pl-8 text-[12px] text-white placeholder:text-white/25"
        />
      </div>

      <div className="hidden items-center gap-1.5 md:flex">
        <StatusIndicator tone="emerald" size="sm" className="shadow-sm shadow-emerald-400/60" />
        <span className="text-[11px] text-white/30">Synced</span>
      </div>
    </header>
  );
}
