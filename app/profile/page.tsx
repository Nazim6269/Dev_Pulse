import CustomScrollableContainer from "@/components/common/CustomScrollableContainer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { achievements, activityData, intensities, langColors, topRepos } from "@/data/profile";
import GitMerge from "@/icons/GitMerge";
import {
    MapPin,
    Link2,
    Star,
    GitFork,
    GitPullRequest,
    GitCommit,
    Eye,
    Zap,
    Trophy,
    TrendingUp,
    Calendar,
    Share2,
    ExternalLink,
    Edit3,
    Clock,
    Globe,
} from "lucide-react";



export default function ProfilePage() {
    return (
        <div className="flex h-screen bg-primaryColor text-white overflow-hidden font-sans">

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="h-14 border-b border-white/[0.06] bg-primaryColor flex items-center px-6 gap-4 shrink-0">
                    <span className="text-[13px] font-medium text-white/90">Public profile</span>
                    <div className="flex-1" />
                    <Button variant="ghost" size="sm" className="text-[11px] text-white/40 hover:text-white/70 h-8 gap-1.5">
                        <Share2 size={13} /> Share profile
                    </Button>
                    <Button variant="ghost" size="sm" className="text-[11px] text-white/40 hover:text-white/70 h-8 gap-1.5">
                        <ExternalLink size={13} /> View public page
                    </Button>
                    <Button size="sm" className="h-8 text-[11px] bg-violet-500/20 hover:bg-violet-500/30 text-violet-400 border border-violet-500/30 gap-1.5">
                        <Edit3 size={12} /> Edit profile
                    </Button>
                </header>

                <CustomScrollableContainer className="flex-1 p-6">
                    <div className="grid grid-cols-12 gap-5">

                        {/* ── LEFT: Profile card ── */}
                        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">

                            {/* Identity card */}
                            <div className="bg-[#111114] border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-4">
                                {/* Avatar */}
                                <div className="relative self-start">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 flex items-center justify-center text-2xl font-semibold text-white shadow-2xl shadow-orange-500/20">
                                        NU
                                    </div>
                                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-[#111114] shadow shadow-emerald-400/40" />
                                </div>

                                <div>
                                    <h1 className="text-[18px] font-semibold text-white tracking-tight leading-tight">Nazim Uddin</h1>
                                    <p className="text-[13px] text-white/40 mt-0.5">nazimdev10022001@gmail.com</p>
                                </div>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-1.5">
                                    <Badge className="bg-violet-500/15 text-violet-400 border-violet-500/25 text-[10px]">Pro</Badge>
                                    <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/25 text-[10px]">Open source</Badge>
                                    <Badge className="bg-amber-500/15 text-amber-400 border-amber-500/25 text-[10px]">Top reviewer</Badge>
                                </div>

                                <p className="text-[12px] text-white/45 leading-relaxed">
                                    Frontend engineer building scalable products. Open source contributor & coffee-driven debugger.
                                </p>

                                {/* Meta */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-[12px] text-white/35">
                                        <MapPin size={12} className="shrink-0" />
                                        Dhaka, Bangladesh
                                    </div>
                                    <div className="flex items-center gap-2 text-[12px] text-violet-400/70">
                                        <Link2 size={12} className="shrink-0" />
                                        devpulse.app/rafiq
                                    </div>
                                    <div className="flex items-center gap-2 text-[12px] text-white/35">
                                        <Calendar size={12} className="shrink-0" />
                                        Joined March 2023
                                    </div>
                                </div>

                                {/* Social */}
                                <div className="flex gap-2 pt-1">
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white/30 hover:text-white/70 hover:bg-white/[0.06]">
                                        <Globe size={15} />Github
                                    </Button>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white/30 hover:text-white/70 hover:bg-white/[0.06]">
                                        <Globe size={15} />Twitter
                                    </Button>
                                </div>

                                <Separator className="bg-white/[0.05]" />

                                {/* Stats grid */}
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { label: "Repos", value: "34" },
                                        { label: "Stars", value: "812" },
                                        { label: "Followers", value: "290" },
                                    ].map((s) => (
                                        <div key={s.label} className="bg-white/[0.04] rounded-xl p-2.5 text-center">
                                            <p className="text-[16px] font-semibold text-white">{s.value}</p>
                                            <p className="text-[10px] text-white/30 mt-0.5">{s.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Top languages */}
                                <div>
                                    <p className="text-[10px] text-white/20 uppercase tracking-widest mb-2.5">Top languages</p>
                                    <div className="flex flex-col gap-2">
                                        {Object.entries(langColors).map(([lang, color]) => (
                                            <div key={lang} className="flex items-center gap-2.5">
                                                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                                                <span className="text-[12px] text-white/50 flex-1">{lang}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Monthly KPIs */}
                            <div className="bg-[#111114] border border-white/[0.06] rounded-2xl p-5">
                                <p className="text-[11px] text-white/25 uppercase tracking-widest mb-4">This month</p>
                                <div className="flex flex-col gap-3">
                                    {[
                                        { icon: GitPullRequest, label: "PRs merged", value: "47", color: "text-violet-400", bg: "bg-violet-500/10" },
                                        { icon: GitCommit, label: "Commits", value: "318", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                                        { icon: Eye, label: "Reviews given", value: "83", color: "text-amber-400", bg: "bg-amber-500/10" },
                                        { icon: Clock, label: "Avg cycle time", value: "18h", color: "text-rose-400", bg: "bg-rose-500/10" },
                                    ].map(({ icon: Icon, label, value, color, bg }) => (
                                        <div key={label} className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                                                <Icon size={14} className={color} />
                                            </div>
                                            <span className="text-[12px] text-white/50 flex-1">{label}</span>
                                            <span className={`text-[14px] font-semibold ${color}`}>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT: Feed ── */}
                        <div className="col-span-12 md:col-span-8 flex flex-col gap-4">

                            {/* Contribution calendar */}
                            <div className="bg-[#111114] border border-white/[0.06] rounded-2xl p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-[13px] font-medium text-white/90">Contribution activity</p>
                                        <p className="text-[11px] text-white/30 mt-0.5">318 contributions · last 36 weeks</p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] text-white/25">Less</span>
                                        {[0, 1, 2, 3, 4, 5].map((i) => (
                                            <span key={i} className={`w-2.5 h-2.5 rounded-sm ${intensities[i]}`} />
                                        ))}
                                        <span className="text-[10px] text-white/25">More</span>
                                    </div>
                                </div>

                                {/* Heatmap grid — 5 rows × 36 cols */}
                                <div className="flex flex-col gap-[3px]">
                                    {[0, 1, 2, 3, 4].map((row) => (
                                        <div key={row} className="flex gap-[3px]">
                                            {activityData.map((v, col) => {
                                                const shifted = (v + row) % 6;
                                                return (
                                                    <div
                                                        key={col}
                                                        className={`flex-1 h-[10px] rounded-[2px] ${intensities[shifted]} hover:ring-1 hover:ring-violet-400/40 cursor-default transition-colors`}
                                                    />
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>

                                {/* Streak callout */}
                                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/[0.05]">
                                    <div className="flex items-center gap-2">
                                        <Zap size={13} className="text-amber-400" />
                                        <span className="text-[12px] text-white/60">Current streak: <span className="text-amber-400 font-medium">24 days</span></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TrendingUp size={13} className="text-emerald-400" />
                                        <span className="text-[12px] text-white/60">Personal best: <span className="text-emerald-400 font-medium">31 days</span></span>
                                    </div>
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="bg-[#111114] border border-white/[0.06] rounded-2xl p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-[13px] font-medium text-white/90">Achievements</p>
                                    <Badge className="bg-amber-400/15 text-amber-400 border-amber-400/25 text-[10px]">
                                        <Star size={9} className="mr-1" /> 6 earned
                                    </Badge>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {achievements.map(({ icon: Icon, label, desc, color, bg }) => (
                                        <div key={label} className="flex flex-col gap-2.5 p-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl hover:border-white/[0.10] transition-all group cursor-default">
                                            <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center`}>
                                                <Icon size={16} className={color} />
                                            </div>
                                            <div>
                                                <p className="text-[12px] font-medium text-white/80 group-hover:text-white transition-colors">{label}</p>
                                                <p className="text-[10px] text-white/35 mt-0.5">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Top repos */}
                            <div className="bg-[#111114] border border-white/[0.06] rounded-2xl p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-[13px] font-medium text-white/90">Repositories</p>
                                    <Button variant="ghost" size="sm" className="text-[11px] text-violet-400/60 hover:text-violet-400 h-7">
                                        View all 34 →
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {topRepos.map((repo) => (
                                        <div
                                            key={repo.name}
                                            className="p-4 bg-white/[0.03] border border-white/[0.05] rounded-xl hover:border-white/[0.10] hover:bg-white/[0.05] transition-all cursor-default group"
                                        >
                                            <div className="flex items-start justify-between mb-1.5">
                                                <p className="text-[12px] font-medium text-violet-400 truncate">{repo.name}</p>
                                                <ExternalLink size={11} className="text-white/0 group-hover:text-white/30 transition-colors shrink-0 mt-0.5" />
                                            </div>
                                            <p className="text-[11px] text-white/35 mb-3 leading-relaxed">{repo.desc}</p>
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center gap-1.5 text-[10px] text-white/30">
                                                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: langColors[repo.lang] ?? "#888" }} />
                                                    {repo.lang}
                                                </span>
                                                <span className="flex items-center gap-1 text-[10px] text-white/30">
                                                    <Star size={9} /> {repo.stars}
                                                </span>
                                                <span className="flex items-center gap-1 text-[10px] text-white/30">
                                                    <GitFork size={9} /> {repo.forks}
                                                </span>
                                                <span className="ml-auto text-[9px] text-white/20">{repo.updated}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent activity feed */}
                            <div className="bg-[#111114] border border-white/[0.06] rounded-2xl p-5">
                                <p className="text-[13px] font-medium text-white/90 mb-4">Recent activity</p>
                                <div className="flex flex-col">
                                    {[
                                        { icon: GitMerge, color: "text-violet-400", bg: "bg-violet-500/15", text: "Merged PR feat: OAuth token refresh logic", repo: "devpulse/backend", time: "2h ago" },
                                        { icon: Eye, color: "text-amber-400", bg: "bg-amber-500/15", text: "Reviewed fix: database connection pooling", repo: "devpulse/api", time: "5h ago" },
                                        { icon: GitCommit, color: "text-emerald-400", bg: "bg-emerald-500/15", text: "Pushed 4 commits to feat/cycle-time-chart", repo: "devpulse/web", time: "8h ago" },
                                        { icon: Star, color: "text-amber-400", bg: "bg-amber-500/15", text: "Starred oss/rxstore reached 500 stars", repo: "oss/rxstore", time: "1d ago" },
                                        { icon: GitPullRequest, color: "text-blue-400", bg: "bg-blue-500/15", text: "Opened PR chore: upgrade Prisma to v5.8", repo: "devpulse/backend", time: "1d ago" },
                                    ].map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={i} className="flex items-start gap-3 py-3 border-b border-white/[0.04] last:border-0 group cursor-default">
                                                <div className={`w-7 h-7 rounded-lg ${item.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                                                    <Icon size={13} className={item.color} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[12px] text-white/65 group-hover:text-white/85 transition-colors truncate">{item.text}</p>
                                                    <span className="text-[10px] font-mono text-violet-400/50">{item.repo}</span>
                                                </div>
                                                <span className="text-[10px] text-white/25 shrink-0 mt-0.5">{item.time}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </CustomScrollableContainer>
            </div>
        </div>
    );
}

