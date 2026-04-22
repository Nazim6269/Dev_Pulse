import { Button } from "@/components/ui/button";
import type { ProfileHeaderActionModel } from "@/features/profile/types/profile.types";

export function EditProfile({ action }: { action: ProfileHeaderActionModel }) {
  const Icon = action.icon;

  return (
    <Button
      size="sm"
      className="h-8 gap-1.5 border border-violet-500/30 bg-violet-500/20 text-[11px] text-violet-400 hover:bg-violet-500/30"
    >
      <Icon size={12} />
      {action.label}
    </Button>
  );
}
