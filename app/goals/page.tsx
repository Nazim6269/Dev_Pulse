"use client";

import {
  Bell,
  ChevronDown,
  CircleDot,
  Clock3,
  GitPullRequest,
  LayoutGrid,
  Plus,
  Settings,
  Star,
  Target,
  Users,
  Zap,
  TrendingUp,
  Check,
  AlertCircle,
  Trophy,
  Flame,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const goals = [
  {
    label: "Merge 20 PRs this month",
    cat: "Shipping",
    cur: 14,
    target: 20,
    pct: 70,
    state: "active",
    valueClass: "text-amber-400",
    barClass: "bg-amber-400",
    daysLeft: 12,
  },
  {
    label: "Maintain 80%+ review rate",
    cat: "Quality",
    cur: 83,
    target: 80,
    pct: 100,
    state: "done",
    valueClass: "text-emerald-400",
    barClass: "bg-emerald-400",
    daysLeft: 0,
  },
  {
    label: "Reduce cycle time below 20h",
    cat: "Speed",
    cur: 18,
    target: 20,
    pct: 100,
    state: "done",
    valueClass: "text-emerald-400",
    barClass: "bg-emerald-400",
    daysLeft: 0,
  },
  {
    label: "Review 30+ PRs this month",
    cat: "Reviews",
    cur: 22,
    target: 30,
    pct: 73,
    state: "active",
    valueClass: "text-amber-400",
    barClass: "bg-amber-400",
    daysLeft: 12,
  },
  {
    label: "Zero missed review SLAs",
    cat: "Quality",
    cur: 1,
    target: 0,
    pct: 0,
    state: "at-risk",
    valueClass: "text-rose-400",
    barClass: "bg-rose-400",
    daysLeft: 12,
  },
  {
    label: "Hit 300+ commits",
    cat: "Volume",
    cur: 318,
    target: 300,
    pct: 100,
    state: "done",
    valueClass: "text-emerald-400",
    barClass: "bg-emerald-400",
    daysLeft: 0,
  },
  {
    label: "Open-source 1 library",
    cat: "OSS",
    cur: 0,
    target: 1,
    pct: 0,
    state: "pending",
    valueClass: "text-white/35",
    barClass: "bg-white/20",
    daysLeft: 12,
  },
  {
    label: "Write 4 technical blog posts",
    cat: "Writing",
    cur: 0,
    target: 4,
    pct: 0,
    state: "pending",
    valueClass: "text-white/35",
    barClass: "bg-white/20",
    daysLeft: 12,
  },
];

const trendData = [1, 0, 2, 1, 0, 1, 1, 2];
const trendWeeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
const trendMax = Math.max(...trendData, 1);

const categories = [
  { name: "Code quality", done: 3, total: 3, color: "bg-violet-400" },
  { name: "Shipping speed", done: 2, total: 3, color: "bg-emerald-400" },
  { name: "Team reviews", done: 1, total: 2, color: "bg-amber-400" },
  { name: "Open source", done: 0, total: 1, color: "bg-white/30" },
  { name: "Content / docs", done: 0, total: 1, color: "bg-blue-400" },
];

const milestones = [
  {
    label: "Q2 OSS release target",
    date: "Apr 30",
    daysLeft: 24,
    urgencyClass: "text-white/50",
    ringClass: "border-white/[0.08]",
  },
  {
    label: "100 PR milestone",
    date: "Apr 18",
    daysLeft: 12,
    urgencyClass: "text-amber-400",
    ringClass: "border-amber-400/30",
  },
  {
    label: "31-day commit streak",
    date: "Apr 14",
    daysLeft: 8,
    urgencyClass: "text-amber-400",
    ringClass: "border-amber-400/30",
  },
  {
    label: "500 GitHub stars",
    date: "Apr 10",
    daysLeft: 4,
    urgencyClass: "text-rose-400",
    ringClass: "border-rose-400/30",
  },
];

const achievements = [
  { label: "Merged 15 PRs in a single week", date: "Mar 28", badge: "violet" },
  { label: "Maintained 31-day commit streak", date: "Mar 20", badge: "amber" },
  { label: "First 500-star repository", date: "Mar 12", badge: "amber" },
  { label: "Zero review SLA violations", date: "Mar 5", badge: "emerald" },
  {
    label: "Team velocity +20% month-over-month",
    date: "Feb 28",
    badge: "violet",
  },
];

const records = [
  {
    label: "Longest streak",
    value: "31 days",
    sub: "Feb 2025",
    icon: <Flame className="h-4 w-4" />,
    colorClass: "text-amber-400",
    bgClass: "bg-amber-500/10",
  },
  {
    label: "Best single week",
    value: "72 commits",
    sub: "Week 6",
    icon: <TrendingUp className="h-4 w-4" />,
    colorClass: "text-violet-400",
    bgClass: "bg-violet-500/10",
  },
  {
    label: "Most PRs in a week",
    value: "13 PRs",
    sub: "Mar week 2",
    icon: <GitPullRequest className="h-4 w-4" />,
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
  },
  {
    label: "Fastest cycle time",
    value: "1.2h",
    sub: "Mar 14",
    icon: <Clock3 className="h-4 w-4" />,
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500/10",
  },
];

function SidebarButton({
  icon,
  active = false,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`relative flex aspect-square w-full items-center justify-center rounded-xl transition-all ${active
        ? "bg-violet-500/15 text-violet-400"
        : "text-white/25 hover:bg-white/[0.05] hover:text-white/60"
        }`}
    >
      {icon}
      {active && (
        <span className="absolute right-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-violet-400" />
      )}
    </button>
  );
}

