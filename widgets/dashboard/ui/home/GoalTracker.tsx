import { Target, CheckCircle2, Circle } from "lucide-react";

const goals = [
  { label: "Merge 5 PRs this week", current: 4, target: 5, done: false },
  { label: "Review 10 PRs this month", current: 10, target: 10, done: true },
  { label: "Maintain 80%+ review rate", current: 83, target: 80, done: true },
  { label: "Reduce avg cycle time <24h", current: 18, target: 24, done: true },
  {
    label: "Add detailed PR descriptions",
    current: 2,
    target: 10,
    done: false,
  },
  {
    label: "Close 15 tickets this month",
    current: 13,
    target: 15,
    done: false,
  },
  { label: "No broken builds on Mondays", current: 1, target: 1, done: true },
  {
    label: "Achieve sprint commitment 90%",
    current: 85,
    target: 90,
    done: false,
  },
];

export default function GoalTracker() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 h-110">
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-medium text-foreground">Goals</p>
        <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center">
          <Target size={14} className="text-amber-400" />
        </div>
      </div>

      {/* Completion ring (CSS only) */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 shrink-0">
          <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              className="text-muted-foreground/10"
            />
            <circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 26}`}
              strokeDashoffset={`${2 * Math.PI * 26 * (1 - 0.75)}`}
              className="text-amber-400"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[14px] font-semibold text-amber-400">
              75%
            </span>
          </div>
        </div>
        <div>
          <p className="text-[13px] font-medium text-foreground">
            3 of 4 goals
          </p>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            completed this month
          </p>
        </div>
      </div>

      {/* Goal list */}
      <div className="flex flex-col gap-2.5">
        {goals.map((g, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              {g.done ? (
                <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
              ) : (
                <Circle
                  size={13}
                  className="text-muted-foreground/30 shrink-0"
                />
              )}
              <span
                className={`text-[11px] leading-tight ${g.done ? "text-muted-foreground line-through" : "text-foreground/80"}`}
              >
                {g.label}
              </span>
            </div>
            <div className="ml-[21px] h-0.5 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${g.done ? "bg-emerald-500" : "bg-amber-400"}`}
                style={{
                  width: `${Math.min(100, Math.round((g.current / g.target) * 100))}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
