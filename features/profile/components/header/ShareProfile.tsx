import { Button } from "@/components/ui/button";
import type { ProfileHeaderActionModel } from "@/features/profile/types/profile.types";

export function ShareProfile({ action }: { action: ProfileHeaderActionModel }) {
  const Icon = action.icon;

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 gap-1.5 text-[11px] text-white/40 hover:text-white/70"
    >
      <Icon size={13} />
      {action.label}
    </Button>
  );
}
