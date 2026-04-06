import {
    LayoutDashboard,
    GitPullRequest,
    GitCommit,
    Users,
    Target,
    Settings,
    Bell,
    Zap,
  } from "lucide-react";
  
  const navItems = [
    { icon: LayoutDashboard, label: "Overview", active: true },
    { icon: GitPullRequest, label: "Pull Requests" },
    { icon: GitCommit, label: "Commits" },
    { icon: Users, label: "Team" },
    { icon: Target, label: "Goals" },
  ];
  
  const bottomItems = [
    { icon: Bell, label: "Notifications" },
    { icon: Settings, label: "Settings" },
  ];
  
  export default function Sidebar() {
    return (
      <aside className="hidden md:flex flex-col w-[68px] bg-[#111114] border-r border-white/[0.06] py-5 items-center gap-2 shrink-0">
        {/* Logo */}
        <div className="w-9 h-9 rounded-xl bg-violet-500 flex items-center justify-center mb-4 shadow-lg shadow-violet-500/20">
          <Zap size={16} className="text-white fill-white" />
        </div>
  
        <nav className="flex flex-col gap-1 flex-1 w-full px-2">
          {navItems.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              title={label}
              className={`w-full aspect-square rounded-xl flex items-center justify-center transition-all duration-200 group relative
                ${active
                  ? "bg-violet-500/15 text-violet-400"
                  : "text-white/30 hover:text-white/70 hover:bg-white/[0.05]"
                }`}
            >
              <Icon size={18} />
              {active && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-violet-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>
  
        <div className="flex flex-col gap-1 w-full px-2 pb-2">
          {bottomItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              title={label}
              className="w-full aspect-square rounded-xl flex items-center justify-center text-white/25 hover:text-white/60 hover:bg-white/[0.05] transition-all duration-200"
            >
              <Icon size={18} />
            </button>
          ))}
          {/* Avatar */}
          <div className="mt-2 w-full flex justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[11px] font-semibold text-white shadow-md">
              NA
            </div>
          </div>
        </div>
      </aside>
    );
  }