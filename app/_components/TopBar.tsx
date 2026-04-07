import { Search, SlidersHorizontal, ChevronDown, Plus } from "lucide-react";
import { DropDownMenu } from "./index";
import { Button } from "@/components/ui/button";
export default function TopBar() {
  return (
    <header className="h-14 border-b border-white/6 bg-[#0c0c0e] flex items-center px-6 gap-4 shrink-0">
      {/* Page title */}
      <DropDownMenu />

      <div className="flex-1" />

      {/* Search */}
      <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/7 rounded-xl px-3 py-1.5 w-56 group focus-within:border-violet-500/50 transition-colors">
        <Search size={13} className="text-white/30 shrink-0" />
        <input
          placeholder="Search repos, PRs..."
          className="bg-transparent text-[12px] text-white/70 placeholder:text-white/25 outline-none w-full"
          readOnly
        />
      </div>

      {/* Date filter */}
      <button className="flex items-center gap-2 bg-white/5 border border-white/7 rounded-xl px-3 py-1.5 text-[12px] text-white/50 hover:text-white/70 hover:border-white/20 transition-all">
        <SlidersHorizontal size={13} />
        Last 30 days
        <ChevronDown size={12} className="text-white/30" />
      </button>
      <div className="hidden items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.04] p-1 md:flex">
        <Button
          size="sm"
          variant="ghost"
          className="h-7 rounded-lg bg-violet-500/20 px-3 text-[11px] text-violet-400 hover:bg-violet-500/20 hover:text-violet-400"
        >
          All repos
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="h-7 rounded-lg px-3 text-[11px] text-white/35 hover:bg-transparent hover:text-white/60"
        >
          devpulse/web
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="h-7 rounded-lg px-3 text-[11px] text-white/35 hover:bg-transparent hover:text-white/60"
        >
          devpulse/api
        </Button>
      </div>
       <Button className="h-9 rounded-xl border border-violet-500/20 bg-violet-500/10 px-3 text-[12px] text-violet-400 hover:bg-violet-500/15">
            <Plus className="mr-1.5 h-3.5 w-3.5" />
            Invite member
          </Button>
      {/* Sync badge */}
      <div className="hidden sm:flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/60" />
        <span className="text-[11px] text-white/30">Synced</span>
      </div>
    </header>
  );
}