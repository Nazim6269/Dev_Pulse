"use client";

import { useEffect, useMemo, useState } from "react";
import { GitPullRequest, GitCommit, Eye, Clock } from "lucide-react";

import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { SortableStatCard } from "./SortableCard";

const statsData = [
  {
    id: "prs",
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
    id: "commits",
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
    id: "reviews",
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
    id: "cycle",
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

const STORAGE_KEY = "dashboard-stats-layout";

export default function StatsRow() {
  const [layout, setLayout] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setLayout(JSON.parse(saved));
    } else {
      setLayout(statsData.map((s) => s.id));
    }
  }, []);

  useEffect(() => {
    if (layout.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
    }
  }, [layout]);

  const dataMap = useMemo(() => {
    return Object.fromEntries(statsData.map((s) => [s.id, s]));
  }, []);
  const orderedStats = layout.map((id) => dataMap[id]).filter(Boolean);

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setLayout((prev) => {
      const oldIndex = prev.indexOf(active.id);
      const newIndex = prev.indexOf(over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={layout} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
          {orderedStats.map((stat) => (
            <SortableStatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
