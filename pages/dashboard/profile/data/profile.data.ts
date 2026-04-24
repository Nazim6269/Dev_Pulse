import type { ProfileData } from "@/widgets/dashboard/model/profile/profile.types";

export const profileData: ProfileData = {
  title: "Public profile",
  headerActions: [
    { id: "share", label: "Share profile", iconKey: "share" },
    { id: "view-public", label: "View public page", iconKey: "external", href: "/profile" },
    { id: "edit", label: "Edit profile", iconKey: "edit" },
  ],
  identity: {
    name: "Nazim Uddin",
    email: "nazimdev10022001@gmail.com",
    initials: "NU",
    status: "online",
    bio: "Frontend engineer building scalable products. Open source contributor and coffee-driven debugger.",
    location: "Dhaka, Bangladesh",
    websiteLabel: "devpulse.app/rafiq",
    websiteHref: "https://devpulse.app/rafiq",
    joinedLabel: "Joined March 2023",
    badges: [
      { id: "pro", label: "Pro", variant: "role" },
      { id: "open-source", label: "Open source", variant: "success" },
      { id: "top-reviewer", label: "Top reviewer", variant: "highlight" },
    ],
    socials: [
      { id: "github", label: "Github", href: "https://github.com", iconKey: "globe" },
      { id: "twitter", label: "Twitter", href: "https://twitter.com", iconKey: "globe" },
    ],
  },
  stats: [
    { id: "repos", label: "Repos", value: 34 },
    { id: "stars", label: "Stars", value: 812 },
    { id: "followers", label: "Followers", value: 290 },
  ],
  languages: [
    { id: "typescript", label: "TypeScript", color: "#378ADD" },
    { id: "python", label: "Python", color: "#EF9F27" },
    { id: "rust", label: "Rust", color: "#D85A30" },
    { id: "go", label: "Go", color: "#1D9E75" },
  ],
  kpis: [
    { id: "prs-merged", label: "PRs merged", value: "47", iconKey: "pull-request", tone: "violet" },
    { id: "commits", label: "Commits", value: "318", iconKey: "git-commit", tone: "emerald" },
    { id: "reviews", label: "Reviews given", value: "83", iconKey: "eye", tone: "amber" },
    { id: "cycle-time", label: "Avg cycle time", value: "18h", iconKey: "clock", tone: "rose" },
  ],
  contributionActivity: {
    totalContributions: 318,
    weeksLabel: "last 36 weeks",
    values: [0, 1, 3, 2, 4, 2, 0, 1, 4, 3, 5, 2, 1, 3, 4, 5, 3, 2, 4, 1, 0, 2, 3, 4, 3, 5, 4, 2, 3, 4, 5, 4, 3, 5, 4, 3],
    rows: 5,
    currentStreak: "24 days",
    bestStreak: "31 days",
  },
  achievements: [
    { id: "speed-demon", label: "Speed demon", description: "Merged PR in under 2h", iconKey: "zap", tone: "amber" },
    { id: "top-reviewer", label: "Top reviewer", description: "#1 reviewer 3 months in a row", iconKey: "star", tone: "violet" },
    { id: "consistent", label: "Consistent", description: "31-day commit streak", iconKey: "trending-up", tone: "emerald" },
    { id: "stars-milestone", label: "500 stars", description: "Open source milestone", iconKey: "star", tone: "amber" },
    { id: "commit-volume", label: "300+ commits", description: "In a single month", iconKey: "git-commit", tone: "blue" },
    { id: "eagle-eye", label: "Eagle eye", description: "Zero missed review SLAs", iconKey: "eye", tone: "rose" },
  ],
  repositories: [
    { id: "repo-web", name: "devpulse/web", description: "Next.js analytics dashboard", language: "TypeScript", stars: 142, forks: 18, updated: "2h ago" },
    { id: "repo-backend", name: "devpulse/backend", description: "API layer and database", language: "TypeScript", stars: 98, forks: 11, updated: "6h ago" },
    { id: "repo-rxstore", name: "oss/rxstore", description: "Lightweight reactive state lib", language: "TypeScript", stars: 505, forks: 43, updated: "1d ago" },
    { id: "repo-cli", name: "devpulse/cli", description: "Terminal sync tool", language: "Go", stars: 67, forks: 9, updated: "3d ago" },
    { id: "repo-wasm", name: "experiments/wasm-rs", description: "WASM and Rust playground", language: "Rust", stars: 34, forks: 5, updated: "1w ago" },
    { id: "repo-either", name: "oss/ts-either", description: "Type-safe Either monad", language: "TypeScript", stars: 28, forks: 3, updated: "2w ago" },
  ],
  recentActivity: [
    { id: "activity-merge", type: "merge", text: "Merged PR feat: OAuth token refresh logic", repository: "devpulse/backend", timeAgo: "2h ago" },
    { id: "activity-review", type: "review", text: "Reviewed fix: database connection pooling", repository: "devpulse/api", timeAgo: "5h ago" },
    { id: "activity-commit", type: "commit", text: "Pushed 4 commits to feat/cycle-time-chart", repository: "devpulse/web", timeAgo: "8h ago" },
    { id: "activity-star", type: "star", text: "Starred oss/rxstore reached 500 stars", repository: "oss/rxstore", timeAgo: "1d ago" },
    { id: "activity-pr", type: "pr", text: "Opened PR chore: upgrade Prisma to v5.8", repository: "devpulse/backend", timeAgo: "1d ago" },
  ],
};

export default function DefaultExport() { return null; }

