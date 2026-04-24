"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { PullRequestAction } from "@/types/pullRequest.types";

const triggerVariants = cva(
  "justify-between rounded-xl border border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white",
  {
    variants: {
      size: {
        sm: "h-8 px-2.5 text-xs",
        md: "h-9 px-3 text-sm",
        lg: "h-10 px-3.5 text-sm",
      },
      variant: {
        primary: "border-violet-400/20 bg-violet-400/10 text-violet-200",
        ghost: "border-white/5 bg-transparent text-white/60",
        outline: "bg-transparent",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "outline",
    },
  },
);

export interface ActionDropdownProps
  extends VariantProps<typeof triggerVariants> {
  label: string;
  actions: PullRequestAction[];
  onActionSelect?: (action: PullRequestAction) => void;
  align?: "start" | "center" | "end";
  className?: string;
}

export function ActionDropdown({
  label,
  actions,
  onActionSelect,
  align = "end",
  className,
  size,
  variant,
}: ActionDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="no-style"
          className={cn(triggerVariants({ size, variant }), className)}
          aria-label={label}
        >
          <span>{label}</span>
          <ChevronDown className="size-3.5 text-white/45" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className="w-44 rounded-xl border-white/10 bg-[#111114] text-white"
      >
        <DropdownMenuLabel className="text-white/45">Actions</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />
        {actions.map((action) => (
          <DropdownMenuItem
            key={action.value}
            disabled={action.disabled}
            className="cursor-pointer rounded-lg px-2 py-2 text-white/80 focus:bg-white/10 focus:text-white"
            onSelect={() => onActionSelect?.(action)}
          >
            {action.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { triggerVariants as actionDropdownVariants };
