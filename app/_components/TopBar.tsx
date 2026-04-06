import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-14 border-b border-white/[0.06] bg-[#0c0c0e] flex items-center px-6 gap-4 shrink-0">
      {/* Page title */}
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-medium text-white/90 tracking-tight">Overview</span>
        <ChevronDown size={13} className="text-white/30" />
      </div>

      <div className="flex-1" />

      {/* Search */}
      <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.07] rounded-xl px-3 py-1.5 w-56 group focus-within:border-violet-500/50 transition-colors">
        <Search size={13} className="text-white/30 shrink-0" />
        <input
          placeholder="Search repos, PRs..."
          className="bg-transparent text-[12px] text-white/70 placeholder:text-white/25 outline-none w-full"
          readOnly
        />
      </div>

      {/* Date filter */}
      <button className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.07] rounded-xl px-3 py-1.5 text-[12px] text-white/50 hover:text-white/70 hover:border-white/20 transition-all">
        <SlidersHorizontal size={13} />
        Last 30 days
        <ChevronDown size={12} className="text-white/30" />
      </button>

      {/* Sync badge */}
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/60" />
        <span className="text-[11px] text-white/30">Synced</span>
      </div>
    </header>
  );
}