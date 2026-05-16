import { HeaderActions } from "./HeaderActions";
import type { ProfileHeaderActionModel } from "../../model/profile/profile.types";

interface ProfileHeaderProps {
  title: string;
  actions: ProfileHeaderActionModel[];
}

export function ProfileHeader({ title, actions }: ProfileHeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-4 border-b border-border/40 bg-primaryColor px-6">
      <span className="text-[13px] font-medium text-foreground/90">{title}</span>
      <div className="flex-1" />
      <HeaderActions actions={actions} />
    </header>
  );
}
