const days = ["Mon", "Wed", "Fri"];
const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];

function generateHeatmap() {
  const grid: number[][] = [];
  for (let row = 0; row < 7; row++) {
    const rowData: number[] = [];
    for (let col = 0; col < 36; col++) {
      const rand = Math.random();
      rowData.push(rand < 0.3 ? 0 : rand < 0.55 ? 1 : rand < 0.75 ? 2 : rand < 0.9 ? 3 : 4);
    }
    grid.push(rowData);
  }
  return grid;
}

const heatmap = generateHeatmap();

const intensityClass = [
  "bg-muted/30",
  "bg-violet-500/20",
  "bg-violet-500/40",
  "bg-violet-500/65",
  "bg-violet-500",
];

const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

export default function ContributionHeatmap() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[14px] font-medium text-foreground">Contribution calendar</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">318 contributions in the last year</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-muted-foreground/60">Less</span>
          {intensityClass.map((cls, i) => (
            <span key={i} className={`w-2.5 h-2.5 rounded-sm ${cls}`} />
          ))}
          <span className="text-[10px] text-muted-foreground/60">More</span>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {/* Day labels */}
        <div className="flex flex-col gap-[3px] pt-5 shrink-0">
          {dayLabels.map((d, i) => (
            <div key={i} className="h-[11px] text-[9px] text-muted-foreground/60 leading-none">
              {d}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Month labels */}
          <div className="flex gap-[3px] mb-1 pb-1">
            {months.map((m, i) => (
              <div
                key={i}
                className="text-[9px] text-muted-foreground/60"
                style={{ flex: `${Math.round(36 / months.length)}` }}
              >
                {m}
              </div>
            ))}
          </div>
          {/* Cells */}
          <div className="flex flex-col gap-[3px]">
            {heatmap.map((row, ri) => (
              <div key={ri} className="flex gap-[3px]">
                {row.map((val, ci) => (
                  <div
                    key={ci}
                    className={`h-[11px] flex-1 rounded-[2px] ${intensityClass[val]} transition-colors hover:ring-1 hover:ring-violet-400/40 cursor-default`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
