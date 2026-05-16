import { Eye, ThumbsUp, MessageSquare, Clock, Zap } from "lucide-react";

const reviewers = [
  {
    name: "Tasmia N.",
    handle: "@tasmia",
    reviews: 14,
    avg: "3.2h",
    initials: "TN",
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Karim H.",
    handle: "@karimh",
    reviews: 11,
    avg: "5.1h",
    initials: "KH",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Priya S.",
    handle: "@priya_s",
    reviews: 9,
    avg: "2.8h",
    initials: "PS",
    color: "from-emerald-400 to-teal-500",
  },
  {
    name: "Dmitri V.",
    handle: "@dvol",
    reviews: 7,
    avg: "8.4h",
    initials: "DV",
    color: "from-amber-400 to-orange-500",
  },
];

const metricCards = [
  {
    label: "Reviews given",
    value: "83",
    icon: Eye,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    label: "LGTM rate",
    value: "79%",
    icon: ThumbsUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Comments left",
    value: "241",
    icon: MessageSquare,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    label: "Avg response",
    value: "4.6h",
    icon: Clock,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
];

const maxReviews = Math.max(...reviewers.map((r) => r.reviews));

export default function ReviewStats() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[14px] font-medium text-foreground">
            Review performance
          </p>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Team review activity this month
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1">
          <Zap size={11} className="text-violet-500" />
          <span className="text-[11px] text-violet-500 font-medium">
            Top reviewer this month
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Metric mini-cards */}
        <div className="col-span-12 lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3">
          {metricCards.map(({ label, value, icon: Icon, color, bg }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-muted/50 rounded-xl p-3"
            >
              <div
                className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center shrink-0`}
              >
                <Icon size={14} className={color} />
              </div>
              <div>
                <p className={`text-[15px] font-semibold ${color}`}>{value}</p>
                <p className="text-[10px] text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviewer breakdown */}
        <div className="col-span-12 lg:col-span-9">
          <p className="text-[11px] text-muted-foreground/40 uppercase tracking-widest mb-3">
            Team breakdown
          </p>
          <div className="flex flex-col gap-4">
            {reviewers.map((r, i) => (
              <div key={r.handle} className="flex items-center gap-4">
                {/* Rank */}
                <span className="text-[11px] text-muted-foreground/30 w-4 text-center shrink-0">
                  {i + 1}
                </span>

                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-[10px] font-semibold text-white shrink-0`}
                >
                  {r.initials}
                </div>

                {/* Name */}
                <div className="w-24 shrink-0">
                  <p className="text-[12px] text-foreground font-medium truncate">
                    {r.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {r.handle}
                  </p>
                </div>

                {/* Bar */}
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${r.color}`}
                    style={{
                      width: `${Math.round((r.reviews / maxReviews) * 100)}%`,
                    }}
                  />
                </div>

                {/* Stats */}
                <div className="flex items-center gap-3 shrink-0 text-right">
                  <div>
                    <p className="text-[13px] font-medium text-foreground/90">
                      {r.reviews}
                    </p>
                    <p className="text-[9px] text-muted-foreground/50">
                      reviews
                    </p>
                  </div>
                  <div className="w-14">
                    <p className="text-[13px] font-medium text-muted-foreground">
                      {r.avg}
                    </p>
                    <p className="text-[9px] text-muted-foreground/40">
                      avg time
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
