import { useSortable } from "@dnd-kit/sortable";
import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";

interface Stat {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
  sub: string;
  change: string;
  up: boolean;
  accent: string;
  iconBg: string;
  glow: string;
}

export function SortableStatCard({ stat }: { stat: Stat }) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: stat.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const Icon = stat.icon;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        bg-card border border-border rounded-2xl p-5 flex flex-col justify-between
        shadow-lg ${stat.glow}
        transition-all duration-200
        hover:border-primary/20
        cursor-grab active:cursor-grabbing
        ${isDragging ? "opacity-50 scale-95" : ""}
      `}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className={`w-9 h-9 rounded-xl ${stat.iconBg} flex items-center justify-center`}
        >
          <Icon size={16} className={stat.accent} />
        </div>

        <span
          className={`flex items-center gap-0.5 text-[11px] font-medium px-2 py-0.5 rounded-full border
          ${
            stat.up
              ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
              : "text-rose-500 bg-rose-500/10 border-rose-500/20"
          }`}
        >
          {stat.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
          {stat.change}
        </span>
      </div>

      <div>
        <p className={`text-3xl font-semibold tracking-tight ${stat.accent}`}>
          {stat.value}
        </p>
        <p className="text-[12px] text-foreground mt-1">{stat.label}</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">{stat.sub}</p>
      </div>
    </div>
  );
}
