import { GitPullRequest, GitCommit, Eye, Clock } from "lucide-react";
import { TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    label: "PRs merged",
    value: "47",
    sub: "this month",
    change: "+12%",
    up: true,
    icon: GitPullRequest,
    accent: "text-violet-400",
    iconBg: "bg-violet-500/10",
    glow: "shadow-violet-500/10",
  },
  {
    label: "Commits",
    value: "318",
    sub: "this month",
    change: "+8%",
    up: true,
    icon: GitCommit,
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    glow: "shadow-emerald-500/10",
  },
  {
    label: "Code reviews",
    value: "83",
    sub: "this month",
    change: "+24%",
    up: true,
    icon: Eye,
    accent: "text-amber-400",
    iconBg: "bg-amber-500/10",
    glow: "shadow-amber-500/10",
  },
  {
    label: "Avg cycle time",
    value: "18h",
    sub: "per PR",
    change: "-6%",
    up: false,
    icon: Clock,
    accent: "text-rose-400",
    iconBg: "bg-rose-500/10",
    glow: "shadow-rose-500/10",
  },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
      {stats.map(({ label, value, sub, change, up, icon: Icon, accent, iconBg, glow }) => (
        <div
          key={label}
          className={`bg-card border border-border rounded-2xl p-5 flex flex-col justify-between shadow-lg ${glow} group hover:border-primary/20 transition-colors duration-300`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center`}>
              <Icon size={16} className={accent} />
            </div>
            <span
              className={`flex items-center gap-0.5 text-[11px] font-medium px-2 py-0.5 rounded-full border
                ${up
                  ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
                  : "text-rose-500 bg-rose-500/10 border-rose-500/20"
                }`}
            >
              {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
              {change}
            </span>
          </div>

          <div>
            <p className={`text-3xl font-semibold tracking-tight ${accent}`}>{value}</p>
            <p className="text-[12px] text-foreground mt-1">{label}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}