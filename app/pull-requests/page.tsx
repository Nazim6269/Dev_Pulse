"use client";

import {
  Bell,
  Check,
  ChevronDown,
  Clock3,
  Download,
  Filter,
  GitPullRequest,
  LayoutGrid,
  Search,
  Settings,
  Target,
  Users,
  Zap,
  CircleDot,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const opened = [4, 7, 5, 9, 8, 11, 9, 10];
const merged = [3, 6, 5, 8, 7, 10, 8, 10];
const weeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];

const prs = [
  {
    title: "feat: add OAuth token refresh logic",
    repo: "devpulse/backend",
    state: "merged",
    size: "M",
    reviews: 3,
    cycle: "14h",
  },
  {
    title: "fix: rate limiter edge case on burst",
    repo: "devpulse/api",
    state: "merged",
    size: "S",
    reviews: 2,
    cycle: "8h",
  },
  {
    title: "chore: upgrade Prisma to v5.8",
    repo: "devpulse/backend",
    state: "open",
    size: "XS",
    reviews: 1,
    cycle: "—",
  },
  {
    title: "feat: contribution heatmap component",
    repo: "devpulse/web",
    state: "merged",
    size: "L",
    reviews: 4,
    cycle: "26h",
  },
  {
    title: "docs: update API auth examples",
    repo: "devpulse/docs",
    state: "open",
    size: "XS",
    reviews: 0,
    cycle: "—",
  },
  {
    title: "refactor: extract GitHub service layer",
    repo: "devpulse/backend",
    state: "merged",
    size: "M",
    reviews: 3,
    cycle: "18h",
  },
  {
    title: "fix: heatmap tooltip positioning",
    repo: "devpulse/web",
    state: "merged",
    size: "S",
    reviews: 2,
    cycle: "6h",
  },
];

const labels = [
  { name: "feature", count: 18, pct: 38, color: "bg-violet-400" },
  { name: "bug fix", count: 12, pct: 26, color: "bg-rose-400" },
  { name: "chore", count: 8, pct: 17, color: "bg-white/30" },
  { name: "docs", count: 5, pct: 11, color: "bg-blue-400" },
  { name: "refactor", count: 4, pct: 8, color: "bg-amber-400" },
];

const hist = [2, 5, 9, 14, 8, 5, 3, 2, 1];
const histLabels = ["<1h", "1-2", "2-4", "4-8", "8-12", "12-18", "18-24", "24-36", ">36"];

const maxOpened = Math.max(...opened);
const histMax = Math.max(...hist);

function getStateBadgeClass(state: string) {
  switch (state) {
    case "merged":
      return "border-violet-400/20 bg-violet-400/10 text-violet-400";
    case "open":
      return "border-amber-400/20 bg-amber-400/10 text-amber-400";
    default:
      return "border-white/10 bg-white/5 text-white/40";
  }
}

function getSizeClass(size: string) {
  switch (size) {
    case "XS":
      return "text-emerald-400";
    case "S":
      return "text-blue-400";
    case "M":
      return "text-amber-400";
    case "L":
      return "text-rose-400";
    default:
      return "text-white/60";
  }
}

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
        : "text-white/25 hover:bg-white/5 hover:text-white/60"
        }`}
    >
      {icon}
      {active && (
        <span className="absolute right-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-violet-400" />
      )}
    </button>
  );
}

function StatCard({
  icon,
  iconWrapClass,
  iconClass,
  value,
  label,
  sublabel,
  badge,
  valueClass,
}: {
  icon: React.ReactNode;
  iconWrapClass: string;
  iconClass: string;
  value: string;
  label: string;
  sublabel: string;
  badge: string;
  valueClass: string;
}) {
  return (
    <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
      <CardContent className="p-5">
        <div className="mb-4 flex items-start justify-between">
          <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconWrapClass}`}>
            <div className={iconClass}>{icon}</div>
          </div>
          <span className="rounded-full border px-2 py-0.5 text-[10px] text-emerald-400 border-emerald-400/20 bg-emerald-400/10">
            {badge}
          </span>
        </div>

        <p className={`text-3xl font-semibold tracking-tight ${valueClass}`}>{value}</p>
        <p className="mt-1 text-[12px] text-white/45">{label}</p>
        <p className="mt-0.5 text-[10px] text-white/25">{sublabel}</p>
      </CardContent>
    </Card>
  );
}

