import { GitMerge, GitPullRequest, Clock } from "lucide-react";

const prs = [
  {
    title: "feat: add OAuth token refresh logic",
    repo: "devpulse/backend",
    state: "merged",
    reviews: 3,
    time: "2h ago",
  },
  {
    title: "fix: rate limiter edge case on burst",
    repo: "devpulse/api",
    state: "merged",
    reviews: 2,
    time: "6h ago",
  },
  {
    title: "chore: upgrade Prisma to v5.8",
    repo: "devpulse/backend",
    state: "open",
    reviews: 1,
    time: "1d ago",
  },
  {
    title: "feat: contribution heatmap component",
    repo: "devpulse/web",
    state: "merged",
    reviews: 4,
    time: "1d ago",
  },
  {
    title: "docs: update API auth examples",
    repo: "devpulse/docs",
    state: "open",
    reviews: 0,
    time: "2d ago",
  },
];

export default function RecentPRs() {
  return (
    <div className="bg-[#111114] border border-white/[0.06] rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-medium text-white/90">Recent pull requests</p>
        <button className="text-[11px] text-violet-400/70 hover:text-violet-400 transition-colors">
          View all →
        </button>
      </div>

      <div className="flex flex-col divide-y divide-white/[0.04]">
        {prs.map((pr, i) => (
          <div key={i} className="py-3 flex items-start gap-3 group cursor-default">
            <div className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${pr.state === "merged"
              ? "bg-violet-500/15"
              : "bg-amber-500/15"
              }`}>
              {pr.state === "merged"
                ? <GitMerge size={13} className="text-violet-400" />
                : <GitPullRequest size={13} className="text-amber-400" />
              }
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] text-white/80 truncate group-hover:text-white transition-colors leading-tight">
                {pr.title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-white/30">{pr.repo}</span>
                <span className="text-white/10">·</span>
                <span className="text-[10px] text-white/25 flex items-center gap-1">
                  <Clock size={9} /> {pr.time}
                </span>
                {pr.reviews > 0 && (
                  <>
                    <span className="text-white/10">·</span>
                    <span className="text-[10px] text-white/30">{pr.reviews} reviews</span>
                  </>
                )}
              </div>
            </div>
            <span className={`shrink-0 text-[10px] px-1.5 py-0.5 rounded-full border mt-0.5 ${pr.state === "merged"
              ? "text-violet-400 border-violet-400/20 bg-violet-400/10"
              : "text-amber-400 border-amber-400/20 bg-amber-400/10"
              }`}>
              {pr.state}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}