import type { ProfileLanguageModel } from "../../model/profile/profile.types";

export function LanguageItem({ item }: { item: ProfileLanguageModel }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: item.color }} />
      <span className="flex-1 text-[12px] text-muted-foreground/60">{item.label}</span>
    </div>
  );
}
