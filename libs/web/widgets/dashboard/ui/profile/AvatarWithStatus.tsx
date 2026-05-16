import { StatusDot } from "./shared/StatusDot";

interface AvatarWithStatusProps {
  initials: string;
  status: "online" | "offline";
}

export function AvatarWithStatus({ initials, status }: AvatarWithStatusProps) {
  return (
    <div className="relative self-start">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 text-2xl font-semibold text-white shadow-2xl shadow-orange-500/20">
        {initials}
      </div>
      <StatusDot status={status} className="absolute -bottom-1 -right-1 h-5 w-5" />
    </div>
  );
}
