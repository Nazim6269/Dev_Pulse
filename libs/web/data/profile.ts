import {
    Star,
    GitCommit,
    Eye,
    Zap,
    Trophy,
    TrendingUp,
   
} from "lucide-react";

export const langColors: Record<string, string> = {
    TypeScript: "#378ADD",
    Python: "#EF9F27",
    Rust: "#D85A30",
    Go: "#1D9E75",
};

export const topRepos = [
    { name: "devpulse/web", desc: "Next.js analytics dashboard", lang: "TypeScript", stars: 142, forks: 18, updated: "2h ago" },
    { name: "devpulse/backend", desc: "API layer & database", lang: "TypeScript", stars: 98, forks: 11, updated: "6h ago" },
    { name: "oss/rxstore", desc: "Lightweight reactive state lib", lang: "TypeScript", stars: 505, forks: 43, updated: "1d ago" },
    { name: "devpulse/cli", desc: "Terminal sync tool", lang: "Go", stars: 67, forks: 9, updated: "3d ago" },
    { name: "experiments/wasm-rs", desc: "WASM + Rust playground", lang: "Rust", stars: 34, forks: 5, updated: "1w ago" },
    { name: "oss/ts-either", desc: "Type-safe Either monad", lang: "TypeScript", stars: 28, forks: 3, updated: "2w ago" },
];

export const achievements = [
    { icon: Zap, label: "Speed demon", desc: "Merged PR in under 2h", color: "text-amber-400", bg: "bg-amber-500/10" },
    { icon: Trophy, label: "Top reviewer", desc: "#1 reviewer 3 months in a row", color: "text-violet-400", bg: "bg-violet-500/10" },
    { icon: TrendingUp, label: "Consistent", desc: "31-day commit streak", color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { icon: Star, label: "500 stars", desc: "Open source milestone", color: "text-amber-400", bg: "bg-amber-500/10" },
    { icon: GitCommit, label: "300+ commits", desc: "In a single month", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: Eye, label: "Eagle eye", desc: "Zero missed review SLAs", color: "text-rose-400", bg: "bg-rose-500/10" },
];

export const activityData = [0, 1, 3, 2, 4, 2, 0, 1, 4, 3, 5, 2, 1, 3, 4, 5, 3, 2, 4, 1, 0, 2, 3, 4, 3, 5, 4, 2, 3, 4, 5, 4, 3, 5, 4, 3];
export const intensities = ["bg-white/[0.05]", "bg-violet-500/20", "bg-violet-500/40", "bg-violet-500/60", "bg-violet-500/80", "bg-violet-500"];
