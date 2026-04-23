import {
    LayoutDashboard,
    GitPullRequest,
    GitCommit,
    Users,
    Target,
    Settings,
    Bell,
    Zap,
} from "lucide-react";

export const navItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/" },
    { icon: GitPullRequest, label: "Pull Requests", href: "/pull-requests" },
    { icon: GitCommit, label: "Commits", href: "/commits" },
    { icon: Users, label: "Team", href: "/team" },
    { icon: Target, label: "Goals", href: "/goals" },
];

export const bottomItems = [
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Settings, label: "Settings", href: "/settings" },
];
