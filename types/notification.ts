import {
    GitMerge,
    GitPullRequest,
    Eye,
    Target,
    Users,
    Zap,
    CheckCheck,
    Filter,
    Bell,
    BellOff,
    Clock,
    Star,
} from "lucide-react";

type NotifType = "merge" | "review_req" | "review_done" | "goal" | "team" | "mention" | "milestone";

export interface Notification {
    id: string;
    type: NotifType;
    title: string;
    body: string;
    repo?: string;
    time: string;
    read: boolean;
    urgent?: boolean;
}

export const typeConfig: Record<NotifType, { icon: React.ElementType; iconColor: string; iconBg: string }> = {
    merge: { icon: GitMerge, iconColor: "text-violet-400", iconBg: "bg-violet-500/15" },
    review_req: { icon: Eye, iconColor: "text-amber-400", iconBg: "bg-amber-500/15" },
    review_done: { icon: GitPullRequest, iconColor: "text-blue-400", iconBg: "bg-blue-500/15" },
    goal: { icon: Target, iconColor: "text-emerald-400", iconBg: "bg-emerald-500/15" },
    team: { icon: Users, iconColor: "text-pink-400", iconBg: "bg-pink-500/15" },
    mention: { icon: Zap, iconColor: "text-rose-400", iconBg: "bg-rose-500/15" },
    milestone: { icon: Star, iconColor: "text-amber-400", iconBg: "bg-amber-500/15" },
};
