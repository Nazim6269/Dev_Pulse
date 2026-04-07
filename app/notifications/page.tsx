import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CustomScrollableContainer from "@/components/common/CustomScrollableContainer";
import {
    CheckCheck,
    Filter,
    Bell,
    BellOff,
    Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { notifications, notificationFilterTabs } from "@/data/notification";
import { Notification, typeConfig } from "@/types/notification";

const unreadCount = notifications.filter((n) => !n.read).length;

const groupedByDate: { label: string; items: Notification[] }[] = [
    { label: "Today", items: notifications.filter((n) => n.time.includes("min") || n.time.includes("hr")) },
    { label: "Yesterday", items: notifications.filter((n) => n.time === "1 day ago") },
    { label: "This week", items: notifications.filter((n) => n.time.includes("days") || n.time.includes("2 days") || n.time.includes("3 days") || n.time.includes("4 days")) },
];

export default function NotificationsPage() {
    return (
        <div className="flex h-screen bg-[#0c0c0e] text-white overflow-hidden font-sans">

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="h-14 border-b border-white/[0.06] bg-[#0c0c0e] flex items-center px-6 gap-4 shrink-0">
                    <div className="flex items-center gap-3">
                        <Bell size={15} className="text-white/60" />
                        <span className="text-[13px] font-medium text-white/90">Notifications</span>
                        {unreadCount > 0 && (
                            <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/30 text-[10px] h-5 px-1.5">
                                {unreadCount} new
                            </Badge>
                        )}
                    </div>

                    <div className="flex-1" />

                    <Button variant="ghost" size="sm" className="text-[11px] text-white/40 hover:text-white/70 h-8 gap-1.5">
                        <CheckCheck size={13} /> Mark all read
                    </Button>
                    <Button variant="ghost" size="sm" className="text-[11px] text-white/40 hover:text-white/70 h-8 gap-1.5">
                        <BellOff size={13} /> Mute all
                    </Button>
                    <Button variant="ghost" size="sm" className="text-[11px] text-white/40 hover:text-white/70 h-8 gap-1.5">
                        <Filter size={13} /> Filter
                    </Button>
                </header>

                <div className="flex-1 flex overflow-hidden">
                    {/* Filter sidebar */}
                    <aside className="w-44 border-r border-white/[0.06] bg-[#0e0e11] flex flex-col py-5 px-3 shrink-0 gap-1">
                        <p className="text-[10px] text-white/25 uppercase tracking-widest px-3 mb-2">Filter</p>
                        {notificationFilterTabs.map((tab, i) => (
                            <button
                                key={tab}
                                className={cn(
                                    "w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all text-[12px]",
                                    i === 0
                                        ? "bg-violet-500/15 text-violet-400"
                                        : "text-white/40 hover:text-white/70 hover:bg-white/[0.05]"
                                )}
                            >
                                <span>{tab}</span>
                                {tab === "All" && (
                                    <span className="text-[10px] text-violet-400/70">{notifications.length}</span>
                                )}
                                {tab === "Unread" && (
                                    <span className="text-[10px] bg-rose-400/20 text-rose-400 px-1.5 rounded-full">{unreadCount}</span>
                                )}
                            </button>
                        ))}

                        <div className="mt-auto px-3 pt-4 border-t border-white/[0.05]">
                            <p className="text-[10px] text-white/20 mb-2 uppercase tracking-widest">Channels</p>
                            {["In-app", "Email", "Slack"].map((c, i) => (
                                <button key={c} className="w-full flex items-center gap-2 py-1.5 text-[11px] text-white/35 hover:text-white/55 transition-colors">
                                    <span className={cn("w-1.5 h-1.5 rounded-full", i === 0 ? "bg-violet-400" : i === 1 ? "bg-amber-400" : "bg-emerald-400")} />
                                    {c}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Notification feed */}
                    <CustomScrollableContainer className="flex-1">
                        <div className="py-6 px-6">

                            {/* Urgent banner */}
                            <div className="mb-5 p-4 bg-amber-500/[0.07] border border-amber-500/[0.18] rounded-2xl flex items-start gap-3">
                                <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
                                    <Clock size={14} className="text-amber-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[12px] font-medium text-amber-400">Review requested · 2 min ago</p>
                                    <p className="text-[12px] text-white/55 mt-0.5">
                                        <span className="text-white/75">Tasmia Nur</span> requested your review on{" "}
                                        <span className="text-violet-400 font-mono text-[11px]">feat: add PR cycle time chart</span>
                                    </p>
                                </div>
                                <Button size="sm" className="h-7 text-[11px] bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 shrink-0">
                                    Review
                                </Button>
                            </div>

                            {/* Grouped notifications */}
                            {groupedByDate.map((group) =>
                                group.items.length === 0 ? null : (
                                    <div key={group.label} className="mb-6">
                                        <p className="text-[10px] text-white/25 uppercase tracking-widest mb-3 px-1">{group.label}</p>
                                        <div className="flex flex-col gap-1">
                                            {group.items.map((notif) => {
                                                const cfg = typeConfig[notif.type];
                                                const Icon = cfg.icon;
                                                return (
                                                    <div
                                                        key={notif.id}
                                                        className={cn(
                                                            "flex items-start gap-3.5 p-4 rounded-2xl border transition-all duration-150 cursor-default group hover:border-white/[0.10]",
                                                            notif.read
                                                                ? "bg-transparent border-white/[0.04] hover:bg-white/[0.02]"
                                                                : "bg-white/[0.03] border-white/[0.07] hover:bg-white/[0.05]"
                                                        )}
                                                    >
                                                        {/* Unread dot */}
                                                        <div className="relative shrink-0 mt-0.5">
                                                            <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", cfg.iconBg)}>
                                                                <Icon size={16} className={cfg.iconColor} />
                                                            </div>
                                                            {!notif.read && (
                                                                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-rose-400 border-2 border-[#0c0c0e]" />
                                                            )}
                                                        </div>

                                                        {/* Body */}
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-start justify-between gap-2 mb-0.5">
                                                                <p className={cn(
                                                                    "text-[12px] leading-tight",
                                                                    notif.read ? "text-white/55" : "text-white/85 font-medium"
                                                                )}>
                                                                    {notif.title}
                                                                </p>
                                                                <span className="text-[10px] text-white/25 shrink-0 mt-0.5">{notif.time}</span>
                                                            </div>
                                                            <p className="text-[11px] text-white/35 leading-relaxed line-clamp-2">{notif.body}</p>
                                                            {notif.repo && (
                                                                <span className="inline-block mt-1.5 text-[10px] font-mono text-violet-400/60 bg-violet-400/[0.07] px-2 py-0.5 rounded-md">
                                                                    {notif.repo}
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Actions on hover */}
                                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                                                            {!notif.read && (
                                                                <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-white/30 hover:text-white/70">
                                                                    <CheckCheck size={13} />
                                                                </Button>
                                                            )}
                                                            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-white/30 hover:text-white/70">
                                                                <BellOff size={13} />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )
                            )}

                            {/* Empty state / load more */}
                            <div className="flex flex-col items-center gap-3 py-8 text-center">
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                                    <Bell size={20} className="text-white/20" />
                                </div>
                                <p className="text-[12px] text-white/30">You're all caught up</p>
                                <Button variant="ghost" size="sm" className="text-[11px] text-violet-400/60 hover:text-violet-400">
                                    Load older notifications
                                </Button>
                            </div>
                        </div>
                    </CustomScrollableContainer>

                    {/* Right panel — notification stats */}
                    <aside className="w-60 border-l border-white/[0.06] bg-[#0e0e11] flex flex-col py-5 px-4 shrink-0 gap-5">
                        <div>
                            <p className="text-[10px] text-white/25 uppercase tracking-widest mb-3">This week</p>
                            <div className="flex flex-col gap-2">
                                {[
                                    { label: "Reviews requested", count: 6, color: "text-amber-400" },
                                    { label: "PRs merged", count: 4, color: "text-violet-400" },
                                    { label: "Goals completed", count: 2, color: "text-emerald-400" },
                                    { label: "Team mentions", count: 1, color: "text-rose-400" },
                                ].map((s) => (
                                    <div key={s.label} className="flex items-center justify-between">
                                        <span className="text-[11px] text-white/40">{s.label}</span>
                                        <span className={cn("text-[13px] font-semibold", s.color)}>{s.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-white/[0.05] pt-4">
                            <p className="text-[10px] text-white/25 uppercase tracking-widest mb-3">Activity</p>
                            {/* Mini sparkline bars */}
                            <div className="flex items-end gap-1 h-14 mb-2">
                                {[3, 7, 4, 9, 5, 12, 8].map((v, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-t-sm bg-violet-500/30"
                                        style={{ height: `${Math.round(v / 12 * 100)}%` }}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between text-[9px] text-white/20">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                            </div>
                        </div>

                        <div className="border-t border-white/[0.05] pt-4">
                            <p className="text-[10px] text-white/25 uppercase tracking-widest mb-3">Quick settings</p>
                            <div className="flex flex-col gap-3">
                                {[
                                    { label: "Push notifications", on: true },
                                    { label: "Email digest", on: false },
                                    { label: "Slack alerts", on: false },
                                ].map((s) => (
                                    <div key={s.label} className="flex items-center justify-between">
                                        <span className="text-[11px] text-white/45">{s.label}</span>
                                        <div className={cn(
                                            "w-8 h-4 rounded-full transition-colors relative",
                                            s.on ? "bg-violet-500" : "bg-white/[0.10]"
                                        )}>
                                            <span className={cn(
                                                "absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all",
                                                s.on ? "left-[18px]" : "left-0.5"
                                            )} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}