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
  href?: string;
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
  const [value, setValue] = useState(title);

  const handleValueChange = (value: string) => {
    console.log(value);
    setValue(value);
    setOpen(false);
  }
  return (
    <DropdownMenu open={open} onOpenChange={(prev) => setOpen(prev)}>
      <DropdownMenuTrigger  >
        <Button variant="default" className={`flex items-center gap-2 text-sm cursor-pointer  ${placeholderClass}`} >
          {leftIcon}  {value} <ChevronDown size={13} className={`text-white/30 ${open ? "rotate-180 transition-all duration-300" : "transition-all duration-300"}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-primaryColor border border-white/6 ">
        <DropdownMenuGroup>
          {items?.map((item) => (
            <DropdownMenuItem key={item.value} className={`cursor-pointer ${itemClass} `} onClick={() => handleValueChange(item.label)}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}