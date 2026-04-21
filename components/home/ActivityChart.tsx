const weeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
const commits = [28, 42, 35, 61, 48, 72, 55, 67];
const prs = [4, 7, 5, 11, 8, 13, 9, 12];

const maxCommits = Math.max(...commits);

export default function ActivityChart() {
  return (
    <div className="bg-[#111114] border border-white/[0.06] rounded-2xl p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px] font-medium text-white/90">Commit activity</p>
          <p className="text-[11px] text-white/30 mt-0.5">Last 8 weeks</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-violet-500/70" />
            <span className="text-[11px] text-white/40">Commits</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-500/70" />
            <span className="text-[11px] text-white/40">PRs merged</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end gap-3 h-36 pt-2">
        {weeks.map((week, i) => {
          const commitH = Math.round((commits[i] / maxCommits) * 100);
          const prH = Math.round((prs[i] / maxCommits) * 100);
          return (
            <div key={week} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-end gap-0.5 h-28">
                <div
                  className="flex-1 rounded-t-md bg-violet-500 hover:bg-violet-500/50 transition-colors cursor-default relative group"
                  style={{ height: `${commitH}%` }}
                >
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-white/0 group-hover:text-white/60 transition-colors whitespace-nowrap">
                    {commits[i]}
                  </span>
                </div>
                <div
                  className="flex-1 rounded-t-md bg-amber-500 hover:bg-amber-500/60 transition-colors cursor-default"
                  style={{ height: `${prH}%` }}
                />
              </div>
              <span className="text-[10px] text-white/25">{week}</span>
            </div>
          );
        })}
      </div>

      {/* Sparkline summary */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
        <div className="flex gap-4">
          <div>
            <p className="text-[11px] text-white/30">Total commits</p>
            <p className="text-[15px] font-semibold text-violet-400">408</p>
          </div>
          <div>
            <p className="text-[11px] text-white/30">PRs merged</p>
            <p className="text-[15px] font-semibold text-amber-400">69</p>
          </div>
          <div>
            <p className="text-[11px] text-white/30">Best week</p>
            <p className="text-[15px] font-semibold text-white/70">Week 6</p>
          </div>
        </div>
        <div className="text-[11px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
          ↑ 18% vs prev period
        </div>
      </div>
    </div>
  );
}