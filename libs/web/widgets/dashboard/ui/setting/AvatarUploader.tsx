import { memo } from "react";

import { Button } from "@/components/ui/button";

interface AvatarUploaderProps {
  helperText: string;
  initials: string;
}

export const AvatarUploader = memo(function AvatarUploader({
  helperText,
  initials,
}: AvatarUploaderProps) {
  return (
    <div className="mb-6 flex items-center gap-5 border-b border-border/40 pb-6">
      <div className="relative">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 text-xl font-semibold text-white">
          {initials}
        </div>
        <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-card bg-emerald-400" />
      </div>
      <div className="flex flex-col gap-2">
        <Button className="h-8 border-border/40 bg-muted/30 text-[11px] text-muted-foreground/70 hover:border-border/60 hover:bg-muted/80 hover:text-foreground" size="sm" variant="outline">
          Change avatar
        </Button>
        <p className="text-[10px] text-muted-foreground/40">{helperText}</p>
      </div>
    </div>
  );
});

