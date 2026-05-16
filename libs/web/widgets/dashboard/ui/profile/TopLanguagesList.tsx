import type { ProfileLanguageModel } from "../../model/profile/profile.types";
import { LanguageItem } from "./LanguageItem";

interface TopLanguagesListProps {
  items: ProfileLanguageModel[];
}

export function TopLanguagesList({ items }: TopLanguagesListProps) {
  const languageItems = items.map((item) => <LanguageItem key={item.id} item={item} />);

  return (
    <div>
      <p className="mb-2.5 text-[10px] uppercase tracking-widest text-muted-foreground/40">Top languages</p>
      <div className="flex flex-col gap-2">{languageItems}</div>
    </div>
  );
}