function getGoalStateBadge(state: string) {
  switch (state) {
    case "done":
      return (
        <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-1.5 py-0.5 text-[10px] text-emerald-400">
          done
        </span>
      );
    case "active":
      return (
        <span className="shrink-0 rounded-full border border-amber-400/20 bg-amber-400/10 px-1.5 py-0.5 text-[10px] text-amber-400">
          in progress
        </span>
      );
    case "at-risk":
      return (
        <span className="shrink-0 rounded-full border border-rose-400/20 bg-rose-400/10 px-1.5 py-0.5 text-[10px] text-rose-400">
          at risk
        </span>
      );
    default:
      return (
        <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-white/30">
          pending
        </span>
      );
  }
}

function GoalIcon({ state }: { state: string }) {
  if (state === "done") {
    return <Check className="h-3.5 w-3.5 text-emerald-400" />;
  }

  if (state === "at-risk") {
    return <AlertCircle className="h-3.5 w-3.5 text-rose-400" />;
  }

  return <Target className="h-3.5 w-3.5 text-white/25" />;
}

function getGoalIconWrapClass(state: string) {
  if (state === "done") return "bg-emerald-400/15";
  if (state === "at-risk") return "bg-rose-400/15";
  return "bg-white/[0.06]";
}

function getAchievementBadgeClass(badge: string) {
  switch (badge) {
    case "violet":
      return "border-violet-400/20 bg-violet-400/10 text-violet-400";
    case "amber":
      return "border-amber-400/20 bg-amber-400/10 text-amber-400";
    case "emerald":
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-400";
    default:
      return "border-white/[0.08] bg-white/[0.06] text-white/35";
  }
}

