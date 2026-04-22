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
          strokeDasharray={model.circumference}
          strokeDashoffset={model.completedOffset}
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
          strokeDasharray={Math.round(2 * Math.PI * 56)}
          strokeDashoffset={model.activeOffset}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-semibold tracking-tighter text-white">
          {model.overallLabel}
        </span>
        <span className="mt-1 text-[11px] text-white/35">overall</span>
      </div>
    </div>
  );
}
