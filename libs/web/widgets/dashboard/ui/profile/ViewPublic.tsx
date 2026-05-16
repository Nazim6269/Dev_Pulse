import { Button } from "@/components/ui/button";
import type { ProfileHeaderActionModel } from "../../model/profile/profile.types";

export function ViewPublic({ action }: { action: ProfileHeaderActionModel }) {
  const Icon = action.icon;

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 gap-1.5 text-[11px] text-muted-foreground/60 hover:text-foreground/80"
    >
      <Icon size={13} />
      {action.label}
    </Button>
  );
}