export default function GoalsDashboard() {
  return (
    <div className="flex min-h-screen overflow-hidden bg-primaryColor font-sans text-white">
      {/* <aside className="hidden w-[66px] shrink-0 flex-col items-center gap-2 border-r border-white/[0.06] bg-[#111114] py-5 md:flex">
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 shadow-lg shadow-violet-500/30">
          <Zap className="h-4 w-4 text-white" />
        </div>

        <nav className="flex w-full flex-1 flex-col gap-1 px-2">
          <SidebarButton icon={<LayoutGrid className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<GitPullRequest className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<CircleDot className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<Users className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<Target className="h-[17px] w-[17px]" />} active />
        </nav>

        <div className="flex w-full flex-col gap-1 px-2 pb-2">
          <SidebarButton icon={<Bell className="h-4 w-4" />} />
          <SidebarButton icon={<Settings className="h-4 w-4" />} />
          <div className="mt-2 flex justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[11px] font-semibold text-white">
              RA
            </div>
          </div>
        </div>
      </aside> */}

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 shrink-0 items-center gap-4 border-b border-white/[0.06] bg-primaryColor px-6">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-medium tracking-tight text-white/90">Goals</span>
            <ChevronDown className="h-3 w-3 text-white/30" />
          </div>

          <div className="flex-1" />

          <div className="hidden items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.04] p-1 md:flex">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 rounded-lg bg-violet-500/20 px-3 text-[11px] text-violet-400 hover:bg-violet-500/20 hover:text-violet-400"
            >
              This month
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 rounded-lg px-3 text-[11px] text-white/35 hover:bg-transparent hover:text-white/60"
            >
              This quarter
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 rounded-lg px-3 text-[11px] text-white/35 hover:bg-transparent hover:text-white/60"
            >
              All time
            </Button>
          </div>

          <Button className="h-9 rounded-xl border border-violet-500/20 bg-violet-500/10 px-3 text-[12px] text-violet-400 hover:bg-violet-500/15">
            <Plus className="mr-1.5 h-3.5 w-3.5" />
            New goal
          </Button>

          <div className="relative hidden w-44 md:block">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
            <Input
              placeholder="Search goals..."
              className="h-9 rounded-xl border-white/[0.07] bg-white/[0.05] pl-8 text-[12px] text-white placeholder:text-white/25"
            />
          </div>

          <div className="hidden items-center gap-1.5 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/60" />
            <span className="text-[11px] text-white/30">Synced</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-5">
          <div className="mx-auto grid max-w-[1920px] grid-cols-12 gap-3.5">
            <div className="col-span-12 md:col-span-4">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div>
                    <p className="text-center text-[14px] font-medium text-white/90">
                      Monthly progress
                    </p>
                    <p className="mt-0.5 text-center text-[11px] text-white/30">April 2025</p>
                  </div>

                  <div className="relative h-40 w-40">
                    <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
                      <circle
                        cx="80"
                        cy="80"
                        r="68"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="68"
                        fill="none"
                        stroke="#7F77DD"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="427"
                        strokeDashoffset="107"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="56"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="5"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="56"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray="352"
                        strokeDashoffset="88"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-semibold tracking-tighter text-white">
                        75%
                      </span>
                      <span className="mt-1 text-[11px] text-white/35">overall</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                      <span className="text-[11px] text-white/45">Completed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="text-[11px] text-white/45">In progress</span>
                    </div>
                  </div>

                  <div className="grid w-full grid-cols-3 gap-2">
                    <div className="rounded-xl bg-white/[0.04] p-3 text-center">
                      <p className="text-[16px] font-semibold text-emerald-400">6</p>
                      <p className="mt-0.5 text-[10px] text-white/30">Done</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-3 text-center">
                      <p className="text-[16px] font-semibold text-amber-400">2</p>
                      <p className="mt-0.5 text-[10px] text-white/30">Active</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-3 text-center">
                      <p className="text-[16px] font-semibold text-white/40">2</p>
                      <p className="mt-0.5 text-[10px] text-white/30">Pending</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-8">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-[14px] font-medium text-white/90">
                      Active goals
                    </CardTitle>
                  </div>

                  <div className="flex gap-2">
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-400">
                      6 done
                    </span>
                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-400">
                      2 active
                    </span>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.06] px-2 py-0.5 text-[10px] text-white/35">
                      2 pending
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-3">
                  {goals.map((goal) => (
                    <div
                      key={goal.label}
                      className="group flex cursor-default items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/[0.03]"
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${getGoalIconWrapClass(
                          goal.state
                        )}`}
                      >
                        <GoalIcon state={goal.state} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-1.5 flex items-center gap-2">
                          <span
                            className={`truncate text-[12px] ${goal.state === "done"
                              ? "text-white/40 line-through"
                              : "text-white/75"
                              }`}
                          >
                            {goal.label}
                          </span>
                          <span className="shrink-0 rounded-md bg-white/[0.04] px-1.5 py-0.5 text-[9px] text-white/25">
                            {goal.cat}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                            <div
                              className={`h-full rounded-full ${goal.barClass} opacity-70`}
                              style={{ width: `${goal.pct}%` }}
                            />
                          </div>

                          <span className={`shrink-0 text-[10px] ${goal.valueClass}`}>
                            {goal.state === "pending"
                              ? "not started"
                              : `${goal.cur} / ${goal.target}`}
                          </span>
                        </div>
                      </div>

                      {getGoalStateBadge(goal.state)}

                      {goal.daysLeft > 0 && (
                        <span className="shrink-0 text-[10px] text-white/25">
                          {goal.daysLeft}d left
                        </span>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-7">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-[14px] font-medium text-white/90">
                      Goal completion trend
                    </CardTitle>
                    <p className="mt-0.5 text-[11px] text-white/30">
                      Goals completed per week
                    </p>
                  </div>

                  <div className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-[11px] text-violet-400">
                    6 this month
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  <div className="flex h-28 items-end gap-3">
                    {trendWeeks.map((week, i) => (
                      <div key={week} className="flex flex-1 flex-col items-center gap-1">
                        <div
                          className={`w-full cursor-default rounded-t-md transition-colors ${trendData[i] === 0
                            ? "bg-white/[0.04]"
                            : "bg-violet-500/40 hover:bg-violet-500/60"
                            }`}
                          style={{
                            height: `${trendData[i] === 0
                              ? 8
                              : Math.round((trendData[i] / trendMax) * 100)
                              }%`,
                          }}
                        />
                        <span className="text-[10px] text-white/25">{week}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-t border-white/[0.05] pt-2 md:grid-cols-4">
                    <div>
                      <p className="text-[11px] text-white/30">Completion rate</p>
                      <p className="text-[15px] font-semibold text-violet-400">75%</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-white/30">On track</p>
                      <p className="text-[15px] font-semibold text-emerald-400">8</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-white/30">At risk</p>
                      <p className="text-[15px] font-semibold text-amber-400">1</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-white/30">Overdue</p>
                      <p className="text-[15px] font-semibold text-rose-400">1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-5">
              <Card className="h-full rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader>
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    By category
                  </CardTitle>
                  <p className="mt-0.5 text-[11px] text-white/30">Goal types this month</p>
                </CardHeader>

                <CardContent className="flex h-full flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center gap-3">
                        <div className={`h-2 w-2 shrink-0 rounded-full ${category.color}`} />
                        <span className="flex-1 text-[12px] text-white/55">{category.name}</span>

                        <div className="flex gap-1">
                          {Array.from({ length: category.total }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-4 w-4 rounded-sm ${i < category.done ? `${category.color} opacity-80` : "bg-white/[0.06]"
                                }`}
                            />
                          ))}
                        </div>

                        <span className="w-8 text-right text-[11px] text-white/35">
                          {category.done}/{category.total}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-white/[0.05] pt-3">
                    <p className="text-[11px] text-white/40">
                      Most productive category:{" "}
                      <span className="text-violet-400">Code Quality</span> (3 completed)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-5">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader>
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    Upcoming milestones
                  </CardTitle>
                  <p className="mt-0.5 text-[11px] text-white/30">Next 30 days</p>
                </CardHeader>

                <CardContent className="flex flex-col gap-3">
                  {milestones.map((milestone) => (
                    <div
                      key={milestone.label}
                      className={`flex cursor-default items-center gap-3 rounded-xl border bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.05] ${milestone.ringClass}`}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12px] text-white/70">{milestone.label}</p>
                        <p className="mt-0.5 text-[10px] text-white/30">{milestone.date}</p>
                      </div>
                      <span className={`shrink-0 text-[11px] font-medium ${milestone.urgencyClass}`}>
                        {milestone.daysLeft}d
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-7">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader>
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    Achievement history
                  </CardTitle>
                  <p className="mt-0.5 text-[11px] text-white/30">
                    Past goal completions
                  </p>
                </CardHeader>

                <CardContent className="flex flex-col divide-y divide-white/[0.04]">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.label}
                      className="group -mx-2 flex cursor-default items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-white/[0.02]"
                    >
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${getAchievementBadgeClass(
                          achievement.badge
                        )}`}
                      >
                        <Star className="h-2.5 w-2.5" />
                      </div>

                      <p className="flex-1 text-[12px] text-white/65 transition-colors group-hover:text-white/85">
                        {achievement.label}
                      </p>

                      <span className="shrink-0 text-[10px] text-white/25">
                        {achievement.date}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader className="mb-1 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-[14px] font-medium text-white/90">
                      Personal records
                    </CardTitle>
                    <p className="mt-0.5 text-[11px] text-white/30">
                      Your all-time bests
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1">
                    <Trophy className="h-3 w-3 text-amber-400" />
                    <span className="text-[11px] font-medium text-amber-400">
                      4 new PRs this month
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {records.map((record) => (
                      <div
                        key={record.label}
                        className="rounded-2xl border border-white/[0.05] bg-white/[0.03] p-4 transition-colors hover:border-white/[0.09]"
                      >
                        <div
                          className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${record.bgClass}`}
                        >
                          <div className={record.colorClass}>{record.icon}</div>
                        </div>

                        <p className={`text-[22px] font-semibold tracking-tight ${record.colorClass}`}>
                          {record.value}
                        </p>
                        <p className="mt-0.5 text-[12px] text-white/50">{record.label}</p>
                        <p className="mt-0.5 text-[10px] text-white/25">{record.sub}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}