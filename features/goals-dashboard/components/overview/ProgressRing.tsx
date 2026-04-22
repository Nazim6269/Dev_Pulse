import type { ProgressRingModel } from "@/features/goals-dashboard/types/goals-dashboard.types";

export function ProgressRing({ model }: { model: ProgressRingModel }) {
  return (
    <div className="relative h-40 w-40">
      <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
        <circle
          cx="80"
          cy="80"
          r="68"
          fill="none"
          stroke="currentColor"
          className="text-muted/30"
          strokeWidth="8"
        />
        <circle
          cx="80"
          cy="80"
          r="68"
          fill="none"
          stroke="currentColor"
          className="text-violet-500"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={model.circumference}
          strokeDashoffset={model.completedOffset}
        />
        <circle
          cx="80"
          cy="80"
          r="56"
          fill="none"
          stroke="currentColor"
          className="text-muted/30"
          strokeWidth="5"
        />
        <circle
          cx="80"
          cy="80"
          r="56"
          fill="none"
          stroke="currentColor"
          className="text-amber-500"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={Math.round(2 * Math.PI * 56)}
          strokeDashoffset={model.activeOffset}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold tracking-tighter text-foreground">
          {model.overallLabel}
        </span>
        <span className="mt-1 text-[11px] text-muted-foreground/40 font-bold uppercase tracking-widest">overall</span>
      </div>
    </div>
  );
}