export default function PullRequestsDashboard() {
  return (
    <div className="flex min-h-screen bg-[#0c0c0e] text-white">
      {/* <aside className="hidden w-[66px] shrink-0 flex-col items-center gap-2 border-r border-white/[0.06] bg-[#111114] py-5 md:flex">
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 shadow-lg shadow-violet-500/30">
          <Zap className="h-4 w-4 text-white" />
        </div>

        <nav className="flex w-full flex-1 flex-col gap-1 px-2">
          <SidebarButton icon={<LayoutGrid className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<GitPullRequest className="h-[17px] w-[17px]" />} active />
          <SidebarButton icon={<CircleDot className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<Users className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<Target className="h-[17px] w-[17px]" />} />
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
        <header className="flex h-14 shrink-0 items-center gap-4 border-b border-white/[0.06] bg-[#0c0c0e] px-6">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-medium tracking-tight text-white/90">
              Pull Requests
            </span>
            <ChevronDown className="h-3 w-3 text-white/30" />
          </div>

          <div className="flex-1" />

          <div className="hidden items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.04] p-1 md:flex">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 rounded-lg bg-violet-500/20 px-3 text-[11px] text-violet-400 hover:bg-violet-500/20 hover:text-violet-400"
            >
              All
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 rounded-lg px-3 text-[11px] text-white/35 hover:bg-transparent hover:text-white/60"
            >
              Open
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 rounded-lg px-3 text-[11px] text-white/35 hover:bg-transparent hover:text-white/60"
            >
              Merged
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 rounded-lg px-3 text-[11px] text-white/35 hover:bg-transparent hover:text-white/60"
            >
              Closed
            </Button>
          </div>

          <div className="relative hidden w-44 md:block">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
            <Input
              placeholder="Search PRs..."
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
            <div className="col-span-12 md:col-span-3">
              <StatCard
                icon={<GitPullRequest className="h-4 w-4" />}
                iconWrapClass="bg-violet-500/10"
                iconClass="text-violet-400"
                value="47"
                label="Total PRs"
                sublabel="this month"
                badge="+12%"
                valueClass="text-violet-400"
              />
            </div>

            <div className="col-span-12 md:col-span-3">
              <StatCard
                icon={<Check className="h-4 w-4" />}
                iconWrapClass="bg-emerald-500/10"
                iconClass="text-emerald-400"
                value="39"
                label="Merged"
                sublabel="83% merge rate"
                badge="+8%"
                valueClass="text-emerald-400"
              />
            </div>

            <div className="col-span-12 md:col-span-3">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardContent className="p-5">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10">
                      <Clock3 className="h-4 w-4 text-amber-400" />
                    </div>
                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-400">
                      6 open
                    </span>
                  </div>
                  <p className="text-3xl font-semibold tracking-tight text-amber-400">6</p>
                  <p className="mt-1 text-[12px] text-white/45">Open PRs</p>
                  <p className="mt-0.5 text-[10px] text-white/25">awaiting review</p>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-3">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardContent className="p-5">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10">
                      <Clock3 className="h-4 w-4 text-rose-400" />
                    </div>
                    <span className="rounded-full border border-rose-400/20 bg-rose-400/10 px-2 py-0.5 text-[10px] text-rose-400">
                      -6%
                    </span>
                  </div>
                  <p className="text-3xl font-semibold tracking-tight text-rose-400">18h</p>
                  <p className="mt-1 text-[12px] text-white/45">Avg cycle time</p>
                  <p className="mt-0.5 text-[10px] text-white/25">open → merged</p>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-4">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader className="pb-3">
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    Status breakdown
                  </CardTitle>
                  <p className="text-[11px] text-white/30">Distribution this month</p>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <div className="mb-3 flex h-3 overflow-hidden rounded-full">
                      <div className="h-full w-[83%] rounded-l-full bg-emerald-500/80" />
                      <div className="h-full w-[13%] bg-amber-500/80" />
                      <div className="h-full w-[4%] rounded-r-full bg-white/10" />
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { label: "Merged", count: 39, pct: "83%", dot: "bg-emerald-400" },
                        { label: "Open", count: 6, pct: "13%", dot: "bg-amber-400" },
                        { label: "Closed", count: 2, pct: "4%", dot: "bg-white/20" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                            <span className="text-[12px] text-white/60">{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[12px] font-medium text-white/80">
                              {item.count}
                            </span>
                            <span className="text-[10px] text-white/30">{item.pct}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/[0.05] pt-4">
                    <p className="mb-3 text-[10px] uppercase tracking-widest text-white/25">
                      PR size distribution
                    </p>

                    <div className="space-y-2">
                      {[
                        { label: "XS", width: "28%", count: 13, bar: "bg-violet-400/60" },
                        { label: "S", width: "42%", count: 20, bar: "bg-violet-400/70" },
                        { label: "M", width: "19%", count: 9, bar: "bg-violet-400/85" },
                        { label: "L", width: "10%", count: 5, bar: "bg-amber-400/70" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-3">
                          <span className="w-10 text-[10px] text-white/35">{item.label}</span>
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                            <div className={`h-full rounded-full ${item.bar}`} style={{ width: item.width }} />
                          </div>
                          <span className="w-4 text-right text-[10px] text-white/40">
                            {item.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-8">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                  <div>
                    <CardTitle className="text-[14px] font-medium text-white/90">
                      Merge trend
                    </CardTitle>
                    <p className="text-[11px] text-white/30">
                      PRs opened vs merged per week
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-sm bg-violet-500/60" />
                      <span className="text-[11px] text-white/35">Opened</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500/60" />
                      <span className="text-[11px] text-white/35">Merged</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex h-36 items-end gap-4">
                    {weeks.map((week, i) => (
                      <div key={week} className="flex flex-1 flex-col items-center gap-1">
                        <div className="flex h-28 w-full items-end gap-0.5">
                          <div
                            className="flex-1 rounded-t-md bg-violet-500 transition-colors hover:bg-violet-500/45"
                            style={{ height: `${Math.round((opened[i] / maxOpened) * 100)}%` }}
                          />
                          <div
                            className="flex-1 rounded-t-md bg-emerald-500 transition-colors hover:bg-emerald-500/55"
                            style={{ height: `${Math.round((merged[i] / maxOpened) * 100)}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-white/25">{week}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 border-t border-white/[0.05] pt-2 md:flex-row md:items-center md:justify-between">
                    <div className="flex gap-5">
                      <div>
                        <p className="text-[11px] text-white/30">Total opened</p>
                        <p className="text-[15px] font-semibold text-violet-400">47</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-white/30">Total merged</p>
                        <p className="text-[15px] font-semibold text-emerald-400">39</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-white/30">Best week</p>
                        <p className="text-[15px] font-semibold text-white/65">Week 6</p>
                      </div>
                    </div>

                    <Badge className="w-fit border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-400 hover:bg-emerald-400/10">
                      83% merge rate
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader className="mb-1 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-[14px] font-medium text-white/90">
                      All pull requests
                    </CardTitle>
                    <p className="text-[11px] text-white/30">47 total this month</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="h-9 rounded-xl border-white/[0.07] bg-white/[0.05] px-3 text-[11px] text-white/40 hover:bg-white/[0.07] hover:text-white/60"
                    >
                      <Filter className="mr-1.5 h-3 w-3" />
                      Filter
                    </Button>

                    <Button
                      variant="outline"
                      className="h-9 rounded-xl border-white/[0.07] bg-white/[0.05] px-3 text-[11px] text-white/40 hover:bg-white/[0.07] hover:text-white/60"
                    >
                      <Download className="mr-1.5 h-3 w-3" />
                      Export
                    </Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-12 gap-3 border-b border-white/[0.05] px-3 pb-2">
                    <div className="col-span-5 text-[10px] uppercase tracking-widest text-white/25">
                      Pull request
                    </div>
                    <div className="col-span-2 text-[10px] uppercase tracking-widest text-white/25">
                      Repo
                    </div>
                    <div className="col-span-1 text-[10px] uppercase tracking-widest text-white/25">
                      Status
                    </div>
                    <div className="col-span-1 text-[10px] uppercase tracking-widest text-white/25">
                      Size
                    </div>
                    <div className="col-span-1 text-[10px] uppercase tracking-widest text-white/25">
                      Reviews
                    </div>
                    <div className="col-span-2 text-[10px] uppercase tracking-widest text-white/25">
                      Cycle time
                    </div>
                  </div>

                  <div className="flex flex-col divide-y divide-white/[0.04]">
                    {prs.map((pr) => (
                      <div
                        key={`${pr.repo}-${pr.title}`}
                        className="grid cursor-default grid-cols-12 items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.03]"
                      >
                        <div className="col-span-5 flex items-center gap-2.5">
                          <div
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${pr.state === "merged" ? "bg-violet-500/15" : "bg-amber-500/15"
                              }`}
                          >
                            <GitPullRequest
                              className={`h-3.5 w-3.5 ${pr.state === "merged" ? "text-violet-400" : "text-amber-400"
                                }`}
                            />
                          </div>
                          <span className="truncate text-[12px] text-white/70 transition-colors hover:text-white/90">
                            {pr.title}
                          </span>
                        </div>

                        <div className="col-span-2">
                          <span className="font-mono text-[11px] text-white/30">{pr.repo}</span>
                        </div>

                        <div className="col-span-1">
                          <span
                            className={`rounded-full border px-1.5 py-0.5 text-[10px] ${getStateBadgeClass(
                              pr.state
                            )}`}
                          >
                            {pr.state}
                          </span>
                        </div>

                        <div className="col-span-1">
                          <span className={`text-[11px] font-medium ${getSizeClass(pr.size)}`}>
                            {pr.size}
                          </span>
                        </div>

                        <div className="col-span-1">
                          <span className="text-[12px] text-white/50">{pr.reviews}</span>
                        </div>

                        <div className="col-span-2">
                          <span className="font-mono text-[12px] text-white/40">{pr.cycle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-5">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader className="pb-3">
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    Label distribution
                  </CardTitle>
                  <p className="text-[11px] text-white/30">PR categories this month</p>
                </CardHeader>

                <CardContent className="space-y-2.5">
                  {labels.map((label) => (
                    <div key={label.name} className="flex items-center gap-3">
                      <div className={`h-2 w-2 shrink-0 rounded-full ${label.color}`} />
                      <span className="w-20 text-[12px] text-white/55">{label.name}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className={`h-full rounded-full ${label.color} opacity-70`}
                          style={{ width: `${label.pct}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-[11px] text-white/40">
                        {label.count}
                      </span>
                      <span className="w-8 text-right text-[10px] text-white/25">
                        {label.pct}%
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-7">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                  <div>
                    <CardTitle className="text-[14px] font-medium text-white/90">
                      Time-to-first-review
                    </CardTitle>
                    <p className="text-[11px] text-white/30">
                      Hours until first review comment
                    </p>
                  </div>

                  <Badge className="border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-[11px] text-violet-400 hover:bg-violet-400/10">
                    Avg 4.2h
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex h-28 items-end gap-2">
                    {hist.map((value, i) => (
                      <div key={histLabels[i]} className="flex flex-1 flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t-md bg-violet-500/30 transition-colors hover:bg-violet-500/50"
                          style={{ height: `${Math.round((value / histMax) * 100)}%` }}
                        />
                        <span className="whitespace-nowrap text-[9px] text-white/25">
                          {histLabels[i]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div className="rounded-xl bg-white/[0.04] p-3 text-center">
                      <p className="text-[14px] font-semibold text-emerald-400">1.1h</p>
                      <p className="mt-0.5 text-[10px] text-white/30">Fastest</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-3 text-center">
                      <p className="text-[14px] font-semibold text-violet-400">4.2h</p>
                      <p className="mt-0.5 text-[10px] text-white/30">Median</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-3 text-center">
                      <p className="text-[14px] font-semibold text-rose-400">22h</p>
                      <p className="mt-0.5 text-[10px] text-white/30">Slowest</p>
                    </div>
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