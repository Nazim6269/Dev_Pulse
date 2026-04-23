import { GitFork, Star, ExternalLink } from "lucide-react";

const repos = [
  {
    name: "devpulse/web",
    desc: "Next.js dashboard frontend",
    lang: "TypeScript",
    langColor: "bg-blue-400",
    stars: 142,
    forks: 18,
    commits: 89,
    activity: [3, 6, 4, 9, 7, 11, 8],
  },
  {
    name: "devpulse/backend",
    desc: "API & database layer",
    lang: "TypeScript",
    langColor: "bg-blue-400",
    stars: 98,
    forks: 11,
    commits: 134,
    activity: [5, 8, 6, 10, 9, 14, 11],
  },
  {
    name: "devpulse/cli",
    desc: "Terminal sync utility",
    lang: "Go",
    langColor: "bg-cyan-400",
    stars: 67,
    forks: 9,
    commits: 45,
    activity: [2, 3, 2, 5, 4, 6, 4],
  },
  {
    name: "oss/rxstore",
    desc: "Lightweight state lib",
    lang: "TypeScript",
    langColor: "bg-blue-400",
    stars: 505,
    forks: 43,
    commits: 50,
    activity: [1, 2, 1, 3, 2, 4, 2],
  },
];

const maxVal = 14;

export default function TopRepos() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-medium text-foreground">Top repositories</p>
        <button className="text-[11px] text-violet-500/80 hover:text-violet-500 transition-colors">
          View all →
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border-muted hover:border-border-active/30 hover:bg-muted/50 transition-all duration-200 group cursor-default"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <p className="text-[12px] font-medium text-violet-500 truncate">{repo.name}</p>
                <ExternalLink size={10} className="opacity-0 group-hover:opacity-40 transition-opacity shrink-0 text-foreground" />
              </div>
              <p className="text-[10px] text-muted-foreground truncate mb-2">{repo.desc}</p>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground/60">
                  <span className={`w-1.5 h-1.5 rounded-full ${repo.langColor}`} />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground/60">
                  <Star size={9} /> {repo.stars}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground/60">
                  <GitFork size={9} /> {repo.forks}
                </span>
              </div>
            </div>

            {/* Mini sparkline */}
            <div className="flex items-end gap-0.5 h-8 shrink-0">
              {repo.activity.map((v, i) => (
                <div
                  key={i}
                  className="w-1 rounded-t-[1px] bg-violet-500/30 group-hover:bg-violet-500/50 transition-colors"
                  style={{ height: `${Math.round((v / maxVal) * 100)}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
