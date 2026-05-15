const phases = [
  {
    label: "Time to first review",
    value: "4.2h",
    pct: 23,
    color: "bg-violet-400",
  },
  { label: "Review iterations", value: "6.8h", pct: 38, color: "bg-amber-400" },
  {
    label: "Merge ready → merge",
    value: "7.0h",
    pct: 39,
    color: "bg-emerald-400",
  },
];

export default function PRCycleCard() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-5 h-full shadow-sm">
      <div>
        <p className="text-[14px] font-medium text-foreground">PR cycle time</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">
          Avg time open → merged
        </p>
      </div>

      {/* Big number */}
      <div className="flex items-end gap-2">
        <span className="text-5xl font-semibold tracking-tighter text-foreground">
          18
        </span>
        <span className="text-[16px] text-muted-foreground/60 mb-1.5">
          hrs avg
        </span>
      </div>

      {/* Progress phases */}
      <div className="flex flex-col gap-3">
        {phases.map(({ label, value, pct, color }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">{label}</span>
              <span className="text-[11px] font-medium text-foreground/70">
                {value}
              </span>
            </div>
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full ${color} rounded-full`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Comparison */}
      <div className="mt-auto grid grid-cols-2 gap-3">
        <div className="bg-muted/50 rounded-xl p-3 text-center">
          <p className="text-[13px] font-semibold text-emerald-500">12h</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Best PR</p>
        </div>
        <div className="bg-muted/50 rounded-xl p-3 text-center">
          <p className="text-[13px] font-semibold text-rose-500">48h</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Slowest PR</p>
        </div>
      </div>
    </div>
  );
}
