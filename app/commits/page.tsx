"use client";

import {
  Bell,
  Calendar,
  ChevronDown,
  CircleDot,
  GitCommitHorizontal,
  LayoutGrid,
  Search,
  Settings,
  Target,
  TrendingUp,
  Users,
  Zap,
  Pencil,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { commits, commitTypes, dailyVolumes, getCommitTypeClass, repos, SidebarButton, StatCard, timeSlots } from "./_components";

const maxDaily = Math.max(...dailyVolumes);
const maxTimeValue = 14;

export default function CommitsDashboard() {
  return (
    <div className="flex min-h-screen overflow-hidden bg-[#0c0c0e] font-sans text-white">
      {/* <aside className="hidden w-[66px] shrink-0 flex-col items-center gap-2 border-r border-white/[0.06] bg-[#111114] py-5 md:flex">
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 shadow-lg shadow-violet-500/30">
          <Zap className="h-4 w-4 text-white" />
        </div>

        <nav className="flex w-full flex-1 flex-col gap-1 px-2">
          <SidebarButton icon={<LayoutGrid className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<TrendingUp className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<CircleDot className="h-[17px] w-[17px]" />} active />
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
            <span className="text-[13px] font-medium tracking-tight text-white/90">Commits</span>
            <ChevronDown className="h-3 w-3 text-white/30" />
          </div>

          <div className="flex-1" />

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

          <div className="relative hidden w-44 md:block">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
            <Input
              placeholder="Search commits..."
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
                icon={<GitCommitHorizontal className="h-4 w-4" />}
                iconWrapClass="bg-emerald-500/10"
                iconClass="text-emerald-400"
                value="318"
                label="Total commits"
                sublabel="this month"
                badge="+8%"
                valueClass="text-emerald-400"
              />
            </div>

            <div className="col-span-12 md:col-span-3">
              <StatCard
                icon={<TrendingUp className="h-4 w-4" />}
                iconWrapClass="bg-violet-500/10"
                iconClass="text-violet-400"
                value="10.6"
                label="Avg per day"
                sublabel="on working days"
                badge="+3%"
                valueClass="text-violet-400"
              />
            </div>

            <div className="col-span-12 md:col-span-3">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none transition-colors hover:border-white/10">
                <CardContent className="p-5">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10">
                      <Pencil className="h-4 w-4 text-amber-400" />
                    </div>
                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-400">
                      peak
                    </span>
                  </div>
                  <p className="text-3xl font-semibold tracking-tight text-amber-400">22</p>
                  <p className="mt-1 text-[12px] text-white/45">Best single day</p>
                  <p className="mt-0.5 text-[10px] text-white/25">Mar 14</p>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-3">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none transition-colors hover:border-white/10">
                <CardContent className="p-5">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
                      <Calendar className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-2 py-0.5 text-[10px] text-blue-400">
                      streak
                    </span>
                  </div>
                  <p className="text-3xl font-semibold tracking-tight text-blue-400">24d</p>
                  <p className="mt-1 text-[12px] text-white/45">Current streak</p>
                  <p className="mt-0.5 text-[10px] text-white/25">personal best: 31d</p>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-8">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-[14px] font-medium text-white/90">
                      Daily commit volume
                    </CardTitle>
                    <p className="mt-0.5 text-[11px] text-white/30">
                      Commits per day this month
                    </p>
                  </div>
                  <Badge className="border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-400 hover:bg-emerald-400/10">
                    ↑ 8% vs last month
                  </Badge>
                </CardHeader>

                <CardContent>
                  <div className="flex h-36 items-end gap-1">
                    {dailyVolumes.map((value, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center gap-1">
                        <div
                          className={`w-full rounded-t-sm transition-opacity hover:opacity-80 ${value === 0 ? "bg-white/[0.04]" : "bg-emerald-500/60"
                            }`}
                          style={{
                            height: `${value === 0 ? 6 : Math.round((value / maxDaily) * 100)}%`,
                          }}
                        />
                        {((i + 1) % 5 === 0) ? (
                          <span className="text-[9px] text-white/20">{i + 1}</span>
                        ) : (
                          <span className="h-3" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-4">
              <Card className="h-full rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader>
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    Commit types
                  </CardTitle>
                  <p className="mt-0.5 text-[11px] text-white/30">
                    Conventional commits breakdown
                  </p>
                </CardHeader>

                <CardContent className="flex h-full flex-col gap-4">
                  <div className="flex flex-col gap-2.5">
                    {commitTypes.map((item) => (
                      <div key={item.type} className="flex items-center gap-3">
                        <span className="w-16 font-mono text-[10px] text-white/50">
                          {item.type}
                        </span>
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            className={`h-full rounded-full opacity-70 ${item.color}`}
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                        <span className="w-8 text-right text-[11px] text-white/45">
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-white/[0.04] p-3 text-center">
                      <p className="text-[14px] font-semibold text-white/80">4</p>
                      <p className="mt-0.5 text-[10px] text-white/30">Active repos</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-3 text-center">
                      <p className="text-[14px] font-semibold text-white/80">3</p>
                      <p className="mt-0.5 text-[10px] text-white/30">Active branches</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-7">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    Recent commits
                  </CardTitle>
                  <button className="text-[11px] text-violet-400/60 transition-colors hover:text-violet-400">
                    View all →
                  </button>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-col divide-y divide-white/[0.04]">
                    {commits.map((commit) => (
                      <div
                        key={commit.hash}
                        className="group -mx-2 flex cursor-default items-start gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-white/[0.02]"
                      >
                        <span className="mt-1 w-14 shrink-0 font-mono text-[9px] text-white/20">
                          {commit.hash}
                        </span>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[12px] text-white/70 transition-colors group-hover:text-white/90">
                            {commit.msg}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="font-mono text-[10px] text-white/30">
                              {commit.repo}
                            </span>
                            <span className="text-white/10">·</span>
                            <span className="text-[10px] text-white/25">{commit.time}</span>
                          </div>
                        </div>

                        <span
                          className={`shrink-0 rounded-md px-1.5 py-0.5 font-mono text-[9px] ${getCommitTypeClass(
                            commit.type
                          )}`}
                        >
                          {commit.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-5">
              <Card className="h-full rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader>
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    When you commit
                  </CardTitle>
                  <p className="mt-0.5 text-[11px] text-white/30">
                    Hour-of-day distribution
                  </p>
                </CardHeader>

                <CardContent className="flex h-full flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    {timeSlots.map((slot) => (
                      <div key={slot.label} className="flex items-center gap-3">
                        <span className="w-20 shrink-0 text-[10px] text-white/30">
                          {slot.label}
                        </span>
                        <div className="flex flex-1 gap-1">
                          {slot.vals.map((v, index) => (
                            <div
                              key={index}
                              className={`h-5 flex-1 rounded-sm transition-colors hover:ring-1 hover:ring-violet-400/30 ${v === 0 ? "bg-white/[0.04]" : "bg-violet-500/60"
                                }`}
                              style={{
                                opacity: v === 0 ? 1 : Math.max(0.2, v / maxTimeValue),
                              }}
                            />
                          ))}
                        </div>
                        <span className="w-4 text-right text-[10px] text-white/30">
                          {slot.vals.reduce((a, b) => a + b, 0)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3 border-t border-white/[0.05] pt-3">
                    <div className="h-2 w-2 rounded-full bg-violet-500" />
                    <p className="text-[11px] text-white/40">
                      Peak activity: <span className="text-white/70">10am – 1pm</span> and{" "}
                      <span className="text-white/70">8pm – 10pm</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader>
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    Commits by repository
                  </CardTitle>
                  <p className="mt-0.5 text-[11px] text-white/30">
                    Volume and type distribution per repo
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-col gap-4">
                    {repos.map((repo) => (
                      <div key={repo.name} className="flex cursor-default items-center gap-4">
                        <span className="w-36 shrink-0 truncate font-mono text-[12px] text-violet-400/80">
                          {repo.name}
                        </span>

                        <div className="flex h-4 flex-1 overflow-hidden rounded-lg gap-px">
                          <div
                            className="bg-violet-400/60"
                            style={{ width: `${Math.round((repo.feat / repo.commits) * 100)}%` }}
                          />
                          <div
                            className="bg-rose-400/60"
                            style={{ width: `${Math.round((repo.fix / repo.commits) * 100)}%` }}
                          />
                          <div
                            className="bg-white/15"
                            style={{ width: `${Math.round((repo.chore / repo.commits) * 100)}%` }}
                          />
                          <div
                            className="bg-blue-400/40"
                            style={{ width: `${Math.round((repo.other / repo.commits) * 100)}%` }}
                          />
                        </div>

                        <span className="w-8 text-right text-[12px] font-medium text-white/60">
                          {repo.commits}
                        </span>
                        <span className="w-8 text-right text-[10px] text-white/25">
                          {repo.pct}%
                        </span>
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