'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useState } from "react";

export interface DropDownItem {
  label: string;
  value: string;
}

interface DropDownProps {
  title: string;
  placeholderClass?: string;
  itemClass?: string;
  leftIcon?: React.ReactNode;
  items?: DropDownItem[];
}

export default function DropDown({ title, placeholderClass, itemClass, leftIcon, items }: DropDownProps) {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={(prev) => setOpen(prev)}>
      <DropdownMenuTrigger asChild>
        <Button variant="default" className={`flex items-center gap-2 text-sm cursor-pointer  ${placeholderClass}`}>
          {leftIcon}  {title} <ChevronDown size={13} className={`text-white/30 ${open ? "rotate-180 transition-all duration-300" : "transition-all duration-300"}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#0c0c0e] border border-white/6">
        <DropdownMenuGroup>
          {items?.map((item) => (
            <DropdownMenuItem key={item.value} className={`cursor-pointer ${itemClass} `}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}