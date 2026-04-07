import { Notification } from "@/types/notification";

export const notifications: Notification[] = [
    { id: "1", type: "review_req", title: "Review requested on your PR", body: "Tasmia Nur requested your review on feat: add PR cycle time chart", repo: "devpulse/web", time: "2 min ago", read: false, urgent: true },
    { id: "2", type: "merge", title: "PR merged", body: "Your PR feat: OAuth token refresh logic was merged by @karimh", repo: "devpulse/backend", time: "1 hr ago", read: false },
    { id: "3", type: "review_done", title: "Review left on your PR", body: "Priya Sharma left 3 comments on fix: rate limiter edge case", repo: "devpulse/api", time: "3 hrs ago", read: false },
    { id: "4", type: "goal", title: "Goal completed", body: "You hit your goal — Maintain 80%+ review rate. Keep it up! 🎯", time: "5 hrs ago", read: false },
    { id: "5", type: "review_req", title: "Review requested on your PR", body: "Karim Hassan requested your review on chore: upgrade Prisma to v5.8", repo: "devpulse/backend", time: "8 hrs ago", read: true },
    { id: "6", type: "team", title: "New team member joined", body: "Sara Müller (@saram) joined your team as QA / Testing", time: "1 day ago", read: true },
    { id: "7", type: "merge", title: "PR merged", body: "Your PR fix: heatmap tooltip positioning was merged by @tasmia", repo: "devpulse/web", time: "1 day ago", read: true },
    { id: "8", type: "milestone", title: "Milestone reached", body: "devpulse/web crossed 100 GitHub stars! ⭐", repo: "devpulse/web", time: "2 days ago", read: true },
    { id: "9", type: "mention", title: "You were mentioned", body: "@karimh mentioned you in a comment: 'cc @rafiq for the auth logic'", repo: "devpulse/backend", time: "2 days ago", read: true },
    { id: "10", type: "review_done", title: "Review approved", body: "Dmitri Volkov approved your PR refactor: extract GitHub service layer", repo: "devpulse/backend", time: "3 days ago", read: true },
    { id: "11", type: "goal", title: "Goal completed", body: "You completed — Reduce cycle time below 20h. New avg: 18h", time: "3 days ago", read: true },
    { id: "12", type: "merge", title: "PR merged", body: "Your PR feat: contribution heatmap component was merged by @priya_s", repo: "devpulse/web", time: "4 days ago", read: true },
];

export const notificationFilterTabs = ["All", "Unread", "Reviews", "PRs", "Goals", "Team"];
