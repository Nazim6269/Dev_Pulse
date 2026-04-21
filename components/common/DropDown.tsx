"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cva, VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export interface DropDownItem {
  label: string;
  value: string;
  href?: string;
}

interface DropDownProps {
  title: string;
  placeholderClass?: string;
  itemClass?: string;
  leftIcon?: React.ReactNode;
  items?: DropDownItem[];
  size?: "sm" | "md" | "lg";
}

interface DropDownProps extends VariantProps<typeof defaultButtonVariants> {
  title: string;
  placeholderClass?: string;
  itemClass?: string;
  leftIcon?: React.ReactNode;
  items?: DropDownItem[];
}

const defaultButtonVariants = cva(
  "flex items-center gap-2 text-sm cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm",
        lg: "h-12 text-lg",
      },
      default: {},
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export default function DropDown({
  title,
  placeholderClass,
  itemClass,
  leftIcon,
  items,
  size = "md",
}: DropDownProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(title);

  const handleValueChange = (value: string) => {
    setValue(value);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={(prev) => setOpen(prev)}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className={defaultButtonVariants({
            size,
            className: placeholderClass,
          })}
        >
          {leftIcon} {value}{" "}
          <ChevronDown
            size={13}
            className={`text-white/30 ${open ? "rotate-180 transition-all duration-300" : "transition-all duration-300"}`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-primaryColor border border-white/6 ">
        <DropdownMenuGroup>
          {items?.map((item) => (
            <DropdownMenuItem
              key={item.value}
              className={`cursor-pointer ${itemClass} `}
              onClick={() => handleValueChange(item.label)}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
