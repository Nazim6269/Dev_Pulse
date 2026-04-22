import type { ProfileLanguageModel } from "@/features/profile/types/profile.types";

export function LanguageItem({ item }: { item: ProfileLanguageModel }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: item.color }} />
      <span className="flex-1 text-[12px] text-white/50">{item.label}</span>
    </div>
  );
}
