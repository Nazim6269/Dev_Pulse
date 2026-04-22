import type { ProfileLanguageModel } from "@/features/profile/types/profile.types";

import { LanguageItem } from "./LanguageItem";

interface TopLanguagesListProps {
  items: ProfileLanguageModel[];
}

export function TopLanguagesList({ items }: TopLanguagesListProps) {
  const languageItems = items.map((item) => <LanguageItem key={item.id} item={item} />);

  return (
    <div>
      <p className="mb-2.5 text-[10px] uppercase tracking-widest text-white/20">Top languages</p>
      <div className="flex flex-col gap-2">{languageItems}</div>
    </div>
  );
}
