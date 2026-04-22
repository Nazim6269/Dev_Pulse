import { HeaderActions } from "@/features/profile/components/header/HeaderActions";
import type { ProfileHeaderActionModel } from "@/features/profile/types/profile.types";

interface ProfileHeaderProps {
  title: string;
  actions: ProfileHeaderActionModel[];
}

export function ProfileHeader({ title, actions }: ProfileHeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-4 border-b border-white/[0.06] bg-primaryColor px-6">
      <span className="text-[13px] font-medium text-white/90">{title}</span>
      <div className="flex-1" />
      <HeaderActions actions={actions} />
    </header>
  );
}
