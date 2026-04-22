import type { ProfileMetaItemModel } from "@/features/profile/types/profile.types";

interface ProfileMetaProps {
  items: ProfileMetaItemModel[];
}

export function ProfileMeta({ items }: ProfileMetaProps) {
  const metaItems = items.map((item) => {
    const Icon = item.icon;
    const toneClass = item.tone === "violet" ? "text-violet-400/70" : "text-white/35";

    return (
      <div key={item.id} className={`flex items-center gap-2 text-[12px] ${toneClass}`}>
        <Icon size={12} className="shrink-0" />
        {item.value}
      </div>
    );
  });

  return <div className="flex flex-col gap-2">{metaItems}</div>;
}
