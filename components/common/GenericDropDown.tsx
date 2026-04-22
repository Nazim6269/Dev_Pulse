"use client";

import React, { useRef, useState } from "react";
import { selectTokens } from "./design-tokens/select";
import { ChevronDown } from "lucide-react";
import { useClickOutside, useSelect } from "@/hooks";

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export interface SelectSlots {
  trigger?: string;
  dropdown?: string;
  item?: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface GenericDropDownProps {
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  variant?: "dark";
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg";
  searchable?: boolean;
  slots?: SelectSlots;
  className?: string;
}

const GenericDropDown = ({
  options,
  value,
  onValueChange,
  variant = "dark",
  size = "md",
  radius = "md",
  searchable,
  slots,
  placeholder,
  leftIcon,
  className,
}: GenericDropDownProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(value);
  const [open, setOpen] = useState(false);
  const { searchQuery, setSearchQuery, filteredOptions } = useSelect(options);

  const handleToggle = () => setOpen((prev) => !prev);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const v = selectTokens.variants[variant];

  useClickOutside(dropdownRef, () => {
    setOpen(false);
  });
  const currentValue = value !== undefined ? value : internalValue;
  const selectedLabel = options.find((o) => o.value === currentValue)?.label;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          selectTokens.base,
          v.trigger,
          selectTokens.sizes[size],
          selectTokens.radius[radius],
          "flex items-center justify-between gap-2 overflow-hidden",
          selectedLabel ? "text-white" : "text-white/30",
          slots?.trigger,
          className,
        )}
      >
        <div className="flex items-center gap-2 min-w-0">
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span className="truncate">{selectedLabel || placeholder}</span>
        </div>

        <span className="shrink-0">
          <ChevronDown
            size={14}
            className={cn(
              "transition-transform duration-300 ease-in-out",
              open ? "rotate-180" : "",
            )}
          />
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={cn(
            "absolute z-50 mt-2 shadow-2xl rounded-xl min-w-full lg:min-w-[200px] border border-white/10 overflow-hidden backdrop-blur-xl",
            v.dropdown,
            slots?.dropdown,
          )}
        >
          {/* Search */}
          {searchable && (
            <div className="p-2 border-b border-white/6">
              <input
                className="w-full bg-white/5 text-white px-3 py-2 text-sm rounded-lg outline-none border border-white/5 focus:border-violet-500/50 transition-colors"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}

          {/* Options */}
          <div className="max-h-64 overflow-y-auto py-1.5 px-1.5 custom-scrollbar">
            {filteredOptions.length === 0 && (
              <div className="p-3 text-sm text-white/40 text-center italic">
                No results found
              </div>
            )}

            {filteredOptions.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  if (value === undefined) {
                    setInternalValue(opt.value);
                  }
                  onValueChange?.(opt.value);
                  setOpen(false);
                }}
                className={cn(
                  "cursor-pointer px-3 py-2.5 text-sm transition-all duration-200 rounded-lg mb-0.5 last:mb-0 flex items-center justify-between group",
                  v.item,
                  v.itemHover,
                  currentValue === opt.value
                    ? "bg-violet-500/20 text-white font-medium"
                    : "text-white/60 hover:text-white",
                  slots?.item,
                )}
              >
                <span className="truncate">{opt.label}</span>
                {currentValue === opt.value && (
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

GenericDropDown.displayName = "GenericDropDown";

export default GenericDropDown;
