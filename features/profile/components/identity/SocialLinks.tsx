import { Button } from "@/components/ui/button";
import type { SocialLinkModel } from "@/features/profile/types/profile.types";

interface SocialLinksProps {
  items: SocialLinkModel[];
}

export function SocialLinks({ items }: SocialLinksProps) {
  const socialItems = items.map((item) => {
    const Icon = item.icon;

    return (
      <Button
        key={item.id}
        variant="ghost"
        size="sm"
        className="h-8 gap-1.5 px-2 text-[11px] text-white/30 hover:bg-white/[0.06] hover:text-white/70"
      >
        <Icon size={15} />
        {item.label}
      </Button>
    );
  });

  return <div className="flex gap-2 pt-1">{socialItems}</div>;
}
