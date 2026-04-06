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

export default function DropDown() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="default" className="flex items-center gap-2 text-[13px]  text-white/90 hover:text-white/100">Overview <ChevronDown size={13} className="text-white/30" /></Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuLabel>Overview</DropdownMenuLabel>     
        <DropdownMenuItem className="text-white/90 hover:text-white/100">PRs</DropdownMenuItem>
        <DropdownMenuItem className="text-white/90 hover:text-white/100">Issues</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem className="text-white/90 hover:text-white/100">Repos</DropdownMenuItem>
        <DropdownMenuItem className="text-white/90 hover:text-white/100">Contributors</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}