"use client";

import {
  Bell,
  ChevronDown,
  LayoutGrid,
  GitPullRequest,
  CircleDot,
  Users,
  Target,
  Settings,
  Zap,
  Plus,
  Search,
  Activity,
  Clock3,
  ThumbsUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const members = [
  {
    name: "Rafiq Ahsan",
    handle: "@rafiq",
    initials: "RA",
    grad: "from-amber-400 to-orange-500",
    role: "Frontend Lead",
    commits: 89,
    prs: 14,
    reviews: 22,
    streak: 24,
    status: "online",
  },
  {
    name: "Tasmia Nur",
    handle: "@tasmia",
    initials: "TN",
    grad: "from-pink-400 to-rose-500",
    role: "Backend Eng",
    commits: 71,
    prs: 11,
    reviews: 31,
    streak: 18,
    status: "online",
  },
  {
    name: "Karim Hassan",
    handle: "@karimh",
    initials: "KH",
    grad: "from-blue-400 to-indigo-500",
    role: "Full Stack",
    commits: 58,
    prs: 9,
    reviews: 19,
    streak: 12,
    status: "away",
  },
  {
    name: "Priya Sharma",
    handle: "@priya_s",
    initials: "PS",
    grad: "from-emerald-400 to-teal-500",
    role: "Backend Eng",
    commits: 49,
    prs: 8,
    reviews: 24,
    streak: 8,
    status: "online",
  },
  {
    name: "Dmitri Volkov",
    handle: "@dvol",
    initials: "DV",
    grad: "from-violet-400 to-purple-500",
    role: "DevOps",
    commits: 34,
    prs: 5,
    reviews: 15,
    streak: 5,
    status: "offline",
  },
  {
    name: "Lena Park",
    handle: "@lpark",
    initials: "LP",
    grad: "from-cyan-400 to-blue-500",
    role: "Frontend Eng",
    commits: 28,
    prs: 4,
    reviews: 12,
    streak: 14,
    status: "online",
  },
  {
    name: "Amir Zadeh",
    handle: "@amirz",
    initials: "AZ",
    grad: "from-lime-400 to-emerald-500",
    role: "ML / Data",
    commits: 22,
    prs: 3,
    reviews: 8,
    streak: 3,
    status: "away",
  },
  {
    name: "Sara Müller",
    handle: "@saram",
    initials: "SM",
    grad: "from-rose-400 to-pink-500",
    role: "QA / Testing",
    commits: 17,
    prs: 2,
    reviews: 18,
    streak: 7,
    status: "online",
  },
];

const velocityData = [6, 9, 8, 12, 10, 14, 11, 13];
const weeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
const velocityMax = Math.max(...velocityData);

const collabNames = ["RA", "TN", "KH", "PS", "DV", "LP"];
const matrix = [
  [0, 8, 5, 3, 2, 4],
  [6, 0, 7, 4, 1, 3],
  [4, 5, 0, 6, 3, 2],
  [3, 6, 4, 0, 2, 5],
  [2, 3, 2, 3, 0, 1],
  [5, 4, 3, 4, 1, 0],
];

const subteams = [
  {
    name: "Frontend",
    color: "from-violet-400 to-purple-500",
    members: ["Rafiq Ahsan", "Lena Park"],
    prs: 18,
    reviews: 34,
    commits: 117,
    health: 94,
  },
  {
    name: "Backend",
    color: "from-emerald-400 to-teal-500",
    members: ["Tasmia Nur", "Karim Hassan", "Priya Sharma"],
    prs: 22,
    reviews: 74,
    commits: 178,
    health: 88,
  },
  {
    name: "Platform",
    color: "from-amber-400 to-orange-500",
    members: ["Dmitri Volkov", "Amir Zadeh", "Sara Müller"],
    prs: 7,
    reviews: 41,
    commits: 73,
    health: 76,
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
          <span className="rounded-full border px-2 py-0.5 text-[10px]">{badge}</span>
        </div>
        <p className={`text-3xl font-semibold tracking-tight ${valueClass}`}>{value}</p>
        <p className="mt-1 text-[12px] text-white/45">{label}</p>
        <p className="mt-0.5 text-[10px] text-white/25">{sublabel}</p>
      </CardContent>
    </Card>
  );
}

function getStatusClass(status: string) {
  switch (status) {
    case "online":
      return "bg-emerald-400";
    case "away":
      return "bg-amber-400";
    default:
      return "bg-white/20";
  }
}

function getMatrixClass(value: number) {
  if (value <= 0) return "bg-white/[0.04] text-white/15";
  if (value <= 1) return "bg-violet-500/15 text-white/50";
  if (value <= 3) return "bg-violet-500/30 text-white/60";
  if (value <= 5) return "bg-violet-500/50 text-white/70";
  if (value <= 7) return "bg-violet-500/70 text-white";
  return "bg-violet-500 text-white";
}

export default function TeamDashboard() {
  return (
    <div className="flex min-h-screen overflow-hidden bg-[#0c0c0e] font-sans text-white">
      {/* <aside className="hidden w-[66px] shrink-0 flex-col items-center gap-2 border-r border-white/[0.06] bg-[#111114] py-5 md:flex">
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 shadow-lg shadow-violet-500/30">
          <Zap className="h-4 w-4 text-white" />
        </div>

        <nav className="flex w-full flex-1 flex-col gap-1 px-2">
          <SidebarButton icon={<LayoutGrid className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<GitPullRequest className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<CircleDot className="h-[17px] w-[17px]" />} />
          <SidebarButton icon={<Users className="h-[17px] w-[17px]" />} active />
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
            <span className="text-[13px] font-medium tracking-tight text-white/90">Team</span>
            <ChevronDown className="h-3 w-3 text-white/30" />
          </div>

          <div className="flex-1" />

          <Button className="h-9 rounded-xl border border-violet-500/20 bg-violet-500/10 px-3 text-[12px] text-violet-400 hover:bg-violet-500/15">
            <Plus className="mr-1.5 h-3.5 w-3.5" />
            Invite member
          </Button>

          <div className="relative hidden w-44 md:block">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
            <Input
              placeholder="Search team..."
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
                icon={<Users className="h-4 w-4" />}
                iconWrapClass="bg-violet-500/10"
                iconClass="text-violet-400"
                value="8"
                label="Team members"
                sublabel="across 3 sub-teams"
                badge="+1 this month"
                valueClass="text-violet-400"
              />
            </div>

            <div className="col-span-12 md:col-span-3">
              <StatCard
                icon={<Activity className="h-4 w-4" />}
                iconWrapClass="bg-emerald-500/10"
                iconClass="text-emerald-400"
                value="91%"
                label="Team velocity"
                sublabel="vs 30-day baseline"
                badge="healthy"
                valueClass="text-emerald-400"
              />
            </div>

            <div className="col-span-12 md:col-span-3">
              <StatCard
                icon={<Clock3 className="h-4 w-4" />}
                iconWrapClass="bg-amber-500/10"
                iconClass="text-amber-400"
                value="21h"
                label="Avg review time"
                sublabel="team average"
                badge="+2h"
                valueClass="text-amber-400"
              />
            </div>

            <div className="col-span-12 md:col-span-3">
              <StatCard
                icon={<ThumbsUp className="h-4 w-4" />}
                iconWrapClass="bg-blue-500/10"
                iconClass="text-blue-400"
                value="241"
                label="Reviews given"
                sublabel="team total this month"
                badge="79% LGTM"
                valueClass="text-blue-400"
              />
            </div>

            <div className="col-span-12">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-[14px] font-medium text-white/90">
                      Team members
                    </CardTitle>
                    <p className="mt-0.5 text-[11px] text-white/30">Activity this month</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="h-9 rounded-xl border-white/[0.06] bg-white/[0.04] px-3 text-[11px] text-white/35 hover:bg-white/[0.06] hover:text-white/60"
                    >
                      Sort by commits
                    </Button>
                    <Button
                      variant="outline"
                      className="h-9 rounded-xl border-white/[0.06] bg-white/[0.04] px-3 text-[11px] text-white/35 hover:bg-white/[0.06] hover:text-white/60"
                    >
                      Sort by reviews
                    </Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {members.map((member) => (
                      <div
                        key={member.handle}
                        className="group cursor-default rounded-xl border border-white/[0.05] bg-white/[0.03] p-4 transition-all hover:border-white/[0.10] hover:bg-white/[0.05]"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <div className="relative">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-[11px] font-semibold text-white ${member.grad}`}
                            >
                              {member.initials}
                            </div>
                            <span
                              className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#111114] ${getStatusClass(
                                member.status
                              )}`}
                            />
                          </div>

                          <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-[9px] text-white/30">
                            {member.role}
                          </span>
                        </div>

                        <p className="text-[13px] font-medium text-white/85 transition-colors group-hover:text-white">
                          {member.name}
                        </p>
                        <p className="mb-3 text-[11px] text-white/30">{member.handle}</p>

                        <div className="grid grid-cols-3 gap-1.5 text-center">
                          <div className="rounded-lg bg-white/[0.04] p-1.5">
                            <p className="text-[12px] font-medium text-violet-400">
                              {member.commits}
                            </p>
                            <p className="text-[9px] text-white/25">commits</p>
                          </div>
                          <div className="rounded-lg bg-white/[0.04] p-1.5">
                            <p className="text-[12px] font-medium text-emerald-400">
                              {member.prs}
                            </p>
                            <p className="text-[9px] text-white/25">PRs</p>
                          </div>
                          <div className="rounded-lg bg-white/[0.04] p-1.5">
                            <p className="text-[12px] font-medium text-amber-400">
                              {member.reviews}
                            </p>
                            <p className="text-[9px] text-white/25">reviews</p>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center gap-1.5 border-t border-white/[0.05] pt-2.5">
                          <Zap className="h-3 w-3 text-orange-400" />
                          <span className="text-[10px] text-white/35">{member.streak}d streak</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-5">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader>
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    Team velocity
                  </CardTitle>
                  <p className="mt-0.5 text-[11px] text-white/30">Weekly PR throughput</p>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  <div className="flex h-32 items-end gap-3">
                    {weeks.map((week, i) => (
                      <div key={week} className="flex flex-1 flex-col items-center gap-1">
                        <div
                          className="w-full cursor-default rounded-t-md bg-violet-500/30 transition-colors hover:bg-violet-500/50"
                          style={{
                            height: `${Math.round((velocityData[i] / velocityMax) * 100)}%`,
                          }}
                        />
                        <span className="text-[10px] text-white/25">{week}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 border-t border-white/[0.05] pt-2">
                    <div className="text-center">
                      <p className="text-[15px] font-semibold text-violet-400">8.5</p>
                      <p className="mt-0.5 text-[10px] text-white/30">PRs/week avg</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[15px] font-semibold text-emerald-400">91%</p>
                      <p className="mt-0.5 text-[10px] text-white/30">Merge rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[15px] font-semibold text-amber-400">21h</p>
                      <p className="mt-0.5 text-[10px] text-white/30">Avg cycle</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-7">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader>
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    Collaboration matrix
                  </CardTitle>
                  <p className="mt-0.5 text-[11px] text-white/30">Who reviews whose PRs</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-[10px]">
                      <thead>
                        <tr>
                          <td className="p-1.5 text-white/20" />
                          {collabNames.map((name) => (
                            <td
                              key={name}
                              className="p-1.5 text-center font-medium text-white/30"
                            >
                              {name}
                            </td>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {collabNames.map((rowName, rowIndex) => (
                          <tr key={rowName}>
                            <td className="p-1.5 font-medium text-white/30">{rowName}</td>
                            {matrix[rowIndex].map((value, colIndex) => {
                              const isSame = rowIndex === colIndex;
                              return (
                                <td key={`${rowIndex}-${colIndex}`} className="p-1">
                                  <div
                                    className={`mx-auto flex h-8 w-8 items-center justify-center rounded-lg text-[9px] ${isSame ? "bg-white/[0.04] text-white/15" : getMatrixClass(value)
                                      }`}
                                  >
                                    {isSame ? "—" : value}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-white/30">
                    <span>Low</span>
                    <div className="flex gap-1">
                      <span className="h-3 w-3 rounded-sm bg-violet-500/10" />
                      <span className="h-3 w-3 rounded-sm bg-violet-500/25" />
                      <span className="h-3 w-3 rounded-sm bg-violet-500/45" />
                      <span className="h-3 w-3 rounded-sm bg-violet-500/65" />
                      <span className="h-3 w-3 rounded-sm bg-violet-500" />
                    </div>
                    <span>High</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12">
              <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none">
                <CardHeader>
                  <CardTitle className="text-[14px] font-medium text-white/90">
                    Sub-team breakdown
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {subteams.map((team) => (
                      <div
                        key={team.name}
                        className="rounded-xl border border-white/[0.05] bg-white/[0.03] p-4 transition-colors hover:border-white/[0.09]"
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-6 w-2 rounded-full bg-gradient-to-b ${team.color}`}
                            />
                            <p className="text-[13px] font-medium text-white/85">{team.name}</p>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/[0.06]">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${team.color}`}
                                style={{ width: `${team.health}%` }}
                              />
                            </div>
                            <span className="text-[11px] text-white/40">{team.health}%</span>
                          </div>
                        </div>

                        <div className="mb-3 flex gap-1.5">
                          {team.members.map((member) => (
                            <div
                              key={member}
                              className="flex h-6 items-center rounded-full bg-white/[0.06] px-2 text-[10px] text-white/40"
                            >
                              {member.split(" ")[0]}
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-3">
                          <div>
                            <p className="text-[14px] font-semibold text-white/75">
                              {team.commits}
                            </p>
                            <p className="text-[9px] text-white/25">commits</p>
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-white/75">{team.prs}</p>
                            <p className="text-[9px] text-white/25">PRs</p>
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-white/75">
                              {team.reviews}
                            </p>
                            <p className="text-[9px] text-white/25">reviews</p>
                          </div>
                        </div>
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