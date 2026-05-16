export const dailyVolumes = [8, 12, 6, 15, 11, 0, 0, 9, 14, 18, 7, 13, 10, 22, 8, 0, 0, 11, 16, 12, 9, 14, 7, 19, 11, 13, 8, 15, 10, 12];

export const commitTypes = [
    { type: "feat", count: 89, pct: 28, color: "bg-violet-400" },
    { type: "fix", count: 71, pct: 22, color: "bg-rose-400" },
    { type: "chore", count: 64, pct: 20, color: "bg-white/30" },
    { type: "refactor", count: 51, pct: 16, color: "bg-blue-400" },
    { type: "docs", count: 28, pct: 9, color: "bg-amber-400" },
    { type: "test", count: 15, pct: 5, color: "bg-emerald-400" },
];

export const commits = [
    {
        hash: "a3f2c1d",
        msg: "feat: add PR cycle time calculation to analytics service",
        repo: "devpulse/backend",
        time: "2h ago",
        type: "feat",
    },
    {
        hash: "b7e8a2f",
        msg: "fix: resolve timezone offset in heatmap data aggregation",
        repo: "devpulse/web",
        time: "4h ago",
        type: "fix",
    },
    {
        hash: "c1d4e9b",
        msg: "chore: update dependency versions across workspace",
        repo: "devpulse/backend",
        time: "6h ago",
        type: "chore",
    },
    {
        hash: "d5f3c8a",
        msg: "refactor: extract GitHub client into isolated service layer",
        repo: "devpulse/api",
        time: "1d ago",
        type: "refactor",
    },
    {
        hash: "e2a7b4f",
        msg: "feat: implement Redis caching for GitHub API responses",
        repo: "devpulse/api",
        time: "1d ago",
        type: "feat",
    },
    {
        hash: "f9c1d6e",
        msg: "docs: document OAuth flow and token refresh strategy",
        repo: "devpulse/docs",
        time: "2d ago",
        type: "docs",
    },
];

export const timeSlots = [
    { label: "12am–4am", vals: [1, 0, 0, 1, 2] },
    { label: "4am–8am", vals: [2, 3, 2, 4, 3] },
    { label: "8am–12pm", vals: [8, 12, 11, 14, 10] },
    { label: "12pm–4pm", vals: [7, 9, 8, 11, 8] },
    { label: "4pm–8pm", vals: [5, 6, 4, 7, 5] },
    { label: "8pm–12am", vals: [9, 11, 10, 13, 9] },
];

export const repos = [
    { name: "devpulse/backend", commits: 134, feat: 38, fix: 28, chore: 44, other: 24, pct: 42 },
    { name: "devpulse/web", commits: 89, feat: 29, fix: 20, chore: 25, other: 15, pct: 28 },
    { name: "devpulse/api", commits: 61, feat: 21, fix: 15, chore: 16, other: 9, pct: 19 },
    { name: "devpulse/docs", commits: 34, feat: 5, fix: 4, chore: 10, other: 15, pct: 11 },
];
